# GitHub Copilot Instructions for ENEM English Prep WebApp

## Repository Overview

This is a **static web application** for ENEM (Brazilian National High School Exam) English language preparation. The app presents 54 multiple-choice questions in a flashcard format, features bilingual support (PT-BR/EN-US), and includes exam preparation tips. It will be deployed on **GitHub Pages**.

### Key Facts
- **Project Type**: Static web application (HTML, CSS, vanilla JavaScript)
- **Target**: Brazilian high school students (3rd year) preparing for ENEM
- **Deployment**: GitHub Pages (static hosting only - no backend, no databases)
- **Languages**: Bilingual (Portuguese-BR and English-US with dynamic toggle)
- **Question Format**: 54 multiple-choice questions (A-E options) based on ENEM patterns

## Technical Constraints

### CRITICAL LIMITATIONS
1. **No Backend/Server-Side Code**: Everything must run client-side only
2. **No LocalStorage/Cookies/SessionStorage**: GitHub Pages sandbox restrictions - use in-memory JavaScript objects only
3. **No External API Calls**: Must work offline after initial load
4. **No Build Tools Required**: Pure HTML/CSS/JS - no bundlers, no npm packages
5. **No Frameworks**: Vanilla JavaScript only (ES6+ is fine)

### What TO Use
- ✅ HTML5 semantic elements
- ✅ CSS3 (including Flexbox, Grid, animations)
- ✅ Vanilla JavaScript (ES6+: arrow functions, const/let, template literals, modules)
- ✅ Embedded JSON data (converted from CSV)
- ✅ In-memory state management (JavaScript objects/arrays)

### What NOT to Use
- ❌ No React, Vue, Angular, or any frameworks
- ❌ No Node.js, Express, or backend code
- ❌ No LocalStorage, SessionStorage, Cookies
- ❌ No external CDNs (except Google Fonts if needed)
- ❌ No databases (SQL, MongoDB, Firebase, etc.)
- ❌ No npm packages or build processes

## Project Structure

```
/
├── index.html              # Main application page
├── css/
│   └── styles.css          # All styling (responsive, modern)
├── js/
│   ├── data.js             # Question bank (54 questions as JSON)
│   ├── app.js              # Main application logic
│   └── i18n.js             # Internationalization/translation system
├── .github/
│   └── copilot-instructions.md  # This file
├── README.md               # Project documentation
├── system-prompt.md        # Detailed system prompt for AI
└── enem_english_questions.csv   # Source data (54 questions)
```

## Core Features Implementation

### 1. Question Bank System (`js/data.js`)
- Convert the 54 questions from CSV to embedded JavaScript array
- Each question object structure:
  ```javascript
  {
    id: Number,
    category: String,
    difficulty: "Easy" | "Medium" | "Hard",
    text_en: String,
    text_pt: String,
    question_en: String,
    question_pt: String,
    option_a_en: String,
    option_a_pt: String,
    // ... options b, c, d, e (both languages)
    correct_answer: "A" | "B" | "C" | "D" | "E",
    explanation_en: String,
    explanation_pt: String
  }
  ```
- Implement Fisher-Yates shuffle algorithm to randomize questions on load
- Store current question index in memory (not localStorage)

### 2. Bilingual Toggle (`js/i18n.js`)
- Create translation object with all UI strings in PT-BR and EN-US
- Implement instant language switching without page reload
- Store current language in memory (not localStorage)
- Update all text content dynamically using `textContent` or `innerHTML`
- Key translations needed:
  - Button labels: "Start Review", "Next Question", "Submit Answer", etc.
  - Section headers: "Exam Tips", "Question X of 54", etc.
  - Feedback messages: "Correct!", "Incorrect", "Explanation:", etc.
  - All tip section content

### 3. Flashcard UI (`index.html` + `js/app.js`)
**HTML Structure:**
- Header with logo, language toggle, navigation
- Main section for question display
- Question card component:
  - Progress indicator (e.g., "5/54")
  - Category badge
  - Difficulty badge
  - Question text area
  - 5 radio buttons/cards for options (A-E)
  - Submit button
  - Feedback section (hidden until answer submitted)
  - Explanation section (shown after submission)
  - Next button (appears after submission)

**JavaScript Logic:**
- Load questions from `data.js`
- Shuffle on initialization
- Display current question
- Handle answer selection
- Validate answer on submit
- Show feedback (correct/incorrect with color coding)
- Display explanation
- Track progress (current index in memory)
- Navigate to next question

### 4. Tips Section (`index.html` + `css/styles.css`)
Create dedicated section with 4 subsections (tabs or accordion):

**A. Mental Health & Anxiety:**
- Square breathing technique (4-4-4-4)
- Positive self-talk phrases
- Visualization exercises
- Mindfulness reminders

**B. Focus & Concentration:**
- Time management strategies
- Strategic pauses during exam
- Handling "mental blanks"
- Question prioritization (easy → hard)

**C. Physical Preparation:**
- Sleep hygiene (night before exam)
- Nutrition tips (light meals)
- Hydration reminders
- Stretching exercises

**D. Exam Strategies:**
- Time management (5 English questions)
- Reading techniques (skimming, scanning)
- Eliminating wrong answers
- When to skip questions
- Ignoring other candidates' pace

### 5. Styling (`css/styles.css`)
**Color Palette:**
- Primary: `#2563eb` (blue - confidence)
- Secondary: `#10b981` (green - positivity)
- Accent: `#f59e0b` (amber - energy)
- Correct: `#22c55e` (green)
- Incorrect: `#ef4444` (red)
- Background: `#f9fafb`
- Text: `#1f2937`

**Responsive Design:**
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg)
- Max-width 768px for question cards
- Use Flexbox/Grid for layouts
- Card-based design with shadows
- Smooth transitions and animations

**Typography:**
- System fonts: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Clear hierarchy (h1: 2.5rem, h2: 2rem, body: 1rem)
- Line-height: 1.6

## Development Guidelines

### Code Quality
- Write semantic HTML5 (use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`)
- Use ES6+ JavaScript (const/let, arrow functions, template literals)
- Modular code: separate concerns (data, UI, i18n)
- Add comments for complex logic
- Consistent naming: camelCase for JS, kebab-case for CSS classes
- DRY principle: avoid repetition

### Accessibility
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios (WCAG AA)
- Focus indicators on interactive elements
- Alt text for any images/icons

### Testing Checklist
Before committing, verify:
- [ ] All 54 questions load and display correctly
- [ ] Random shuffle works on page refresh
- [ ] Answer selection and validation work
- [ ] Correct/incorrect feedback displays properly
- [ ] Explanations show after submission
- [ ] Language toggle switches ALL text instantly
- [ ] Progress tracking updates (X/54)
- [ ] Tips section is accessible and readable
- [ ] Responsive on mobile, tablet, desktop (test DevTools)
- [ ] No console errors
- [ ] No broken links or missing files
- [ ] Works offline after initial load

## Build and Validation

### Local Testing
```bash
# Clone the repository
git clone <repo-url>
cd <repo-name>

# Option 1: Open directly in browser
open index.html  # macOS
start index.html # Windows

# Option 2: Run local server
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

### GitHub Pages Deployment
1. Push all files to `main` branch
2. Go to repository Settings → Pages
3. Select Source: "Deploy from a branch"
4. Select Branch: `main` and folder: `/ (root)`
5. Click Save
6. Wait ~5 minutes for deployment
7. Access at: `https://[username].github.io/[repo-name]/`

### Validation Steps
1. HTML validation: https://validator.w3.org/
2. CSS validation: https://jigsaw.w3.org/css-validator/
3. JavaScript: No console errors in DevTools
4. Lighthouse audit: Aim for 90+ in all categories

## Common Pitfalls to Avoid

1. **Don't use localStorage**: Questions state must be in-memory only
2. **Don't fetch external APIs**: Everything must be embedded
3. **Don't use relative paths incorrectly**: GitHub Pages serves from subfolder
4. **Don't forget bilingual support**: Every UI string needs EN + PT versions
5. **Don't overcomplicate**: Keep it simple, vanilla JS is enough
6. **Don't use inline styles**: Keep all CSS in styles.css
7. **Don't forget mobile responsiveness**: Test on small screens

## Debugging Tips

If something doesn't work:
1. Check browser console for errors (F12)
2. Verify file paths (GitHub Pages case-sensitive)
3. Test in incognito mode (avoids cache issues)
4. Validate HTML/CSS syntax
5. Check JavaScript syntax (semicolons, brackets)
6. Use `console.log()` for debugging state
7. Test on multiple browsers (Chrome, Firefox, Safari)

## Additional Context

### ENEM English Exam Format
- 5 multiple-choice questions (A-E)
- Focus on reading comprehension
- Text types: news, ads, comics, poems, social media, etc.
- No advanced grammar, mostly interpretation
- Cultural and social themes

### Student Needs
- Reduce exam anxiety
- Build confidence
- Practice reading strategies
- Understand question patterns
- Learn time management
- Feel motivated and supported

### Classroom Context
This is for a **final class review session** before ENEM. The teacher will:
- Project on screen for group solving
- Let students practice individually
- Discuss strategies together
- Use tips section for mental preparation

## Quick Reference Commands

```bash
# Start local server
python3 -m http.server 8000

# Check for errors
# Open DevTools (F12) → Console tab

# Validate HTML
# Visit: https://validator.w3.org/

# Push to GitHub
git add .
git commit -m "Update: [description]"
git push origin main
```

## Final Notes

- **Trust these instructions**: Don't search for complex solutions; the approach is intentionally simple
- **Static is sufficient**: No backend needed; everything works client-side
- **Focus on UX**: Make it encouraging, not stressful
- **Test thoroughly**: Especially language toggle and question navigation
- **Keep it motivational**: Use positive language and supportive design

When in doubt, refer to:
1. This file (`.github/copilot-instructions.md`)
2. System prompt (`system-prompt.md`)
3. README (`README.md`)

**Remember**: The goal is to empower students, reduce anxiety, and provide meaningful practice. Keep the experience simple, engaging, and encouraging! 🎓💪
