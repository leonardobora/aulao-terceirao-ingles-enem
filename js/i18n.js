// Internationalization (i18n) - Bilingual Support
// PT-BR and EN-US translations

const translations = {
  'pt-br': {
    // Header
    appTitle: 'Revisão de Inglês - ENEM 2024',
    appSubtitle: 'Aulão para o Terceirão',
    
    // Navigation
    startReview: 'Iniciar Revisão',
    examTips: 'Dicas para a Prova',
    backToHome: 'Voltar ao Início',
    
    // Question Interface
    questionCounter: 'Questão {current} de {total}',
    category: 'Categoria',
    difficulty: 'Dificuldade',
    difficultyEasy: 'Fácil',
    difficultyMedium: 'Médio',
    difficultyHard: 'Difícil',
    
    // Options
    optionA: 'A)',
    optionB: 'B)',
    optionC: 'C)',
    optionD: 'D)',
    optionE: 'E)',
    
    // Buttons
    submitAnswer: 'Verificar Resposta',
    nextQuestion: 'Próxima Questão',
    previous: 'Anterior',
    next: 'Próxima',
    jumpToQuestion: 'Ir para:',
    questionLanguage: 'Idioma da Questão:',
    optionsLanguage: 'Idioma das Opções:',
    showExplanation: 'Ver Explicação',
    finish: 'Finalizar Revisão',
    
    // Feedback
    correct: '✅ Correto!',
    incorrect: '❌ Incorreto',
    correctAnswer: 'Resposta correta:',
    explanation: 'Explicação:',
    selectAnswer: 'Por favor, selecione uma resposta',
    
    // Results
    congratulations: '🎉 Parabéns!',
    reviewComplete: 'Você completou a revisão!',
    yourScore: 'Sua pontuação:',
    correctAnswers: 'respostas corretas de',
    percentage: 'Aproveitamento:',
    restartReview: 'Reiniciar Revisão',
    
    // Tips Section Headers
    tipsTitle: '💡 Dicas para o ENEM',
    tipsSubtitle: 'Estratégias para alcançar seu melhor desempenho',
    
    section1Title: '🧠 Saúde Mental e Controle de Ansiedade',
    section2Title: '🎯 Estratégias de Foco e Concentração',
    section3Title: '💪 Preparação Física',
    section4Title: '📝 Estratégias para a Prova',
    
    // Section 1: Mental Health
    breathingTitle: 'Técnica de Respiração Quadrada (4-4-4-4)',
    breathingSteps: [
      'Inspire pelo nariz contando até 4',
      'Segure o ar contando até 4',
      'Expire pela boca contando até 4',
      'Mantenha os pulmões vazios contando até 4',
      'Repita 5 vezes ou até se acalmar'
    ],
    
    selfTalkTitle: 'Frases de Automotivação',
    selfTalkPhrases: [
      '"Eu me preparei bem e estou pronto(a)"',
      '"Cada questão é uma oportunidade de mostrar o que sei"',
      '"Eu confio na minha preparação"',
      '"Ansiedade é normal, eu posso controlar isso"',
      '"Vou fazer o meu melhor, e isso é suficiente"'
    ],
    
    visualizationTitle: 'Visualização Positiva',
    visualizationSteps: [
      'Feche os olhos por 30 segundos',
      'Imagine-se terminando a prova com confiança',
      'Visualize-se sorrindo ao sair da sala',
      'Sinta a sensação de alívio e orgulho',
      'Abra os olhos e leve essa sensação com você'
    ],
    
    mindfulnessTitle: 'Mindfulness - Atenção Plena',
    mindfulnessSteps: [
      'Foque apenas na questão atual',
      'Não pense no resultado final enquanto resolve',
      'Se distrair, respire fundo e volte ao presente',
      'Uma questão de cada vez - esse é o momento'
    ],
    
    // Section 2: Focus & Concentration
    timeManagementTitle: 'Gestão de Tempo para as 5 Questões de Inglês',
    timeManagementSteps: [
      'Tempo total recomendado: 15-20 minutos',
      '~3-4 minutos por questão',
      'Leia o enunciado ANTES do texto',
      'Depois leia o texto procurando a resposta',
      'Não gaste mais de 5 minutos em uma questão'
    ],
    
    pomodoroTitle: 'Técnica Pomodoro Adaptada',
    pomodoroSteps: [
      'A cada 15-20 questões resolvidas, pause 30 segundos',
      'Estique o pescoço, ombros e braços',
      'Feche os olhos e respire fundo 3 vezes',
      'Essa pausa restaura sua energia mental'
    ],
    
    mentalBlocksTitle: 'Lidando com "Brancos" (Bloqueios Mentais)',
    mentalBlocksSteps: [
      'Se não souber uma resposta, não entre em pânico',
      'Pule para a próxima questão',
      'Volte depois com mente mais fresca',
      'Elimine as alternativas obviamente erradas',
      'Confie no seu instinto'
    ],
    
    resolutionOrderTitle: 'Ordem de Resolução',
    resolutionOrderSteps: [
      '<strong>Primeiro:</strong> Questões que parecem fáceis',
      '<strong>Segundo:</strong> Questões de dificuldade média',
      '<strong>Por último:</strong> Questões difíceis',
      'Marque as que vai pular para voltar depois'
    ],
    
    readingTechniquesTitle: 'Técnicas de Leitura',
    readingTechniquesSteps: [
      '<strong>Skimming:</strong> Leia rapidamente para ideia geral',
      '<strong>Scanning:</strong> Procure informações específicas',
      'Leia as alternativas primeiro',
      'Procure palavras-chave no texto',
      'Não traduza palavra por palavra'
    ],
    
    // Section 3: Physical Preparation
    nightBeforeTitle: 'Noite Antes da Prova',
    nightBeforeSteps: [
      'Durma pelo menos 7-8 horas',
      'Evite estudar até tarde (pare às 21h)',
      'Não tome café depois das 16h',
      'Tome um banho relaxante',
      'Evite telas 1 hora antes de dormir',
      'Deixe tudo preparado (roupa, documentos, lanche)'
    ],
    
    examMorningTitle: 'Manhã do Exame',
    examMorningSteps: [
      'Acorde com tempo suficiente (sem correria)',
      'Tome café da manhã leve e nutritivo',
      'Exemplos: frutas, pão integral, ovos, iogurte',
      'Evite comidas muito pesadas ou gordurosas',
      'Beba água, mas não exagere'
    ],
    
    duringExamTitle: 'Durante a Prova',
    duringExamSteps: [
      'Traga garrafa de água (hidrate-se regularmente)',
      'Lanche leve para intervalo: banana, barra de cereal, chocolate',
      'Se sentir tensão, alongue discretamente',
      'Role os ombros, estique o pescoço',
      'Respire fundo sempre que precisar'
    ],
    
    stretchingTitle: 'Exercícios de Alongamento na Cadeira',
    stretchingSteps: [
      'Gire o pescoço suavemente (5x cada lado)',
      'Levante os ombros até as orelhas, depois solte (5x)',
      'Estique os braços para cima (segure 10 segundos)',
      'Rotacione os punhos (10x cada direção)',
      'Respire fundo pelo diafragma (5x)'
    ],
    
    // Section 4: Exam Strategies
    eliminationTitle: 'Estratégia de Eliminação',
    eliminationSteps: [
      'Leia todas as 5 alternativas',
      'Elimine as obviamente erradas',
      'Fique entre 2-3 opções mais prováveis',
      'Releia o trecho relevante do texto',
      'Escolha a melhor resposta'
    ],
    
    cognatesTitle: 'Cognatos e Falsos Cognatos',
    cognatesInfo: '<strong>Cognatos verdadeiros</strong> (mesma tradução): important, technology, information',
    falseCognatesInfo: '<strong>Falsos cognatos</strong> (cuidado!):',
    falseCognatesList: [
      'Actually = na verdade (não "atualmente")',
      'Library = biblioteca (não "livraria")',
      'Pretend = fingir (não "pretender")',
      'Parents = pais (não "parentes")',
      'Fabric = tecido (não "fábrica")'
    ],
    
    interpretationTitle: 'Interpretação, Não Tradução',
    interpretationSteps: [
      'ENEM testa compreensão, não gramática',
      'Você não precisa entender cada palavra',
      'Foque na ideia geral do texto',
      'Procure palavras-chave e contexto',
      'Use o enunciado para guiar sua leitura'
    ],
    
    guessingTitle: 'Quando "Chutar"',
    guessingSteps: [
      'Se realmente não souber: elimine as piores',
      'Evite alternativas extremas ("sempre", "nunca", "todos")',
      'Prefira alternativas moderadas',
      'Marque e siga em frente (não perca tempo)',
      'Volte se sobrar tempo'
    ],
    
    comparisonTitle: 'Não Compare com Outros',
    comparisonSteps: [
      'Alguém entregar primeiro não significa nada',
      'Cada um tem seu ritmo - respeite o seu',
      'Não se assuste com outros candidatos',
      'Foque em você e na sua prova',
      'Use TODO o tempo disponível se precisar'
    ],
    
    finalCheckTitle: 'Conferência Final',
    finalCheckSteps: [
      'Se sobrar tempo, revise marcações no gabarito',
      'Confira se não pulou questões sem querer',
      'Releia questões que ficou em dúvida',
      'Confie na sua primeira resposta (geralmente está certa)',
      'Só mude se tiver certeza do erro'
    ],
    
    // Motivational Messages
    motivationalTitle: '🌟 Mensagens Motivacionais',
    motivationalMessages: [
      '🌟 Você já venceu chegando até aqui!',
      '💪 Confie no seu estudo e dedicação',
      '🎯 Foco no processo, não apenas no resultado',
      '✨ Cada questão é uma chance de brilhar',
      '🚀 Você é capaz - acredite nisso!',
      '📚 Todo esforço vale a pena',
      '🌈 Mantenha a calma e mostre seu potencial',
      '💖 Seja gentil consigo mesmo',
      '🔥 Você está pronto para esse desafio!',
      '🎓 Sua jornada é única e valiosa'
    ],
    
    // Footer
    footerText: 'Desenvolvido com 💙 para alunos do 3º ano | Boa sorte no ENEM!',
    githubPages: 'Hospedado no GitHub Pages'
  },
  
  'en-us': {
    // Header
    appTitle: 'ENEM English Review - 2024',
    appSubtitle: 'Senior Year Intensive',
    
    // Navigation
    startReview: 'Start Review',
    examTips: 'Exam Tips',
    backToHome: 'Back to Home',
    
    // Question Interface
    questionCounter: 'Question {current} of {total}',
    category: 'Category',
    difficulty: 'Difficulty',
    difficultyEasy: 'Easy',
    difficultyMedium: 'Medium',
    difficultyHard: 'Hard',
    
    // Options
    optionA: 'A)',
    optionB: 'B)',
    optionC: 'C)',
    optionD: 'D)',
    optionE: 'E)',
    
    // Buttons
    submitAnswer: 'Check Answer',
    nextQuestion: 'Next Question',
    previous: 'Previous',
    next: 'Next',
    jumpToQuestion: 'Jump to:',
    questionLanguage: 'Question Language:',
    optionsLanguage: 'Options Language:',
    showExplanation: 'Show Explanation',
    finish: 'Finish Review',
    
    // Feedback
    correct: '✅ Correct!',
    incorrect: '❌ Incorrect',
    correctAnswer: 'Correct answer:',
    explanation: 'Explanation:',
    selectAnswer: 'Please select an answer',
    
    // Results
    congratulations: '🎉 Congratulations!',
    reviewComplete: 'You completed the review!',
    yourScore: 'Your score:',
    correctAnswers: 'correct answers out of',
    percentage: 'Performance:',
    restartReview: 'Restart Review',
    
    // Tips Section Headers
    tipsTitle: '💡 ENEM Tips',
    tipsSubtitle: 'Strategies to achieve your best performance',
    
    section1Title: '🧠 Mental Health & Anxiety Management',
    section2Title: '🎯 Focus & Concentration Strategies',
    section3Title: '💪 Physical Preparation',
    section4Title: '📝 Exam Strategies',
    
    // Section 1: Mental Health
    breathingTitle: 'Square Breathing Technique (4-4-4-4)',
    breathingSteps: [
      'Inhale through nose counting to 4',
      'Hold air counting to 4',
      'Exhale through mouth counting to 4',
      'Keep lungs empty counting to 4',
      'Repeat 5 times or until calm'
    ],
    
    selfTalkTitle: 'Positive Self-Talk Phrases',
    selfTalkPhrases: [
      '"I prepared well and I\'m ready"',
      '"Each question is an opportunity to show what I know"',
      '"I trust my preparation"',
      '"Anxiety is normal, I can control this"',
      '"I\'ll do my best, and that\'s enough"'
    ],
    
    visualizationTitle: 'Positive Visualization',
    visualizationSteps: [
      'Close your eyes for 30 seconds',
      'Imagine yourself finishing the exam confidently',
      'Visualize yourself smiling as you leave the room',
      'Feel the sensation of relief and pride',
      'Open your eyes and carry that feeling with you'
    ],
    
    mindfulnessTitle: 'Mindfulness - Present Moment Awareness',
    mindfulnessSteps: [
      'Focus only on the current question',
      'Don\'t think about the final result while solving',
      'If distracted, breathe deeply and return to present',
      'One question at a time - this is your moment'
    ],
    
    // Section 2: Focus & Concentration
    timeManagementTitle: 'Time Management for 5 English Questions',
    timeManagementSteps: [
      'Total recommended time: 15-20 minutes',
      '~3-4 minutes per question',
      'Read the question BEFORE the text',
      'Then read the text looking for the answer',
      'Don\'t spend more than 5 minutes on one question'
    ],
    
    pomodoroTitle: 'Adapted Pomodoro Technique',
    pomodoroSteps: [
      'Every 15-20 questions solved, pause 30 seconds',
      'Stretch neck, shoulders and arms',
      'Close eyes and breathe deeply 3 times',
      'This pause restores your mental energy'
    ],
    
    mentalBlocksTitle: 'Handling "Mental Blanks"',
    mentalBlocksSteps: [
      'If you don\'t know an answer, don\'t panic',
      'Skip to the next question',
      'Come back later with a fresher mind',
      'Eliminate obviously wrong alternatives',
      'Trust your instinct'
    ],
    
    resolutionOrderTitle: 'Order of Resolution',
    resolutionOrderSteps: [
      '<strong>First:</strong> Questions that seem easy',
      '<strong>Second:</strong> Medium difficulty questions',
      '<strong>Last:</strong> Difficult questions',
      'Mark the ones you\'ll skip to return later'
    ],
    
    readingTechniquesTitle: 'Reading Techniques',
    readingTechniquesSteps: [
      '<strong>Skimming:</strong> Read quickly for general idea',
      '<strong>Scanning:</strong> Look for specific information',
      'Read alternatives first',
      'Look for keywords in text',
      'Don\'t translate word by word'
    ],
    
    // Section 3: Physical Preparation
    nightBeforeTitle: 'Night Before Exam',
    nightBeforeSteps: [
      'Sleep at least 7-8 hours',
      'Avoid studying late (stop at 9 PM)',
      'No coffee after 4 PM',
      'Take a relaxing bath',
      'Avoid screens 1 hour before sleep',
      'Leave everything prepared (clothes, documents, snack)'
    ],
    
    examMorningTitle: 'Exam Morning',
    examMorningSteps: [
      'Wake up with enough time (no rushing)',
      'Eat light, nutritious breakfast',
      'Examples: fruits, whole grain bread, eggs, yogurt',
      'Avoid very heavy or fatty foods',
      'Drink water, but don\'t overdo it'
    ],
    
    duringExamTitle: 'During the Exam',
    duringExamSteps: [
      'Bring water bottle (hydrate regularly)',
      'Light snack for break: banana, granola bar, chocolate',
      'If you feel tension, stretch discreetly',
      'Roll shoulders, stretch neck',
      'Breathe deeply whenever needed'
    ],
    
    stretchingTitle: 'Chair Stretching Exercises',
    stretchingSteps: [
      'Gently rotate neck (5x each side)',
      'Raise shoulders to ears, then release (5x)',
      'Stretch arms upward (hold 10 seconds)',
      'Rotate wrists (10x each direction)',
      'Breathe deeply through diaphragm (5x)'
    ],
    
    // Section 4: Exam Strategies
    eliminationTitle: 'Elimination Strategy',
    eliminationSteps: [
      'Read all 5 alternatives',
      'Eliminate obviously wrong ones',
      'Stay between 2-3 most likely options',
      'Reread relevant text excerpt',
      'Choose the best answer'
    ],
    
    cognatesTitle: 'Cognates and False Cognates',
    cognatesInfo: '<strong>True cognates</strong> (same translation): important, technology, information',
    falseCognatesInfo: '<strong>False cognates</strong> (beware!):',
    falseCognatesList: [
      'Actually = na verdade (not "atualmente")',
      'Library = biblioteca (not "livraria")',
      'Pretend = fingir (not "pretender")',
      'Parents = pais (not "parentes")',
      'Fabric = tecido (not "fábrica")'
    ],
    
    interpretationTitle: 'Interpretation, Not Translation',
    interpretationSteps: [
      'ENEM tests comprehension, not grammar',
      'You don\'t need to understand every word',
      'Focus on general idea of text',
      'Look for keywords and context',
      'Use the question to guide your reading'
    ],
    
    guessingTitle: 'When to "Guess"',
    guessingSteps: [
      'If you really don\'t know: eliminate worst options',
      'Avoid extreme alternatives ("always", "never", "all")',
      'Prefer moderate alternatives',
      'Mark and move on (don\'t waste time)',
      'Come back if time permits'
    ],
    
    comparisonTitle: 'Don\'t Compare with Others',
    comparisonSteps: [
      'Someone finishing first means nothing',
      'Everyone has their pace - respect yours',
      'Don\'t get scared by other candidates',
      'Focus on you and your exam',
      'Use ALL available time if needed'
    ],
    
    finalCheckTitle: 'Final Check',
    finalCheckSteps: [
      'If time remains, review answer sheet markings',
      'Check you didn\'t accidentally skip questions',
      'Reread questions you had doubts about',
      'Trust your first answer (usually correct)',
      'Only change if certain of mistake'
    ],
    
    // Motivational Messages
    motivationalTitle: '🌟 Motivational Messages',
    motivationalMessages: [
      '🌟 You\'ve already won by getting this far!',
      '💪 Trust your study and dedication',
      '🎯 Focus on process, not just result',
      '✨ Each question is a chance to shine',
      '🚀 You are capable - believe it!',
      '📚 Every effort is worth it',
      '🌈 Stay calm and show your potential',
      '💖 Be kind to yourself',
      '🔥 You\'re ready for this challenge!',
      '🎓 Your journey is unique and valuable'
    ],
    
    // Footer
    footerText: 'Developed with 💙 for senior year students | Good luck on ENEM!',
    githubPages: 'Hosted on GitHub Pages'
  }
};

// Current language state (stored in memory only)
let currentLanguage = 'pt-br';

// Get translation for current language
function t(key) {
  const keys = key.split('.');
  let value = translations[currentLanguage];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

// Format string with placeholders
function tf(key, params) {
  let text = t(key);
  for (const [param, value] of Object.entries(params)) {
    text = text.replace(`{${param}}`, value);
  }
  return text;
}

// Switch language
function setLanguage(lang) {
  currentLanguage = lang;
  updatePageLanguage();
}

// Get current language
function getCurrentLanguage() {
  return currentLanguage;
}

// Update all translatable elements on the page
function updatePageLanguage() {
  // This function will be called after DOM is ready
  // It updates all elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (element.tagName === 'INPUT' && element.type === 'button') {
      element.value = t(key);
    } else {
      element.textContent = t(key);
    }
  });
  
  // Update language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${currentLanguage}"]`)?.classList.add('active');
}
