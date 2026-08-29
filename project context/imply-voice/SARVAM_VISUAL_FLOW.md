# SARVAM STT FLOW DIAGRAM & QUICK REFERENCE

## FLOW: User Speaks → Real Text Appears

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER INTERFACE (FileComplaint.tsx)            │
└─────────────────────────────────────────────────────────────────┘
                              │
                    1️⃣ User clicks
                "🎤 Start Recording"
                              │
                              ▼
        ┌──────────────────────────────────────┐
        │  Browser Requests Microphone Access  │
        │  (navigator.mediaDevices.getUserMedia) 
        └──────────────────────────────────────┘
                              │
                    2️⃣ User allows
                    microphone access
                              │
                              ▼
        ┌──────────────────────────────────────┐
        │  RED INDICATOR SHOWS: Recording...   │
        │  Timer: 0:00 → 0:05 → 0:10...       │
        │  Audio streaming from microphone     │
        └──────────────────────────────────────┘
                              │
                    3️⃣ User speaks
                    grievance details
                              │
                              ▼
        ┌──────────────────────────────────────┐
        │  User clicks "⏹️ Stop Recording"     │
        └──────────────────────────────────────┘
                              │
                              ▼
        ┌──────────────────────────────────────┐
        │  Audio Blob Created (WebM/WAV)       │
        │  All chunks combined into single blob │
        │  Microphone stream stopped           │
        └──────────────────────────────────────┘
                              │
                    4️⃣ Button shows
                "Converting..." (spinner)
                              │
                              ▼
┌──────────────────────────────────────────────────┐
│         SARVAM API SERVICE (voiceService.ts)     │
│                                                   │
│  sendToSarvamAPI(audioBlob)                     │
│  ├─ Create FormData                             │
│  ├─ Append audio blob                           │
│  ├─ Set language_code (hi-en/hi/en)            │
│  └─ Add Authorization header (API Key)          │
└──────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────┐
│        INTERNET → SARVAM CLOUD (Real API)       │
│                                                   │
│  POST https://api.sarvam.ai/speech-to-text     │
│  │                                               │
│  ├─ Audio file uploaded                         │
│  ├─ Sarvam AI processes audio                   │
│  ├─ Bilingual model converts to text            │
│  └─ Returns JSON response                       │
│                                                   │
│  Response:                                       │
│  {                                               │
│    "transcript": "मुझे यह समस्या है...",       │
│    "confidence": 0.95                           │
│  }                                               │
└──────────────────────────────────────────────────┘
                              │
                    5️⃣ Response returns
                   (2-5 seconds wait)
                              │
                              ▼
┌──────────────────────────────────────────────────┐
│         UPDATE COMPLAINT FIELD                   │
│                                                   │
│  complaintDetails = response.transcript         │
│                                                   │
│  Show success message:                          │
│  ✓ Transcribed: "मुझे यह समस्या है..."       │
└──────────────────────────────────────────────────┘
                              │
                              ▼
        ┌──────────────────────────────────────┐
        │   TEXTAREA SHOWS REAL TEXT (NOT DEMO)   │
        │                                       │
        │   "मुझे यह समस्या है..."            │
        │                                       │
        │   User can:                          │
        │   ✓ Read transcription               │
        │   ✓ Edit if needed                   │
        │   ✓ Add more by recording again      │
        │   ✓ Click "Submit Grievance"        │
        └──────────────────────────────────────┘
```

---

## DEMO TEXT vs REAL TEXT COMPARISON

### ❌ OLD (DEMO - Remove This)
```typescript
const mockData = {
  complaintDetails: "This is demo text. Replace with real Sarvam transcription."
};
```

### ✅ NEW (REAL - Use This)
```typescript
// User speaks: "मुझे सड़क की खराब स्थिति के बारे में शिकायत करनी है"

const handleStopRecording = async () => {
  const audioBlob = await sttServiceRef.current.stopRecording();
  const result = await sttServiceRef.current.sendToSarvamAPI(audioBlob);
  
  // REAL DATA from Sarvam
  setComplaintDetails(result.text); 
  // Field shows: "मुझे सड़क की खराब स्थिति के बारे में शिकायत करनी है"
};
```

---

## NETWORK REQUEST VISUALIZATION

### API Call Details

```
REQUEST:
┌─ Method: POST
├─ URL: https://api.sarvam.ai/speech-to-text
├─ Headers:
│  └─ Authorization: Bearer YOUR_SARVAM_API_KEY
└─ Body: FormData
   ├─ file: [audio blob from microphone]
   └─ language_code: "hi-en"

RESPONSE (2-5 seconds):
┌─ Status: 200 OK
└─ Body: JSON
   ├─ "transcript": "user's spoken text here"
   ├─ "confidence": 0.92-0.99
   └─ "processing_time": "2.34s"
```

---

## STATE CHANGES TIMELINE

```
Timeline: User Records → Text Appears

T=0s     → isRecording = true,  recordingTime = 0
T=0.1s   → recordingTime = 0.1 (timer updates)
T=1s     → recordingTime = 1.0 (red indicator)
T=5s     → recordingTime = 5.0 (user stops)
T=5.1s   → isRecording = false, isProcessing = true
         → User hears spinner: "Converting..."
T=5.2s   → Sarvam API call sent to cloud
T=7.5s   → API response received
T=7.6s   → complaintDetails = "real transcribed text"
         → isProcessing = false
         → Success message shown
T=8s     → User sees text in textarea
         → Can edit/submit/record again
```

---

## FILE COMPLAINT FIELD BEHAVIOR

### Before Implementation
```
[Complaint Details Textarea]
┌────────────────────────────────────────┐
│ This is demo text that was hardcoded   │
│ in mockData. Not from actual recording │
└────────────────────────────────────────┘
```

### After Implementation
```
[Complaint Details Textarea] (Recording: 0:05)
┌────────────────────────────────────────┐
│ मुझे मेरे क्षेत्र में सड़क की खराब    │
│ स्थिति की शिकायत करनी है। पिछले     │
│ तीन महीने से यह ठीक नहीं किया गया है │
│ और हर बारिश में बाढ़ आ जाती है।      │
└────────────────────────────────────────┘
✓ Transcribed: "मुझे मेरे क्षेत्र में..."
```

---

## BUTTON STATE MACHINE

```
START
  │
  ▼
┌─────────────────────────┐
│ "🎤 Start Recording"    │ (GREEN, enabled)
│ onClick → handleStart   │
└─────────────────────────┘
  │
  ▼
┌─────────────────────────┐
│ "⏹️ Stop Recording"     │ (RED, enabled)
│ onClick → handleStop    │ Recording: 0:00...0:25
└─────────────────────────┘
  │
  ▼
┌─────────────────────────┐
│ (CONVERTING...spinner)  │ (DISABLED, spinning)
│ isProcessing = true     │ API call in progress
└─────────────────────────┘
  │
  ▼
┌─────────────────────────┐
│ "🎤 Start Recording"    │ (GREEN, enabled again)
│ isProcessing = false    │ Ready for next recording
│ complaintDetails filled │
└─────────────────────────┘
  │
  ▼
(LOOP or SUBMIT)
```

---

## ERROR HANDLING FLOW

```
User Clicks "Start Recording"
  │
  ├─ Try: navigator.mediaDevices.getUserMedia()
  │
  ├─ ✓ Success
  │ │
  │ └─ setIsRecording(true)
  │    Start recording...
  │
  └─ ✗ Error (e.g., "Permission Denied")
    │
    └─ setError("Microphone access denied...")
       Show error box with red background
       Button becomes enabled again
       User can retry


User Clicks "Stop Recording"
  │
  ├─ Try: sendToSarvamAPI(audioBlob)
  │
  ├─ ✓ Success (response.success === true)
  │ │
  │ └─ setComplaintDetails(result.text)
  │    Show success message
  │    Ready for next recording
  │
  └─ ✗ Error (e.g., "API Key Invalid")
    │
    └─ setError("Sarvam API error: Invalid API key")
       Show error box with red background
       User can try again after fixing .env
```

---

## INTEGRATION CHECKLIST

```
BEFORE STARTING
[ ] You have Sarvam API key
[ ] API key stored in .env file
[ ] FileComplaint.tsx component exists
[ ] voiceService.ts file exists

CODE CHANGES
[ ] Copy voiceService.ts code from Step 1
[ ] Copy FileComplaint.tsx code from Step 2
[ ] Update .env with Sarvam API key
[ ] Verify import paths are correct (@/services, @/components)

TESTING
[ ] npm run dev (no build errors)
[ ] Navigate to /file-complaint page
[ ] Click "Start Recording" (browser asks for microphone)
[ ] Allow microphone access
[ ] Speak test phrase in Hindi or English
[ ] Click "Stop Recording" (shows spinner)
[ ] Wait 2-5 seconds for API response
[ ] Real transcribed text appears in textarea
[ ] Test multiple recordings (should append)
[ ] Test error scenarios (deny mic, invalid API key)

LANGUAGE TESTING
[ ] Switch to Hindi (🇮🇳 Hindi) and record
[ ] Switch to English (🇬🇧 English) and record  
[ ] Switch to Mixed (🇮🇳 Hindi+English) and record
[ ] All should transcribe correctly

CLEANUP
[ ] Remove any remaining demo text references
[ ] Remove mockData imports if not needed elsewhere
[ ] Check console for warnings/errors
[ ] Verify .env is in .gitignore (security!)
```

---

## COMMON MISTAKES TO AVOID

```
❌ WRONG: Still using hardcoded mockData
const complaintDetails = "This is demo text...";

✅ RIGHT: Using Sarvam API response
setComplaintDetails(result.text);


❌ WRONG: Calling Sarvam API without await
const result = sttServiceRef.current.sendToSarvamAPI(blob);
console.log(result.text); // undefined!

✅ RIGHT: Using await
const result = await sttServiceRef.current.sendToSarvamAPI(blob);
console.log(result.text); // real transcription


❌ WRONG: Forgetting API key in .env
// Code tries to use undefined
const apiKey = import.meta.env.VITE_SARVAM_API_KEY; // undefined

✅ RIGHT: Set in .env
VITE_SARVAM_API_KEY=your_actual_key_here


❌ WRONG: Not handling errors
const result = await sendToSarvamAPI(blob);
setComplaintDetails(result.text); // crashes if error!

✅ RIGHT: Check success flag
const result = await sendToSarvamAPI(blob);
if (result.success) {
  setComplaintDetails(result.text);
} else {
  setError(result.error);
}
```

---

## QUICK VERIFICATION TEST

After implementation, run this check:

```javascript
// Open browser console (F12)
// Navigate to /file-complaint
// Paste this:

const testText = "মুझे सड़क की समस्या है";
console.log("🎤 Sarvam STT Implementation Test");
console.log("Field shows real text:", testText);
console.log("✓ Ready to speak");

// Actual flow:
1. Speak something
2. Check Network tab (F12 → Network)
3. Look for request to: api.sarvam.ai/speech-to-text
4. Click it → Response tab
5. Verify response contains "transcript": "your spoken text"
```

---

## MONITORING & LOGS

Enable detailed logging:

```typescript
// Add to voiceService.ts for debugging:

async sendToSarvamAPI(audioBlob: Blob) {
  console.log('🔵 Sarvam API Call Starting');
  console.log('Audio blob size:', audioBlob.size, 'bytes');
  console.log('Language:', this.language);
  
  try {
    const response = await fetch('https://api.sarvam.ai/speech-to-text', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${this.apiKey}` },
      body: formData
    });
    
    console.log('🟢 Sarvam Response Status:', response.status);
    const data = await response.json();
    console.log('🟢 Sarvam Response:', data);
    
    return { success: true, text: data.transcript };
  } catch (error) {
    console.log('🔴 Sarvam Error:', error);
    return { success: false, error: error.message };
  }
}
```

---

**Copy this guide for reference during implementation!**
