# ENEM English Prep - WebApp 🎓

> Sistema interativo de revisão de inglês para o ENEM | Interactive ENEM English Review System

![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📖 Sobre o Projeto | About the Project

**[PT-BR]**  
Sistema de revisão interativo desenvolvido especialmente para alunos do 3º ano do Ensino Médio que se preparam para o ENEM. Apresenta **20 questões autênticas** de provas reais do ENEM (2016-2024) em formato de flashcards, com alternativas múltiplas (A-E) no padrão oficial da prova, além de dicas valiosas para o dia do exame.

**[EN-US]**  
Interactive review system designed specifically for 3rd-year high school students preparing for ENEM (Brazilian National High School Exam). Features **20 authentic questions** from real ENEM exams (2016-2024) in flashcard format with multiple-choice answers (A-E) following the official exam pattern, plus valuable exam-day tips.

### 📚 Fontes Autênticas | Authentic Sources

Todas as questões foram coletadas de fontes verificáveis e confiáveis:

**Fontes Oficiais e Educacionais:**
- **INEP** - Instituto Nacional de Estudos e Pesquisas Educacionais (provas oficiais ENEM)
- **Toda Matéria** - [todamateria.com.br](https://www.todamateria.com.br/interpretacao-de-texto-em-ingles-com-gabarito-enem/)
- **Aprova Total** - [aprovatotal.com.br](https://aprovatotal.com.br/questoes-ingles-enem/)
- **International School** - [internationalschool.global](https://internationalschool.global/)

**Características das Questões:**
- ✅ Textos autênticos (poemas publicados, notícias, cartuns, artigos)
- ✅ Questões em português testando compreensão do inglês
- ✅ Foco em interpretação textual (sem gramática isolada)
- ✅ Formato oficial ENEM: 5 alternativas (A-E)
- ✅ Gabaritos e explicações verificados

---

## ✨ Funcionalidades | Features

### 🎯 Core Features

- ✅ **20 Questões Autênticas** / 20 Authentic Questions
  - Questões reais de provas ENEM 2016-2024
  - Real questions from ENEM exams 2016-2024
  - Textos de fontes verificáveis (BBC, USA Today, poetas publicados, etc)
  - Texts from verifiable sources (BBC, USA Today, published poets, etc)
  
- 🔄 **Sistema Bilíngue** / Bilingual System
  - Alternância instantânea PT-BR ⇄ EN-US
  - Instant toggle between PT-BR ⇄ EN-US
  
- 📚 **Formato Flashcard** / Flashcard Format
  - Questões apresentadas individualmente
  - Questions presented individually
  - Feedback imediato (correto/incorreto)
  - Immediate feedback (correct/incorrect)
  
- 💡 **Dicas para o Exame** / Exam Tips
  - Controle de ansiedade / Anxiety management
  - Técnicas de foco / Focus techniques
  - Estratégias de prova / Exam strategies
  - Preparação física e mental / Physical & mental preparation

### 🎨 Design Motivador | Motivational Design

- Interface limpa e moderna / Clean, modern interface
- Cores vibrantes e encorajadoras / Vibrant, encouraging colors
- Totalmente responsivo (mobile, tablet, desktop)
- Fully responsive (mobile, tablet, desktop)
- Experiência sem stress / Stress-free experience

---

## 🚀 Como Usar | How to Use

### Para Estudantes | For Students

1. **Acesse o site** / **Access the website**:
   ```
   https://[seu-usuario].github.io/[nome-do-repo]/
   ```

2. **Escolha seu idioma** / **Choose your language**:
   - Clique no botão PT-BR ou EN-US no topo da página
   - Click the PT-BR or EN-US button at the top of the page

3. **Inicie a revisão** / **Start the review**:
   - Clique em "Iniciar Revisão" / Click "Start Review"
   - Leia cada questão com atenção / Read each question carefully
   - Selecione sua resposta (A-E) / Select your answer (A-E)
   - Veja feedback e explicação / See feedback and explanation
   - Avance para a próxima questão / Move to next question

4. **Explore as dicas** / **Explore the tips**:
   - Acesse "Dicas para a Prova" no menu
   - Access "Exam Tips" from the menu
   - Aprenda técnicas para o dia do exame
   - Learn techniques for exam day

### Para Professores | For Teachers

Este projeto é ideal para:
- Revisão final em sala de aula
- Atividade interativa em projetores
- Estudo individual ou em grupo
- Simulação de ambiente de prova

This project is ideal for:
- Final classroom review sessions
- Interactive projector activities
- Individual or group study
- Exam environment simulation

---

## 💻 Instalação Local | Local Installation

### Pré-requisitos | Prerequisites

- Git instalado / Git installed
- Navegador web moderno / Modern web browser
- (Opcional) Python 3 para servidor local / (Optional) Python 3 for local server

### Passos | Steps

1. **Clone o repositório** / **Clone the repository**:
   ```bash
   git clone https://github.com/[seu-usuario]/[nome-do-repo].git
   cd [nome-do-repo]
   ```

2. **Opção A: Abrir diretamente** / **Option A: Open directly**:
   ```bash
   # Abra index.html no seu navegador
   # Open index.html in your browser
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

3. **Opção B: Servidor local** / **Option B: Local server**:
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Depois acesse: http://localhost:8000
   # Then access: http://localhost:8000
   ```

---

## 📁 Estrutura do Projeto | Project Structure

```
enem-english-prep/
├── index.html              # Página principal / Main page
├── css/
│   └── styles.css          # Estilos / Styles
├── js/
│   ├── data.js             # Banco de questões / Question bank
│   ├── app.js              # Lógica principal / Main logic
│   └── i18n.js             # Sistema de tradução / Translation system
├── README.md               # Este arquivo / This file
├── system-prompt.md        # Instruções para AI / AI instructions
└── enem_english_questions.csv  # Dados fonte / Source data
```

---

## 🛠️ Tecnologias Utilizadas | Technologies Used

- **HTML5**: Estrutura semântica / Semantic structure
- **CSS3**: Design responsivo / Responsive design
- **JavaScript (ES6+)**: Lógica e interatividade / Logic and interactivity
- **GitHub Pages**: Hospedagem / Hosting

**Nota**: Sem dependências externas, totalmente estático!  
**Note**: No external dependencies, fully static!

---

## 📊 Banco de Questões | Question Bank

### Categorias | Categories

- 📰 Compreensão de Texto - Notícias / Reading Comprehension - News
- 💻 Vocabulário - Tecnologia / Vocabulary - Technology
- 📱 Textos Culturais - Redes Sociais / Cultural Texts - Social Media
- 🎓 Educação / Education
- 🌍 Meio Ambiente / Environment
- 🎵 Música e Cultura / Music and Culture
- ⚕️ Saúde / Health
- 📚 Literatura / Literature
- 🔬 Ciência / Science
- ✈️ Viagens / Travel

### Níveis de Dificuldade | Difficulty Levels

- 🟢 **Fácil** / **Easy**: 33% das questões / 33% of questions
- 🟡 **Médio** / **Medium**: 34% das questões / 34% of questions
- 🔴 **Difícil** / **Hard**: 33% das questões / 33% of questions

---

## 🎯 Dicas de Uso em Sala | Classroom Usage Tips

### Para a Última Aula do Ano | For the Final Class

1. **Modo Projeção** / **Projection Mode**:
   - Projete na tela e resolva questões em conjunto
   - Project on screen and solve questions together
   - Discuta estratégias de resolução
   - Discuss solving strategies

2. **Competição Amigável** / **Friendly Competition**:
   - Divida a turma em grupos
   - Divide class into groups
   - Cada grupo responde uma questão
   - Each group answers a question
   - Gamifique a revisão!
   - Gamify the review!

3. **Revisão Individual** / **Individual Review**:
   - Cada aluno em seu ritmo
   - Each student at their own pace
   - Professor circula tirando dúvidas
   - Teacher circulates answering questions

---

## 🌟 Contribuindo | Contributing

Contribuições são bem-vindas! / Contributions are welcome!

1. Fork o projeto / Fork the project
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/MinhaFeature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m 'Adiciona MinhaFeature'
   ```
4. Push para a branch:
   ```bash
   git push origin feature/MinhaFeature
   ```
5. Abra um Pull Request

---

## 📝 Licença | License

Este projeto é distribuído sob a licença MIT. Veja `LICENSE` para mais informações.  
This project is distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍🏫 Autor | Author

Desenvolvido com ❤️ para alunos do 3º ano preparando-se para o ENEM.  
Developed with ❤️ for 3rd-year students preparing for ENEM.

**Professor de Inglês | English Teacher**  
Especialista em preparação para vestibulares (ENEM, UFPR)  
Specialist in college entrance exam preparation (ENEM, UFPR)

---

## 🎓 Recursos Adicionais | Additional Resources

### Para Estudantes | For Students
- [INEP - Provas Anteriores do ENEM](https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem)
- [Manual do Enem](https://manualdomundo.com.br/tag/enem/)
- [Toda Matéria - Inglês ENEM](https://www.todamateria.com.br/ingles-enem/)

### Para Professores | For Teachers
- [Guia de Elaboração de Questões](https://blog.highfivebilingual.com.br/)
- [Estratégias de Ensino para ENEM](https://www.blog.pedroejoaoeditores.com.br/)

---

## 💪 Mensagem Final | Final Message

**[PT-BR]**  
Lembre-se: O ENEM é apenas uma etapa. Você já estudou, se preparou e está pronto. Confie em si mesmo, mantenha a calma e mostre tudo que sabe. **Você consegue!** 🌟

**[EN-US]**  
Remember: ENEM is just one step. You've already studied, prepared, and you're ready. Trust yourself, stay calm, and show everything you know. **You can do it!** 🌟

---

## 📞 Suporte | Support

Encontrou um bug? Tem uma sugestão?  
Found a bug? Have a suggestion?

Abra uma [issue](https://github.com/[seu-usuario]/[nome-do-repo]/issues) no GitHub!

---

**Última atualização** / **Last update**: Novembro 2025  
**Versão** / **Version**: 1.0.0

---

⭐ **Se este projeto te ajudou, deixe uma estrela no GitHub!**  
⭐ **If this project helped you, leave a star on GitHub!**
