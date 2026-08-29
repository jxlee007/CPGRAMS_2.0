// voiceService.ts - REAL SARVAM SPEECH-TO-TEXT
// Drop this file into: src/services/voiceService.ts
// This replaces any demo implementation with real Sarvam API integration

interface SarvamConfig {
  apiKey: string;
  language: 'hi' | 'en' | 'hi-en';
  sampleRate: number;
}

class SarvamSTTService {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private stream: MediaStream | null = null;
  private apiKey: string;
  private language: 'hi' | 'en' | 'hi-en';

  constructor(config: SarvamConfig) {
    this.apiKey = config.apiKey;
    this.language = config.language || 'hi-en';
  }

  /**
   * START RECORDING
   * Requests microphone permission and begins audio capture
   * Returns: { success: boolean, error?: string }
   */
  async startRecording(): Promise<{
    success: boolean;
    error?: string;
  }> {
    try {
      // Request microphone access from browser
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 16000,
        },
      });

      // Determine best supported mime type
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : 'audio/wav';

      // Create MediaRecorder instance
      this.mediaRecorder = new MediaRecorder(this.stream, { mimeType });
      this.audioChunks = [];

      // Collect audio data chunks as they're recorded
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      // Start recording
      this.mediaRecorder.start();

      return { success: true };
    } catch (error) {
      console.error('Microphone access error:', error);
      const errorMsg = error instanceof Error 
        ? error.message 
        : 'Microphone access denied';
      
      return {
        success: false,
        error: `Microphone access denied. Please enable microphone permissions. (${errorMsg})`,
      };
    }
  }

  /**
   * STOP RECORDING
   * Stops audio capture and returns the audio blob
   * Returns: Promise<Blob | null>
   */
  stopRecording(): Promise<Blob | null> {
    if (!this.mediaRecorder) return Promise.resolve(null);

    return new Promise((resolve) => {
      if (!this.mediaRecorder) {
        resolve(null);
        return;
      }

      this.mediaRecorder.onstop = () => {
        // Combine all audio chunks into single blob
        const audioBlob = new Blob(this.audioChunks, {
          type: this.mediaRecorder!.mimeType,
        });
        this.audioChunks = [];

        // Stop all audio tracks and clean up
        if (this.stream) {
          this.stream.getTracks().forEach((track) => track.stop());
          this.stream = null;
        }

        resolve(audioBlob);
      };

      // Trigger the onstop callback
      this.mediaRecorder.stop();
    });
  }

  /**
   * SEND TO SARVAM API
   * Sends audio blob to Sarvam cloud for speech-to-text conversion
   * Returns: { success: boolean, text?: string, error?: string }
   */
  async sendToSarvamAPI(audioBlob: Blob): Promise<{
    success: boolean;
    text?: string;
    error?: string;
  }> {
    try {
      // Create FormData for multipart upload
      const formData = new FormData();
      formData.append('file', audioBlob, 'audio.wav');
      formData.append('language_code', this.language);

      console.log('🔵 Sending to Sarvam API...');
      console.log('Audio size:', audioBlob.size, 'bytes');
      console.log('Language:', this.language);

      // Call Sarvam API
      const response = await fetch(
        'https://api.sarvam.ai/speech-to-text',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
          },
          body: formData,
        }
      );

      console.log('Sarvam API Response Status:', response.status);

      if (!response.ok) {
        let errorMessage = 'Unknown error';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error?.message || errorData.message || 'API Error';
        } catch {
          errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        }
        
        console.error('🔴 Sarvam API Error:', errorMessage);
        return {
          success: false,
          error: `Sarvam API Error: ${errorMessage}`,
        };
      }

      const data = await response.json();
      console.log('🟢 Sarvam Response:', data);

      // Extract transcript from response
      const transcript = data.transcript || '';

      if (!transcript) {
        return {
          success: false,
          error: 'No transcription received from Sarvam',
        };
      }

      console.log('🟢 Transcription Success:', transcript);

      return {
        success: true,
        text: transcript,
      };
    } catch (error) {
      console.error('Sarvam API Error:', error);
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      
      return {
        success: false,
        error: `Transcription failed: ${errorMsg}. Check API key and network connection.`,
      };
    }
  }

  /**
   * FULL PIPELINE
   * Complete flow: Record audio -> Stop recording -> Send to Sarvam
   * This is a helper method for simple use cases
   */
  async recordAndTranscribe(): Promise<{
    success: boolean;
    text?: string;
    error?: string;
  }> {
    // Step 1: Start recording
    const startResult = await this.startRecording();
    if (!startResult.success) {
      return { success: false, error: startResult.error };
    }

    // Step 2: Wait for user to stop (managed by UI)
    // Step 3: When user clicks stop, call stopRecording() from UI

    return { success: true };
  }
}

export default SarvamSTTService;
