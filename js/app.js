// Main Application Logic
// ENEM English Review Flashcard System

// Application state (in-memory only)
const appState = {
  shuffledQuestions: [],
  currentQuestionIndex: 0,
  selectedAnswer: null,
  answerSubmitted: false,
  score: 0,
  answers: [] // Store user answers for review
};

// Initialize application
function initApp() {
  // Shuffle questions on start
  appState.shuffledQuestions = shuffleArray(QUESTIONS);
  appState.currentQuestionIndex = 0;
  appState.score = 0;
  appState.answers = [];
  
  // Setup event listeners
  setupEventListeners();
  
  // Show home screen
  showScreen('home');
}

// Setup all event listeners
function setupEventListeners() {
  // Language toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      updateCurrentQuestion(); // Refresh question display
    });
  });
  
  // Navigation buttons
  document.getElementById('start-review-btn')?.addEventListener('click', startReview);
  document.getElementById('show-tips-btn')?.addEventListener('click', () => showScreen('tips'));
  document.getElementById('back-to-home-btn')?.addEventListener('click', () => showScreen('home'));
  document.getElementById('back-to-home-from-tips-btn')?.addEventListener('click', () => showScreen('home'));
  
  // Question interface buttons
  document.getElementById('submit-answer-btn')?.addEventListener('click', submitAnswer);
  document.getElementById('next-question-btn')?.addEventListener('click', nextQuestion);
  document.getElementById('restart-review-btn')?.addEventListener('click', restartReview);
  
  // Option selection
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => selectOption(btn));
  });
}

// Screen navigation
function showScreen(screenName) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Show requested screen
  const screen = document.getElementById(`${screenName}-screen`);
  if (screen) {
    screen.classList.add('active');
  }
  
  // Update specific screen content
  if (screenName === 'tips') {
    renderTipsContent();
  }
}

// Start review session
function startReview() {
  appState.currentQuestionIndex = 0;
  appState.score = 0;
  appState.answers = [];
  appState.selectedAnswer = null;
  appState.answerSubmitted = false;
  
  showScreen('question');
  updateCurrentQuestion();
}

// Render current question
function updateCurrentQuestion() {
  const question = appState.shuffledQuestions[appState.currentQuestionIndex];
  const lang = getCurrentLanguage();
  const langSuffix = lang === 'pt-br' ? 'pt' : 'en';
  
  // Update progress
  const progress = document.getElementById('question-progress');
  progress.textContent = tf('questionCounter', {
    current: appState.currentQuestionIndex + 1,
    total: appState.shuffledQuestions.length
  });
  
  // Update category and difficulty
  document.getElementById('question-category').textContent = question.category;
  const difficultyBadge = document.getElementById('question-difficulty');
  difficultyBadge.textContent = t(`difficulty${question.difficulty}`);
  difficultyBadge.className = `difficulty-badge ${question.difficulty.toLowerCase()}`;
  
  // Update text
  document.getElementById('question-text').textContent = question[`text_${langSuffix}`];
  document.getElementById('question-question').textContent = question[`question_${langSuffix}`];
  
  // Update options
  const options = ['a', 'b', 'c', 'd', 'e'];
  options.forEach(opt => {
    const btn = document.getElementById(`option-${opt}`);
    btn.textContent = `${opt.toUpperCase()}) ${question[`option_${opt}_${langSuffix}`]}`;
    btn.className = 'option-btn';
    btn.disabled = false;
  });
  
  // Reset state
  appState.selectedAnswer = null;
  appState.answerSubmitted = false;
  document.getElementById('feedback-section').classList.remove('show');
  document.getElementById('submit-answer-btn').classList.remove('hidden');
  document.getElementById('next-question-btn').classList.add('hidden');
}

// Select an option
function selectOption(btn) {
  if (appState.answerSubmitted) return;
  
  // Deselect all options
  document.querySelectorAll('.option-btn').forEach(b => {
    b.classList.remove('selected');
  });
  
  // Select clicked option
  btn.classList.add('selected');
  const optionLetter = btn.id.replace('option-', '').toUpperCase();
  appState.selectedAnswer = optionLetter;
}

// Submit answer
function submitAnswer() {
  if (!appState.selectedAnswer) {
    alert(t('selectAnswer'));
    return;
  }
  
  appState.answerSubmitted = true;
  const question = appState.shuffledQuestions[appState.currentQuestionIndex];
  const isCorrect = appState.selectedAnswer === question.correct_answer;
  
  // Update score
  if (isCorrect) {
    appState.score++;
  }
  
  // Store answer
  appState.answers.push({
    questionId: question.id,
    selectedAnswer: appState.selectedAnswer,
    correctAnswer: question.correct_answer,
    isCorrect: isCorrect
  });
  
  // Show feedback
  showFeedback(isCorrect, question);
  
  // Update buttons
  document.getElementById('submit-answer-btn').classList.add('hidden');
  document.getElementById('next-question-btn').classList.remove('hidden');
  
  // Disable option buttons
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
  });
  
  // Highlight correct/incorrect
  const correctBtn = document.getElementById(`option-${question.correct_answer.toLowerCase()}`);
  correctBtn.classList.add('correct');
  
  if (!isCorrect) {
    const selectedBtn = document.getElementById(`option-${appState.selectedAnswer.toLowerCase()}`);
    selectedBtn.classList.add('incorrect');
  }
}

// Show feedback
function showFeedback(isCorrect, question) {
  const lang = getCurrentLanguage();
  const langSuffix = lang === 'pt-br' ? 'pt' : 'en';
  
  const feedbackSection = document.getElementById('feedback-section');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackCorrect = document.getElementById('feedback-correct-answer');
  const feedbackExplanation = document.getElementById('feedback-explanation');
  
  feedbackTitle.textContent = isCorrect ? t('correct') : t('incorrect');
  feedbackTitle.className = `feedback-title ${isCorrect ? 'correct' : 'incorrect'}`;
  
  if (!isCorrect) {
    feedbackCorrect.textContent = `${t('correctAnswer')} ${question.correct_answer})`;
    feedbackCorrect.classList.remove('hidden');
  } else {
    feedbackCorrect.classList.add('hidden');
  }
  
  feedbackExplanation.innerHTML = `<strong>${t('explanation')}</strong> ${question[`explanation_${langSuffix}`]}`;
  
  feedbackSection.classList.add('show');
}

// Next question
function nextQuestion() {
  appState.currentQuestionIndex++;
  
  if (appState.currentQuestionIndex >= appState.shuffledQuestions.length) {
    showResults();
  } else {
    updateCurrentQuestion();
  }
}

// Show results
function showResults() {
  const totalQuestions = appState.shuffledQuestions.length;
  const percentage = Math.round((appState.score / totalQuestions) * 100);
  
  document.getElementById('final-score').textContent = `${appState.score} ${t('correctAnswers')} ${totalQuestions}`;
  document.getElementById('final-percentage').textContent = `${t('percentage')} ${percentage}%`;
  
  showScreen('results');
}

// Restart review
function restartReview() {
  // Re-shuffle questions
  appState.shuffledQuestions = shuffleArray(QUESTIONS);
  startReview();
}

// Render tips content dynamically
function renderTipsContent() {
  const container = document.getElementById('tips-content');
  if (!container) return;
  
  const lang = getCurrentLanguage();
  
  container.innerHTML = `
    <h1 class="tips-title">${t('tipsTitle')}</h1>
    <p class="tips-subtitle">${t('tipsSubtitle')}</p>
    
    <!-- Section 1: Mental Health -->
    <section class="tips-section">
      <h2>${t('section1Title')}</h2>
      
      <div class="tip-card">
        <h3>${t('breathingTitle')}</h3>
        <ol>
          ${t('breathingSteps').map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
      
      <div class="tip-card">
        <h3>${t('selfTalkTitle')}</h3>
        <ul>
          ${t('selfTalkPhrases').map(phrase => `<li>${phrase}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('visualizationTitle')}</h3>
        <ul>
          ${t('visualizationSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('mindfulnessTitle')}</h3>
        <ul>
          ${t('mindfulnessSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
    </section>
    
    <!-- Section 2: Focus & Concentration -->
    <section class="tips-section">
      <h2>${t('section2Title')}</h2>
      
      <div class="tip-card">
        <h3>${t('timeManagementTitle')}</h3>
        <ul>
          ${t('timeManagementSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('pomodoroTitle')}</h3>
        <ul>
          ${t('pomodoroSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('mentalBlocksTitle')}</h3>
        <ul>
          ${t('mentalBlocksSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('resolutionOrderTitle')}</h3>
        <ol>
          ${t('resolutionOrderSteps').map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
      
      <div class="tip-card">
        <h3>${t('readingTechniquesTitle')}</h3>
        <ul>
          ${t('readingTechniquesSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
    </section>
    
    <!-- Section 3: Physical Preparation -->
    <section class="tips-section">
      <h2>${t('section3Title')}</h2>
      
      <div class="tip-card">
        <h3>${t('nightBeforeTitle')}</h3>
        <ul>
          ${t('nightBeforeSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('examMorningTitle')}</h3>
        <ul>
          ${t('examMorningSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('duringExamTitle')}</h3>
        <ul>
          ${t('duringExamSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('stretchingTitle')}</h3>
        <ol>
          ${t('stretchingSteps').map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
    </section>
    
    <!-- Section 4: Exam Strategies -->
    <section class="tips-section">
      <h2>${t('section4Title')}</h2>
      
      <div class="tip-card">
        <h3>${t('eliminationTitle')}</h3>
        <ol>
          ${t('eliminationSteps').map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
      
      <div class="tip-card">
        <h3>${t('cognatesTitle')}</h3>
        <p>${t('cognatesInfo')}</p>
        <p>${t('falseCognatesInfo')}</p>
        <ul>
          ${t('falseCognatesList').map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('interpretationTitle')}</h3>
        <ul>
          ${t('interpretationSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('guessingTitle')}</h3>
        <ul>
          ${t('guessingSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('comparisonTitle')}</h3>
        <ul>
          ${t('comparisonSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      
      <div class="tip-card">
        <h3>${t('finalCheckTitle')}</h3>
        <ul>
          ${t('finalCheckSteps').map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
    </section>
    
    <!-- Motivational Messages -->
    <section class="tips-section motivational-section">
      <h2>${t('motivationalTitle')}</h2>
      <div class="motivational-grid">
        ${t('motivationalMessages').map(msg => `<div class="motivational-card">${msg}</div>`).join('')}
      </div>
    </section>
  `;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  updatePageLanguage();
});
