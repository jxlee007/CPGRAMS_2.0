# CPGRAMS 2.0: REDESIGNED FOR THE ORDINARY INDIAN CITIZEN

## THE PROBLEM WITH CURRENT CPGRAMS UX

Current experience is designed for **educated English-speaking people on desktop.**

Expected Reality: CPGRAMS users are:
- 🚜 Farmers in villages (Rajasthan, Bihar)
- 👷 Construction workers (Maharashtra, Delhi)
- 🛣️ Daily wage laborers (Tamil Nadu, Karnataka)
- 🗣️ Non-English speakers (prefer Hindi/Regional)
- 👵 Housewives (UP, West Bengal)
- 📱 Mobile-only users (2G connections)
- 📖 Low literacy (avoid reading long forms)
- Working Professionals & Salaried Employees: Individuals filing complaints related to the Employees' Provident Fund Organisation (EPFO).
- Taxpayers: Citizens tracking Income Tax refund matters.
- Farmers & Rural Beneficiaries: Rural citizens tracking central agricultural welfare schemes, primarily PM-Kisan related issues.
- Banking Consumers: Account holders filing grievances against public sector banks for banking fraud, transactional errors, or service delays.
- Daily Postal and Telecom Consumers: Citizens dealing with consumer delivery issues like delayed Speed Post letters or telecom connectivity disruptions.




**Current CPGRAMS asks them to:**
- Fill 15-field form
- Attach documents
- Remember reference numbers
- Navigate dropdown menus
- Read English descriptions

**They give up after 2 minutes.**

---

## NEW UX PRINCIPLES (REDESIGNED)

### PRINCIPLE 1: VOICE FIRST, TYPING SECOND
Instead of filling forms, **speak your problem** in your own language.

### PRINCIPLE 2: ONE ACTION PER SCREEN
No overwhelming forms. One button. One action. Done.

### PRINCIPLE 3: BIG BUTTONS, CLEAR ICONS
- Buttons: 60px height (thumb-friendly)
- Icons: 48px (clear visuals, not text)
- Text: 18px minimum (readable without glasses)

### PRINCIPLE 4: REGIONAL LANGUAGE FROM START
- 🇮🇳 Hindi
- 🇮🇳 Punjabi
- 🇮🇳 Tamil
- 🇮🇳 Telugu
- 🇮🇳 Bengali
- 🇮🇳 Marathi
- 🇮🇳 Gujarati
- 🇮🇳 Kannada
- Default: User's phone language

### PRINCIPLE 5: ZERO JARGON
❌ "Register your grievance under Section 6(1) of the RTI Act"
✅ "Tell us your problem"

### PRINCIPLE 6: INSTANT FEEDBACK
Every action → immediate confirmation (not loading spinners)

### PRINCIPLE 7: MOBILE ONLY (No desktop first)
Desktop is secondary. Mobile IS the product.

### PRINCIPLE 8: WORKS ON 2G
- No images (except icons)
- Minimal data usage
- Offline mode (save draft locally)

---

## REDESIGNED USER JOURNEY

### SCENARIO: Ramesh, 52-year-old farmer from Madhya Pradesh
- Phone: Samsung J2 (2G capable)
- Language: Hindi
- Problem: Pension not arrived for 3 months
- Literacy: Class 5 (can read Hindi, struggles with English)

---

## STEP-BY-STEP UX FLOW

### SCREEN 0: LANGUAGE SELECTION (On First Load)
```
┌─────────────────────────────────────────┐
│                                         │
│   कौन सी भाषा बोलते हैं?              │
│   (Which language do you speak?)        │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  🇮🇳 हिंदी (HINDI)              │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  🇮🇳 தமிழ் (TAMIL)              │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  🇮🇳 English                    │   │
│   └─────────────────────────────────┘   │
│                                         │
│   [Remember my choice]                  │
│                                         │
└─────────────────────────────────────────┘

ACTION: Tap language → Saved to phone locally
NEXT: Go to Home screen
```

---

### SCREEN 1: HOME (MAIN MENU)
```
┌─────────────────────────────────────────┐
│                                         │
│   मेरी शिकायत                          │
│   (MY PROBLEM)                          │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │    🎤  अपनी समस्या बोलो          │   │
│   │    (Speak Your Problem)          │   │
│   │                                 │   │
│   │    TAP & HOLD: Speak in Hindi    │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   OR                                    │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │    ✍️  लिखो (Type)               │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ────────────────────────────────────   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  📋 मेरे केस देखो               │   │
│   │  (View My Cases)                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  ❓ मदद चाहिए?                  │   │
│   │  (Need Help?)                    │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘

DESIGN NOTES:
- 4 buttons only (not 10 menu items)
- Each button = 60px height
- Icons are LARGE (48px)
- Text below icon (not inside button)
- No dropdown menus
- One action per screen
```

---

### SCREEN 2A: VOICE INPUT (TAP & HOLD)
```
┌─────────────────────────────────────────┐
│                                         │
│        🎤                               │
│                                         │
│    बोलना शुरू करो                      │
│    (START SPEAKING)                     │
│                                         │
│    ────────────────────────────────    │
│    |████████████████||||||||||||    │   │
│    (Visual waveform - animates)         │
│    ────────────────────────────────    │
│                                         │
│    ✋ बोलते रहो                         │
│    (Keep speaking...)                   │
│                                         │
│    ┌─────────────────────────────────┐   │
│    │  ⏹️  बोलना बंद करो              │   │
│    │  (STOP SPEAKING - Red button)   │   │
│    └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘

INTERACTION:
- User taps microphone on Screen 1
- Transition to this screen
- Phone starts recording (visual waveform)
- User speaks in Hindi
- After 30 seconds OR user taps STOP → Record
- Send to LLM for classification
```

---

### SCREEN 2B: TEXT INPUT (SIMPLE)
```
┌─────────────────────────────────────────┐
│                                         │
│   अपनी समस्या लिखो                     │
│   (Write Your Problem)                  │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │  मेरी पेंशन 3 महीने से नहीं     │   │
│   │  आई है...                       │   │
│   │                                 │   │
│   │  (Cursor blinking)               │   │
│   │                                 │   │
│   │  [Text grows with input]         │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ✍️ Remaining: 500 chars               │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  ✅ आगे बढ़ो                    │   │
│   │  (NEXT)                         │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘

DESIGN NOTES:
- Big textarea (not cramped)
- Placeholder text in Hindi (example)
- NO word limit imposed (only suggestion)
- Auto-focus keyboard
- One button: NEXT
```

---

### SCREEN 3: CONFIRMATION (WHAT WE HEARD)
```
┌─────────────────────────────────────────┐
│                                         │
│   हमने समझा:                           │
│   (WE UNDERSTOOD:)                      │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │  "मेरी पेंशन 3 महीने से नहीं    │   │
│   │   आई है"                        │   │
│   │                                 │   │
│   │  (Shows exactly what was heard)  │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   क्या ये सही है?                     │
│   (Is this correct?)                    │
│                                         │
│   ┌──────────┐      ┌──────────────┐   │
│   │  ❌ नहीं  │      │  ✅ हाँ      │   │
│   │  (NO)    │      │  (YES)       │   │
│   └──────────┘      └──────────────┘   │
│                                         │
└─────────────────────────────────────────┘

INTERACTION:
- If NO → Go back to Screen 2B (edit)
- If YES → Process & move to Screen 4
```

---

### SCREEN 4: MAGIC MOMENT (ROUTING)
```
┌─────────────────────────────────────────┐
│                                         │
│   🎯  सही जगह मिल गई!                │
│   (WE FOUND THE RIGHT PLACE!)          │
│                                         │
│   ────────────────────────────────────  │
│                                         │
│   ✅ EPFO                               │
│   (कर्मचारी भविष्य निधि)              │
│   (Employee Provident Fund)             │
│                                         │
│   ────────────────────────────────────  │
│                                         │
│   क्यों?                                │
│   (WHY?)                                │
│                                         │
│   "आपकी पेंशन EPFO के द्वारा          │
│    संभाली जाती है, न कि बैंक द्वारा   │
│    इसलिए हम सीधे EPFO को भेज रहे हैं" │
│                                         │
│   (Your pension is handled by EPFO,     │
│    not the bank. So we're sending       │
│    directly to them)                    │
│                                         │
│   ────────────────────────────────────  │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  ✅ अच्छा, आगे बढ़ो             │   │
│   │  (OK, CONTINUE)                 │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘

DESIGN NOTES:
- Large checkmark (✅) is SUCCESS
- Simple explanation (not technical)
- One button to continue
- NO comparison with old system (confusing)
- Just show: THIS IS RIGHT
```

---

### SCREEN 5: YOUR CASE NUMBER (SAVE THIS)
```
┌─────────────────────────────────────────┐
│                                         │
│   आपकी शिकायत दर्ज हुई                │
│   (YOUR COMPLAINT IS REGISTERED)       │
│                                         │
│   ────────────────────────────────────  │
│                                         │
│   📋 यह नंबर याद रखो:                │
│   (REMEMBER THIS NUMBER:)               │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │   CPG_20260825_001              │   │
│   │                                 │   │
│   │   (Large, bold, easy to read)   │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  📋 कॉपी करो (COPY)            │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  📲 SMS भेजो (SEND SMS)         │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ────────────────────────────────────  │
│                                         │
│   📅 अगला कदम: 3 दिन में EPFO से     │
│      contact होगा                       │
│                                         │
│   (Next step: EPFO will contact         │
│    you in 3 days)                       │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  ✅ घर चले जाओ                 │   │
│   │  (GO HOME)                      │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘

INTERACTION:
- Show case number HUGE (not small text)
- Offer copy (WhatsApp/SMS friendly)
- Explain next step in simple words
- GO HOME = back to main menu
```

---

### SCREEN 6: MY CASES (SIMPLE LIST)
```
┌─────────────────────────────────────────┐
│                                         │
│   मेरे केस                              │
│   (MY CASES)                            │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │  CPG_20260825_001               │   │
│   │  पेंशन नहीं आई                  │   │
│   │  (Pension Not Arrived)           │   │
│   │                                 │   │
│   │  Status: ✅ EPFO को भेजा गया    │   │
│   │  Filed: 25 Aug 2026              │   │
│   │  Days: 0 दिन                     │   │
│   │                                 │   │
│   │  ► विस्तार देखो (View Details)   │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │  CPG_20260715_002               │   │
│   │  आयकर रिफंड 2 साल से लंबित      │   │
│   │  (Tax Refund Pending 2 Years)    │   │
│   │                                 │   │
│   │  Status: ⚠️  अपील के लिए         │   │
│   │  Filed: 15 Jul 2024              │   │
│   │  Days: 737 दिन                   │   │
│   │                                 │   │
│   │  ► विस्तार देखो (View Details)   │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  ➕ नया केस जोड़ो (ADD NEW)      │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘

DESIGN NOTES:
- Each case is ONE card
- NO table layout (confusing on mobile)
- Status shown with emoji + Hindi
- Tap card = see details
- Only info that matters shown
```

---

### SCREEN 7: CASE DETAIL (TIMELINE)
```
┌─────────────────────────────────────────┐
│                                         │
│   CPG_20260825_001                      │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  📍 EPFO को भेजा गया            │   │
│   │  (Sent to EPFO)                 │   │
│   │                                 │   │
│   │  ✓ 25 Aug 2026                  │   │
│   └─────────────────────────────────┘   │
│                                         │
│         ▼ (connecting line)              │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  📍 EPFO ने पढ़ा                 │   │
│   │  (EPFO Reviewed)                │   │
│   │                                 │   │
│   │  ✓ 26 Aug 2026                  │   │
│   │                                 │   │
│   │  (आपके दस्तावेज़ चेक किए जाएंगे  │   │
│   │   Documents will be verified)   │   │
│   └─────────────────────────────────┘   │
│                                         │
│         ▼                                │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  📍 अगला कदम: आपसे बात करेंगे   │   │
│   │  (Next: We'll Call You)         │   │
│   │                                 │   │
│   │  ⏳ 3 सितंबर तक (by Sep 3)      │   │
│   │                                 │   │
│   │  (फोन पर बुलेंगे - They'll call   │   │
│   │   on your phone)                │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ────────────────────────────────────  │
│                                         │
│   📞 EPFO फोन नंबर:                    │
│   1800-180-1111                         │
│                                         │
│   ┌──────────────┐  ┌───────────────┐   │
│   │ ☎️ कॉल करो  │  │  📱 Message   │   │
│   │ (CALL)      │  │  (TEXT)       │   │
│   └──────────────┘  └───────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  🔙 पीछे जाओ (BACK)             │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘

DESIGN NOTES:
- Vertical timeline (not horizontal)
- Big emojis for status
- Each step is ONE clear action
- Dates in simple format
- Direct call/message buttons
- NO jargon in explanations
```

---

### SCREEN 8: HELP (Q&A)
```
┌─────────────────────────────────────────┐
│                                         │
│   मदद                                  │
│   (HELP)                               │
│                                         │
│   ────────────────────────────────────  │
│                                         │
│   ❓ सवाल पूछो                         │
│   (Ask a Question)                      │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  मेरे 3 दिन हो गए फिर भी       │   │
│   │  कोई कॉल नहीं आया।            │   │
│   │  क्या करूं?                     │   │
│   │                                 │   │
│   │  (It's been 3 days, no call.    │   │
│   │   What to do?)                  │   │
│   │                                 │   │
│   │  ► उत्तर देखो (VIEW ANSWER)     │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  शिकायत दर्ज करते समय गलती    │   │
│   │  हुई, अब क्या करूं?             │   │
│   │                                 │   │
│   │  (I made a mistake while filing.│   │
│   │   What now?)                    │   │
│   │                                 │   │
│   │  ► उत्तर देखो (VIEW ANSWER)     │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  यह सवाल मेरा नहीं है।         │   │
│   │  कुछ और पूछना है।               │   │
│   │                                 │   │
│   │  (Not my question. Ask something│   │
│   │   else)                         │   │
│   │                                 │   │
│   │  ► नया सवाल (ASK NEW)           │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  🔙 पीछे जाओ (BACK)             │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘

DESIGN NOTES:
- FAQs are in Hindi
- NO official jargon
- Real questions real people ask
- One question per card
- Tap to expand answer
```

---

## COMPLETE USER FLOW SUMMARY

```
Ramesh's 5-minute journey:

1. Opens app (auto-detects Hindi)
2. Taps "Speak Your Problem" (🎤)
3. Says in Hindi: "मेरी पेंशन 3 महीने से नहीं आई है"
4. App confirms: "Did we understand correctly?" 
5. Ramesh taps ✅ YES
6. App shows: ✅ EPFO (with explanation)
7. Ramesh gets: CPG_20260825_001 (case number)
8. Taps "HOME"
9. Later: Taps "My Cases" → Sees his case status
10. Calls EPFO using button on case detail
11. Gets resolution

TIME: 3-5 minutes (including voice input)
EDUCATION NEEDED: None
LANGUAGE: Hindi (or any Indian language)
DEVICE: Any Android phone
CONNECTION: Works on 2G
```

---

## KEY DIFFERENCES FROM CURRENT CPGRAMS

| Current CPGRAMS | New Layman UX |
|---|---|
| 15-field registration form | 1-button voice input |
| English default | Hindi/Regional default |
| Dropdown menus | Direct tap buttons |
| Small 12px text | 18px+ text |
| Attachments required | No attachments needed |
| Reference numbers to remember | Auto-saved case number |
| Navigate 10+ menu items | 4 main actions only |
| Desktop-optimized | Mobile-optimized |
| "Register grievance Section 6(1)" | "Tell us your problem" |
| Technical error messages | Simple Hindi explanations |
| Average time: 15 minutes | Average time: 3-5 minutes |

---

## TECHNICAL IMPLEMENTATION (MOBILE-ONLY)

### What Makes This Work on 2G:

1. **Voice Input (Not Typing)**
   - Record 30 seconds audio
   - Convert to text using speech-to-text (Sarvam/Whisper)
   - Send text to LLM
   - NO image transfer

2. **Offline Mode**
   - Save case number locally
   - Cases cached on phone
   - Sync when online

3. **No Heavy Assets**
   - Only SVG icons (tiny file size)
   - No images
   - No videos
   - Minimal CSS

4. **Progressive Loading**
   - Show skeleton screen
   - Load content as available
   - Works at 50KB/s speeds

---

## SCREEN SIZE OPTIMIZATION

```
Mobile (375px width - most common Indian phones):

┌─────────────────────┐
│ [Case Number]       │  16px padding
│                     │
│ [LARGE BUTTON]      │  60px height
│ [LARGE BUTTON]      │  40px margin
│ [LARGE BUTTON]      │
│                     │
│ [Status Info]       │  18px text
│ [Timeline]          │  
│                     │
│ [Action Buttons]    │  50px height
└─────────────────────┘

No horizontal scrolling
No pinch-to-zoom needed
Everything thumb-reachable
```

---

## REGIONAL LANGUAGE SUPPORT

### Hindi (Default for most India)
```
मेरी शिकायत (My Complaint)
अपनी समस्या बोलो (Speak Your Problem)
सही जगह मिल गई (Found Right Place)
```

### Tamil
```
என் புகார் (My Complaint)
உங்கள் சிக்கலைப் பேசுங்கள் (Speak Your Problem)
சரியான இடம் கண்டறியப்பட்டது (Found Right Place)
```

### All 22 languages supported same way

---

## VOICE INPUT FLOW

```
User taps 🎤 → Phone asks permission
    ↓
User speaks in Hindi (natural speech)
    ↓
Speech recorded for 30 seconds
    ↓
Audio sent to Sarvam Speech-to-Text
    ↓
Converted to Hindi text
    ↓
Text sent to OpenAI GPT-4
    ↓
GPT-4 classifies & routes
    ↓
Result shown to user
```

**Key: User speaks NATURALLY. No buttons to press mid-speech.**

---

## SUCCESS METRICS (LAYMAN UX)

Instead of measuring:
- ❌ Form completion rate
- ❌ Time to submit

Measure:
- ✅ **Voice input adoption %** (target: 70%)
- ✅ **First-time correct routing %** (target: 94%)
- ✅ **Average time to submit** (target: <3 minutes)
- ✅ **No second visit needed %** (target: 85%)
- ✅ **User satisfaction rating** (target: 4.5/5)

---

## MOBILE PAYMENT ANALOGY

Current CPGRAMS is like old **desktop banking forms**.
New Layman UX is like **Google Pay** - one tap, done.

```
Google Pay:
Open → Tap phone number → Confirm → Done

CPGRAMS 2.0:
Open → Speak problem → Confirm → Done
```

---

## DEPLOYMENT CHECKLIST

✅ Voice-to-text working (Hindi)
✅ LLM classification in Hindi context
✅ All buttons 60px+ height
✅ Text 18px+ minimum
✅ Works offline (case number saved)
✅ No images loaded
✅ <100KB per screen
✅ All 22 languages translated
✅ High contrast colors (WCAG AA)
✅ Screen reader support

---

## EXPECTED OUTCOME

**Before:** Ramesh tries CPGRAMS, fills form, gets confused, gives up
**After:** Ramesh opens app, speaks his problem, gets case number in 3 minutes

**Impact:** 7 crore Indians can now use grievance system without digital literacy


{
  "project": {
    "name": "CPGRAMS 2.0: Layman UX for Ordinary Indian Citizens",
    "version": "1.0-mobile-first",
    "target_user": "Non-English speaking, mobile-only, low-tech literacy Indians",
    "languages": 22,
    "primary_language": "Hindi (auto-detect from phone)",
    "key_differentiator": "Voice input instead of forms",
    "device_priority": "Android mobile only",
    "network_target": "Works on 2G connections"
  },

  "design_principles": {
    "1_voice_first": {
      "description": "Speak problem in native language instead of typing",
      "implementation": "Tap-and-hold microphone for 30 seconds",
      "target_adoption": "70% of users use voice input"
    },
    "2_one_action_per_screen": {
      "description": "Maximum 4 buttons per screen",
      "implementation": "No dropdown menus, no nested navigation",
      "example": "Home has only: Speak, Type, My Cases, Help"
    },
    "3_big_buttons_clear_icons": {
      "button_height": "60px",
      "button_width": "full-width minus 20px padding",
      "icon_size": "48px",
      "text_size_min": "18px",
      "touch_target_min": "56px (iOS) to 48px (Android)"
    },
    "4_regional_language_first": {
      "default": "Auto-detect phone language",
      "fallback": "Hindi (covers 41% of India)",
      "supported": [
        "Hindi", "Tamil", "Telugu", "Bengali", "Marathi", 
        "Gujarati", "Kannada", "Urdu", "Punjabi", "Odia",
        "Malayalam", "Assamese", "Konkani", "Sindhi", "Sanskrit",
        "English", "French", "Spanish", "German", "Japanese",
        "Chinese", "Arabic"
      ],
      "implementation": "All text, help, buttons translated"
    },
    "5_zero_jargon": {
      "rule": "No government terminology",
      "examples": {
        "wrong": "Register grievance under Section 6(1) RTI Act",
        "correct": "Tell us your problem"
      }
    },
    "6_instant_feedback": {
      "description": "Every action shows confirmation",
      "no_spinners": "Instead: Show checkmark immediately",
      "no_error_codes": "Instead: 'Problem connecting - try again'"
    },
    "7_mobile_only": {
      "desktop": "Not supported",
      "tablet": "Secondary (use mobile layout stretched)",
      "target_screen_width": "375px (Samsung J2, most common)",
      "viewport": "device-width, initial-scale=1.0, viewport-fit=cover"
    },
    "8_works_on_2g": {
      "data_per_screen": "<50KB",
      "no_images": "Only SVG icons",
      "no_video": "No embedded media",
      "offline_mode": "Save case number locally",
      "lazy_load": "Load content on demand"
    }
  },

  "screens": {
    "screen_0_language_selection": {
      "name": "Language Selection (First Load)",
      "path": "/",
      "shows_if": "localStorage.language === null",
      "layout": "vertical stack, centered",
      "components": [
        {
          "type": "heading",
          "text_en": "Which language do you speak?",
          "text_hi": "कौन सी भाषा बोलते हैं?",
          "size": "24px",
          "weight": "bold",
          "color": "#1F2937"
        },
        {
          "type": "language_buttons",
          "height": "60px",
          "width": "full-width",
          "margin": "16px 0",
          "languages": [
            {
              "code": "hi",
              "name": "हिंदी",
              "native": "Hindi",
              "flag": "🇮🇳"
            },
            {
              "code": "ta",
              "name": "தமிழ்",
              "native": "Tamil",
              "flag": "🇮🇳"
            },
            {
              "code": "te",
              "name": "తెలుగు",
              "native": "Telugu",
              "flag": "🇮🇳"
            },
            {
              "code": "bn",
              "name": "বাংলা",
              "native": "Bengali",
              "flag": "🇮🇳"
            },
            {
              "code": "mr",
              "name": "मराठी",
              "native": "Marathi",
              "flag": "🇮🇳"
            },
            {
              "code": "gu",
              "name": "ગુજરાતી",
              "native": "Gujarati",
              "flag": "🇮🇳"
            },
            {
              "code": "kn",
              "name": "ಕನ್ನಡ",
              "native": "Kannada",
              "flag": "🇮🇳"
            },
            {
              "code": "en",
              "name": "English",
              "native": "English",
              "flag": "🇬🇧"
            }
          ],
          "action": "onclick: setLanguage(code), localStorage.language = code, redirect to home"
        },
        {
          "type": "checkbox",
          "label_en": "Remember my choice",
          "label_hi": "मेरी पसंद याद रखो",
          "checked": true,
          "action": "auto-set on future visits"
        }
      ]
    },

    "screen_1_home": {
      "name": "Home - Main Menu",
      "path": "/home",
      "layout": "vertical stack, full-height",
      "padding": "16px",
      "components": [
        {
          "type": "header",
          "text": {
            "hi": "मेरी शिकायत",
            "ta": "என் புகார்",
            "te": "నా ఫిర్యాదు",
            "en": "MY COMPLAINT"
          },
          "size": "28px",
          "weight": "bold",
          "margin_bottom": "24px"
        },
        {
          "type": "primary_cta_button",
          "icon": "🎤",
          "height": "80px",
          "icon_size": "48px",
          "text": {
            "hi": "अपनी समस्या बोलो",
            "ta": "உங்கள் சிக்கலைப் பேசுங்கள்",
            "en": "SPEAK YOUR PROBLEM"
          },
          "subtext": {
            "hi": "टैप करो और रखो: अपनी भाषा में बोलो",
            "en": "Tap & hold: Speak in your language"
          },
          "subtext_size": "12px",
          "subtext_color": "#6B7280",
          "action": "onclick: goToScreen('voice_input')",
          "margin_bottom": "16px",
          "background": "#4F46E5",
          "color": "#FFFFFF",
          "border_radius": "12px"
        },
        {
          "type": "divider",
          "text": {
            "hi": "या",
            "en": "OR"
          },
          "margin": "24px 0"
        },
        {
          "type": "secondary_button",
          "icon": "✍️",
          "height": "60px",
          "text": {
            "hi": "लिखो (Type)",
            "en": "TYPE YOUR PROBLEM"
          },
          "action": "onclick: goToScreen('text_input')",
          "margin_bottom": "16px",
          "background": "#E5E7EB",
          "color": "#1F2937",
          "border_radius": "12px"
        },
        {
          "type": "spacer",
          "height": "32px"
        },
        {
          "type": "secondary_button",
          "icon": "📋",
          "height": "60px",
          "text": {
            "hi": "मेरे केस देखो",
            "en": "VIEW MY CASES"
          },
          "action": "onclick: goToScreen('my_cases')",
          "margin_bottom": "12px",
          "background": "#F3F4F6",
          "color": "#1F2937"
        },
        {
          "type": "secondary_button",
          "icon": "❓",
          "height": "60px",
          "text": {
            "hi": "मदद चाहिए?",
            "en": "NEED HELP?"
          },
          "action": "onclick: goToScreen('help')",
          "margin_bottom": "12px",
          "background": "#F3F4F6",
          "color": "#1F2937"
        }
      ]
    },

    "screen_2_voice_input": {
      "name": "Voice Input Recording",
      "path": "/voice-input",
      "layout": "centered, full-height",
      "background": "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
      "components": [
        {
          "type": "large_microphone_icon",
          "icon": "🎤",
          "size": "96px",
          "margin_bottom": "32px",
          "animation": "pulse"
        },
        {
          "type": "heading",
          "text": {
            "hi": "बोलना शुरू करो",
            "en": "START SPEAKING"
          },
          "size": "24px",
          "weight": "bold",
          "color": "#FFFFFF",
          "margin_bottom": "32px"
        },
        {
          "type": "waveform_visualization",
          "height": "60px",
          "bars": 12,
          "animation": "realtime-update",
          "color": "#FFFFFF",
          "background": "rgba(255,255,255,0.1)",
          "border_radius": "8px",
          "padding": "12px",
          "margin_bottom": "32px"
        },
        {
          "type": "recording_timer",
          "format": "MM:SS",
          "size": "20px",
          "color": "#FFFFFF",
          "margin_bottom": "32px",
          "max_duration": "120 seconds"
        },
        {
          "type": "help_text",
          "text": {
            "hi": "✋ बोलते रहो (Keep speaking...)",
            "en": "Keep speaking..."
          },
          "size": "16px",
          "color": "rgba(255,255,255,0.8)",
          "margin_bottom": "48px"
        },
        {
          "type": "stop_button",
          "icon": "⏹️",
          "height": "80px",
          "width": "240px",
          "text": {
            "hi": "बोलना बंद करो",
            "en": "STOP RECORDING"
          },
          "background": "#EF4444",
          "color": "#FFFFFF",
          "border_radius": "40px",
          "action": "onclick: stopRecording(), processAudio()",
          "font_size": "18px",
          "font_weight": "bold"
        }
      ],
      "on_mount": "startVoiceRecording(language)",
      "permissions": "microphone required"
    },

    "screen_2b_text_input": {
      "name": "Text Input - Alternative",
      "path": "/text-input",
      "layout": "vertical stack",
      "padding": "16px",
      "components": [
        {
          "type": "heading",
          "text": {
            "hi": "अपनी समस्या लिखो",
            "en": "WRITE YOUR PROBLEM"
          },
          "size": "24px",
          "weight": "bold",
          "margin_bottom": "16px"
        },
        {
          "type": "textarea",
          "height": "240px",
          "placeholder": {
            "hi": "मेरी पेंशन 3 महीने से नहीं आई है...",
            "en": "My pension hasn't arrived for 3 months..."
          },
          "font_size": "16px",
          "padding": "16px",
          "border": "2px solid #E5E7EB",
          "border_radius": "8px",
          "resize": "vertical",
          "max_chars": "1000",
          "auto_focus": true,
          "on_input": "updateCharCount()",
          "margin_bottom": "12px"
        },
        {
          "type": "char_counter",
          "text": {
            "hi": "बाकी: 500 शब्द",
            "en": "Remaining: 500 words"
          },
          "color": "#6B7280",
          "font_size": "12px",
          "margin_bottom": "24px"
        },
        {
          "type": "submit_button",
          "icon": "✅",
          "height": "60px",
          "text": {
            "hi": "आगे बढ़ो",
            "en": "NEXT"
          },
          "disabled_if": "textarea.value.length < 20",
          "action": "onclick: validateAndSubmit(textarea.value)",
          "background": "#4F46E5",
          "color": "#FFFFFF"
        }
      ]
    },

    "screen_3_confirmation": {
      "name": "Confirmation - Did we understand?",
      "path": "/confirmation",
      "layout": "vertical stack centered",
      "padding": "16px",
      "components": [
        {
          "type": "heading",
          "text": {
            "hi": "हमने समझा:",
            "en": "WE UNDERSTOOD:"
          },
          "size": "20px",
          "weight": "bold",
          "margin_bottom": "24px"
        },
        {
          "type": "confirmation_card",
          "height": "180px",
          "background": "#F0F4FF",
          "border": "2px solid #4F46E5",
          "border_radius": "12px",
          "padding": "20px",
          "content": "{complaint_text}",
          "font_size": "16px",
          "line_height": "1.6",
          "margin_bottom": "32px"
        },
        {
          "type": "question",
          "text": {
            "hi": "क्या ये सही है?",
            "en": "Is this correct?"
          },
          "font_size": "18px",
          "weight": "bold",
          "margin_bottom": "24px"
        },
        {
          "type": "button_group",
          "layout": "2 columns, gap 12px",
          "buttons": [
            {
              "icon": "❌",
              "text": {
                "hi": "नहीं",
                "en": "NO"
              },
              "height": "60px",
              "background": "#FEE2E2",
              "color": "#DC2626",
              "action": "onclick: goBack()"
            },
            {
              "icon": "✅",
              "text": {
                "hi": "हाँ",
                "en": "YES"
              },
              "height": "60px",
              "background": "#DCFCE7",
              "color": "#16A34A",
              "action": "onclick: processComplaint()"
            }
          ],
          "margin_bottom": "16px"
        }
      ]
    },

    "screen_4_magic_routing": {
      "name": "Routing Result - The Magic Moment",
      "path": "/routing-result",
      "layout": "vertical centered",
      "padding": "16px",
      "background": "#F9FAFB",
      "components": [
        {
          "type": "success_banner",
          "icon": "🎯",
          "text": {
            "hi": "सही जगह मिल गई!",
            "en": "WE FOUND THE RIGHT PLACE!"
          },
          "background": "#DCFCE7",
          "color": "#166534",
          "font_size": "20px",
          "weight": "bold",
          "padding": "16px",
          "border_radius": "12px",
          "margin_bottom": "32px"
        },
        {
          "type": "ministry_card",
          "height": "140px",
          "background": "#FFFFFF",
          "border": "2px solid #4F46E5",
          "border_radius": "12px",
          "padding": "20px",
          "content": [
            {
              "type": "icon",
              "size": "48px",
              "emoji": "{routing_icon}"
            },
            {
              "type": "ministry_name",
              "text": "{ministry_name}",
              "size": "22px",
              "weight": "bold",
              "color": "#1F2937"
            },
            {
              "type": "ministry_hindi",
              "text": "{ministry_name_hindi}",
              "size": "14px",
              "color": "#6B7280"
            }
          ],
          "margin_bottom": "24px"
        },
        {
          "type": "why_section",
          "heading": {
            "hi": "क्यों?",
            "en": "WHY?"
          },
          "heading_size": "18px",
          "content": "{why_routed_here}",
          "content_size": "16px",
          "background": "#F3F4F6",
          "padding": "16px",
          "border_radius": "8px",
          "margin_bottom": "24px",
          "line_height": "1.6"
        },
        {
          "type": "continue_button",
          "icon": "✅",
          "height": "60px",
          "text": {
            "hi": "अच्छा, आगे बढ़ो",
            "en": "OK, CONTINUE"
          },
          "action": "onclick: goToScreen('case_number')",
          "background": "#4F46E5",
          "color": "#FFFFFF"
        }
      ]
    },

    "screen_5_case_number": {
      "name": "Case Number - Save This!",
      "path": "/case-number",
      "layout": "vertical centered",
      "padding": "16px",
      "components": [
        {
          "type": "heading",
          "text": {
            "hi": "आपकी शिकायत दर्ज हुई",
            "en": "YOUR COMPLAINT IS REGISTERED"
          },
          "size": "22px",
          "weight": "bold",
          "margin_bottom": "32px",
          "text_align": "center"
        },
        {
          "type": "case_number_display",
          "height": "120px",
          "background": "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
          "border_radius": "12px",
          "padding": "24px",
          "content": {
            "heading": {
              "hi": "यह नंबर याद रखो:",
              "en": "REMEMBER THIS NUMBER:",
              "size": "14px",
              "color": "rgba(255,255,255,0.8)"
            },
            "case_id": {
              "text": "{case_id}",
              "size": "36px",
              "weight": "bold",
              "color": "#FFFFFF",
              "font_family": "monospace"
            }
          },
          "margin_bottom": "24px"
        },
        {
          "type": "action_buttons",
          "layout": "2 columns, gap 12px",
          "buttons": [
            {
              "icon": "📋",
              "text": {
                "hi": "कॉपी करो",
                "en": "COPY"
              },
              "height": "50px",
              "action": "onclick: copyToClipboard(case_id)",
              "background": "#E5E7EB",
              "color": "#1F2937"
            },
            {
              "icon": "📲",
              "text": {
                "hi": "SMS भेजो",
                "en": "TEXT ME"
              },
              "height": "50px",
              "action": "onclick: sendSMS(case_id)",
              "background": "#E5E7EB",
              "color": "#1F2937"
            }
          ],
          "margin_bottom": "32px"
        },
        {
          "type": "next_step_info",
          "icon": "📅",
          "text": {
            "hi": "अगला कदम: 3 दिन में EPFO से contact होगा",
            "en": "Next step: EPFO will call you in 3 days"
          },
          "background": "#FEF3C7",
          "padding": "16px",
          "border_radius": "8px",
          "font_size": "14px",
          "margin_bottom": "24px"
        },
        {
          "type": "home_button",
          "icon": "🏠",
          "height": "60px",
          "text": {
            "hi": "घर चले जाओ",
            "en": "GO HOME"
          },
          "action": "onclick: goToScreen('home')",
          "background": "#4F46E5",
          "color": "#FFFFFF"
        }
      ],
      "on_mount": "saveToLocalStorage({case_id, timestamp, complaint_text, ministry})"
    },

    "screen_6_my_cases": {
      "name": "My Cases - Dashboard",
      "path": "/my-cases",
      "layout": "vertical scroll",
      "padding": "16px",
      "pull_to_refresh": true,
      "components": [
        {
          "type": "heading",
          "text": {
            "hi": "मेरे केस",
            "en": "MY CASES"
          },
          "size": "24px",
          "weight": "bold",
          "margin_bottom": "24px"
        },
        {
          "type": "case_card",
          "height": "auto",
          "background": "#FFFFFF",
          "border": "1px solid #E5E7EB",
          "border_radius": "12px",
          "padding": "16px",
          "margin_bottom": "12px",
          "repeat": "for each case in cases",
          "content": [
            {
              "type": "case_id",
              "text": "{case_id}",
              "size": "16px",
              "weight": "bold",
              "color": "#1F2937"
            },
            {
              "type": "case_title",
              "text": "{title}",
              "size": "16px",
              "weight": "600",
              "color": "#374151",
              "margin_top": "8px"
            },
            {
              "type": "status_badge",
              "text": "{status}",
              "emoji": "{status_emoji}",
              "background": "{status_color}",
              "color": "#FFFFFF",
              "padding": "6px 12px",
              "border_radius": "6px",
              "display": "inline-block",
              "margin_top": "12px"
            },
            {
              "type": "details_row",
              "layout": "2 columns",
              "items": [
                {
                  "label": {
                    "hi": "दर्ज:",
                    "en": "Filed:"
                  },
                  "value": "{filed_date}",
                  "size": "12px"
                },
                {
                  "label": {
                    "hi": "दिन:",
                    "en": "Days:"
                  },
                  "value": "{days_pending}",
                  "size": "12px"
                }
              ],
              "margin_top": "12px",
              "color": "#6B7280"
            },
            {
              "type": "tap_hint",
              "icon": "▶",
              "text": {
                "hi": "विस्तार देखो",
                "en": "View Details"
              },
              "size": "12px",
              "color": "#4F46E5",
              "margin_top": "12px"
            }
          ],
          "on_tap": "goToScreen('case_detail', {case_id: case.id})"
        },
        {
          "type": "add_new_button",
          "icon": "➕",
          "height": "60px",
          "text": {
            "hi": "नया केस जोड़ो",
            "en": "ADD NEW CASE"
          },
          "action": "onclick: goToScreen('home')",
          "background": "#4F46E5",
          "color": "#FFFFFF",
          "margin_top": "24px"
        }
      ]
    },

    "screen_7_case_detail": {
      "name": "Case Detail with Timeline",
      "path": "/case/:case_id",
      "layout": "vertical scroll",
      "padding": "16px",
      "components": [
        {
          "type": "case_header",
          "content": {
            "case_id": "{case_id}",
            "title": "{title}",
            "status": "{status}"
          },
          "size": "20px",
          "margin_bottom": "24px"
        },
        {
          "type": "status_banner",
          "background": "{status_color}",
          "color": "#FFFFFF",
          "padding": "16px",
          "border_radius": "8px",
          "content": [
            {
              "emoji": "{status_emoji}",
              "text": "{current_stage}",
              "size": "16px",
              "weight": "600"
            },
            {
              "next_step": "{next_step}",
              "date": "{next_step_date}",
              "size": "14px",
              "margin_top": "8px",
              "opacity": "0.9"
            }
          ],
          "margin_bottom": "24px"
        },
        {
          "type": "timeline",
          "layout": "vertical with connecting dots",
          "repeat": "for each event in timeline",
          "event_card": {
            "height": "auto",
            "padding": "16px",
            "margin_bottom": "12px",
            "content": [
              {
                "type": "emoji",
                "size": "32px"
              },
              {
                "type": "stage_name",
                "text": "{stage}",
                "size": "16px",
                "weight": "600"
              },
              {
                "type": "date",
                "text": "{date}",
                "size": "12px",
                "color": "#6B7280"
              },
              {
                "type": "details",
                "text": "{details}",
                "size": "14px",
                "color": "#374151",
                "margin_top": "8px"
              }
            ]
          },
          "margin_bottom": "24px"
        },
        {
          "type": "contact_section",
          "heading": {
            "hi": "📞 संपर्क करो",
            "en": "📞 CONTACT"
          },
          "phone": "{phone}",
          "content": [
            {
              "type": "button",
              "icon": "☎️",
              "text": {
                "hi": "कॉल करो",
                "en": "CALL"
              },
              "action": "tel:{phone}",
              "height": "50px",
              "background": "#10B981",
              "color": "#FFFFFF",
              "margin_bottom": "12px"
            },
            {
              "type": "button",
              "icon": "📱",
              "text": {
                "hi": "Message भेजो",
                "en": "MESSAGE"
              },
              "action": "sms:{phone}",
              "height": "50px",
              "background": "#3B82F6",
              "color": "#FFFFFF"
            }
          ],
          "margin_bottom": "24px"
        },
        {
          "type": "back_button",
          "icon": "🔙",
          "text": {
            "hi": "पीछे जाओ",
            "en": "GO BACK"
          },
          "action": "onclick: goBack()",
          "height": "50px",
          "background": "#E5E7EB",
          "color": "#1F2937"
        }
      ]
    },

    "screen_8_help": {
      "name": "Help - Q&A",
      "path": "/help",
      "layout": "vertical scroll",
      "padding": "16px",
      "components": [
        {
          "type": "heading",
          "text": {
            "hi": "मदद",
            "en": "HELP"
          },
          "size": "24px",
          "weight": "bold",
          "margin_bottom": "24px"
        },
        {
          "type": "faq_card",
          "repeat": "for each faq in faqs",
          "height": "auto",
          "background": "#FFFFFF",
          "border": "1px solid #E5E7EB",
          "border_radius": "8px",
          "padding": "16px",
          "margin_bottom": "12px",
          "content": [
            {
              "type": "question",
              "text": "{question}",
              "size": "16px",
              "weight": "600",
              "color": "#1F2937"
            },
            {
              "type": "answer",
              "text": "{answer}",
              "size": "14px",
              "color": "#374151",
              "margin_top": "12px",
              "display": "show_if: expanded",
              "line_height": "1.6"
            }
          ],
          "on_tap": "toggleAnswer(faq_id)"
        }
      ]
    }
  },

  "voice_processing": {
    "speech_to_text": {
      "service": "Sarvam Speech-to-Text API",
      "language": "auto-detect from phone settings",
      "supported_languages": ["hi-IN", "ta-IN", "te-IN", "bn-IN", "mr-IN", "gu-IN", "kn-IN", "en-IN"],
      "timeout": "30 seconds",
      "error_handling": "Show user-friendly message in their language"
    },
    "text_to_speech": {
      "service": "Sarvam Text-to-Speech",
      "use_case": "Read help text & confirmations",
      "supported_voices": "All Indian languages"
    },
    "llm_classification": {
      "model": "OpenAI GPT-4",
      "context": "Classify complaint in Indian context",
      "input": "complaint_text (in user's language)",
      "output": "{complaint_type, ministry, confidence}",
      "language_handling": "Accept complaint in any Indian language, process internally"
    }
  },

  "mock_data_sample": {
    "cases": [
      {
        "id": "CPG_20260825_001",
        "title_hi": "पेंशन नहीं आई",
        "title_en": "Pension Not Arrived",
        "filed_date": "2026-08-25",
        "status": "in_progress",
        "status_emoji": "⏳",
        "status_color": "#FCD34D",
        "routed_to": "EPFO",
        "routed_to_hi": "कर्मचारी भविष्य निधि",
        "current_stage_hi": "EPFO को भेजा गया",
        "current_stage_en": "Sent to EPFO",
        "next_step_hi": "EPFO से 3 दिन में कॉल",
        "next_step_date": "2026-08-28",
        "phone": "1800-180-1111",
        "days_pending": 0,
        "timeline": [
          {
            "stage_hi": "शिकायत दर्ज",
            "stage_en": "Complaint Filed",
            "emoji": "📝",
            "date": "2026-08-25",
            "details_hi": "आपकी शिकायत प्राप्त हुई",
            "details_en": "Your complaint received"
          },
          {
            "stage_hi": "EPFO को भेजा",
            "stage_en": "Sent to EPFO",
            "emoji": "📤",
            "date": "2026-08-25",
            "details_hi": "सीधे EPFO को भेज दिया गया",
            "details_en": "Sent directly to EPFO"
          },
          {
            "stage_hi": "अगला कदम",
            "stage_en": "Next Step",
            "emoji": "☎️",
            "date": "2026-08-28",
            "details_hi": "EPFO से 3 दिन में कॉल आएगी",
            "details_en": "EPFO will call in 3 days"
          }
        ]
      }
    ]
  },

  "localization": {
    "strategy": "All text in JSON with language codes",
    "format": "{ 'hi': 'Hindi text', 'ta': 'Tamil text', 'en': 'English text' }",
    "coverage": 22,
    "languages_supported": [
      "Hindi (हिंदी)",
      "Tamil (தமிழ்)",
      "Telugu (తెలుగు)",
      "Bengali (বাংলা)",
      "Marathi (मराठी)",
      "Gujarati (ગુજરાતી)",
      "Kannada (ಕನ್ನಡ)",
      "Urdu (اردو)",
      "Punjabi (ਪੰਜਾਬੀ)",
      "Odia (ଓଡିଆ)",
      "Malayalam (മലയാളം)",
      "Assamese (অসমীয়া)",
      "Konkani (कोंकणी)",
      "Sindhi (سنڌي)",
      "Sanskrit (संस्कृत)",
      "English"
    ]
  },

  "accessibility": {
    "wcag": "AA",
    "text_size": "18px minimum",
    "contrast_ratio": "4.5:1 minimum",
    "touch_targets": "48px minimum",
    "screen_reader": "ARIA labels on all elements",
    "keyboard_nav": "Full keyboard support",
    "voice_control": "Compatible with Voice Assistant"
  },

  "performance": {
    "target_load_time": "<2 seconds on 2G",
    "bundle_size": "<100KB",
    "images": "Only SVG icons (< 5KB each)",
    "data_per_request": "<50KB",
    "offline_mode": "Save case number, status locally",
    "cache_strategy": "Service worker for offline access"
  },

  "build_phases": {
    "phase_1": [
      "Language selection screen",
      "Home menu with 4 buttons",
      "Voice input recording UI",
      "Navigation framework"
    ],
    "phase_2": [
      "Voice-to-text integration",
      "Confirmation screen",
      "Routing result display",
      "Case number generation"
    ],
    "phase_3": [
      "My cases dashboard",
      "Case detail with timeline",
      "Contact buttons (call, SMS)",
      "Local storage integration"
    ],
    "phase_4": [
      "Help/FAQ screen",
      "All 22 language translations",
      "Mobile responsiveness",
      "Error handling"
    ],
    "phase_5": [
      "Testing on real 2G network",
      "Voice input testing",
      "Accessibility audit",
      "Final polish"
    ]
  },

  "deployment": {
    "platform": "Vercel (free tier)",
    "device_requirement": "Android 6.0+",
    "network": "Works on 2G/3G",
    "offline_mode": "Yes (case number saved locally)",
    "public_url": "https://cpgrams-layman.vercel.app"
  }
}