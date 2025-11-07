# 🚀 Quick Start Guide - ENEM English Prep WebApp

## Para Começar em 5 Minutos | Get Started in 5 Minutes

### Passo 1: Criar Repositório no GitHub
```bash
# Acesse github.com e crie um novo repositório
# Go to github.com and create a new repository

# Nome sugerido: enem-english-prep
# Suggested name: enem-english-prep

# Marque: Initialize with README
# Check: Initialize with README

# Clone para sua máquina
# Clone to your machine
git clone https://github.com/[seu-usuario]/enem-english-prep.git
cd enem-english-prep
```

### Passo 2: Adicionar Arquivos Essenciais

**Estrutura de pastas a criar:**
```bash
mkdir -p .github css js
```

**Arquivos a adicionar (copie do pacote fornecido):**

1. ✅ `.github/copilot-instructions.md` - Instruções para o Copilot Agent
2. ✅ `enem_english_questions.csv` - Banco de 54 questões
3. ✅ `README.md` - Documentação do projeto
4. ✅ `system-prompt.md` - System prompt completo (referência)
5. ✅ `exam-tips-content.md` - Conteúdo das dicas (referência)

```bash
# Adicionar ao Git
git add .
git commit -m "Initial setup with documentation and data"
git push origin main
```

### Passo 3: Ativar GitHub Copilot Agent Mode

#### Opção A: Via VS Code Insiders

1. Instale [VS Code Insiders](https://code.visualstudio.com/insiders/)
2. Instale extensão GitHub Copilot
3. Abra seu repositório no VS Code
4. Abra a view "Copilot Edits" (Ctrl+Shift+I / Cmd+Shift+I)
5. Selecione "Agent" no dropdown de modo
6. Cole o prompt inicial (veja abaixo)

#### Opção B: Via GitHub.com

1. Acesse [github.com/copilot/agents](https://github.com/copilot/agents)
2. Selecione seu repositório no dropdown
3. Cole o prompt inicial
4. Clique "Send now"

### Passo 4: Prompt Inicial para o Copilot Agent

**Cole este prompt:**

```
Leia as instruções em .github/copilot-instructions.md e system-prompt.md.

Crie uma aplicação web estática completa de revisão de inglês para o ENEM:

ESTRUTURA A CRIAR:
1. index.html - página principal com:
   - Header com logo e toggle de idioma (PT-BR/EN-US)
   - Seção hero com botões "Iniciar Revisão" e "Dicas para a Prova"
   - Container para exibir questões (hidden inicialmente)
   - Container para dicas (hidden inicialmente)
   - Footer com créditos

2. css/styles.css - design responsivo com:
   - CSS variables para cores do design system
   - Layout mobile-first
   - Componentes: cards, botões, badges, progress bar
   - Animações suaves
   - Media queries para tablet e desktop

3. js/data.js - converter enem_english_questions.csv em:
   - Array de objetos JavaScript
   - Exportar como constante QUESTIONS

4. js/i18n.js - sistema de tradução com:
   - Objeto com todas as traduções (PT-BR e EN-US)
   - Função para trocar idioma
   - Função para atualizar DOM com texto traduzido

5. js/app.js - lógica principal:
   - Carregar e embaralhar questões (Fisher-Yates)
   - Exibir questão atual
   - Validar resposta selecionada
   - Mostrar feedback (correto/incorreto)
   - Avançar para próxima questão
   - Rastrear progresso (X/54)
   - Toggle entre views (home, quiz, tips)

CONSTRAINTS CRÍTICAS:
- ❌ SEM localStorage/cookies/sessionStorage
- ❌ SEM backend/APIs externas
- ❌ SEM frameworks (React, Vue, etc.)
- ✅ APENAS HTML5 + CSS3 + Vanilla JS (ES6+)
- ✅ Funcionar offline após load inicial
- ✅ Estado em memória apenas (objetos JS)

DESIGN SYSTEM:
- Primary: #2563eb (blue)
- Secondary: #10b981 (green)
- Accent: #f59e0b (amber)
- Success: #22c55e, Error: #ef4444
- Background: #f9fafb, Text: #1f2937

FEATURES OBRIGATÓRIAS:
✅ 54 questões em flashcard format
✅ 5 alternativas (A-E) por questão
✅ Feedback imediato com cores
✅ Explicações após resposta
✅ Toggle PT-BR ⇄ EN-US
✅ Seção de dicas para prova
✅ Progress tracking
✅ Totalmente responsivo

Siga rigorosamente as instruções em .github/copilot-instructions.md
```

### Passo 5: Deixar o Agent Trabalhar

O Copilot Agent irá:
1. ✅ Analisar as instruções
2. ✅ Converter CSV em JSON
3. ✅ Criar todos os arquivos
4. ✅ Implementar features
5. ✅ Testar e corrigir bugs
6. ✅ Commit automaticamente (revisar antes!)

**Você pode acompanhar o progresso e pedir ajustes:**
- "Adicione animações mais suaves"
- "Melhore o contraste das cores"
- "Faça a navbar fixa no topo"
- "Adicione ícones aos botões"

### Passo 6: Deploy no GitHub Pages

```bash
# Após o Agent concluir, fazer push final
git add .
git commit -m "Complete webapp ready for deployment"
git push origin main

# Configurar GitHub Pages:
# 1. Vá em Settings → Pages
# 2. Source: Deploy from branch
# 3. Branch: main, Folder: / (root)
# 4. Save
# 5. Aguarde ~5 minutos
```

**Seu site estará em:**
```
https://[seu-usuario].github.io/enem-english-prep/
```

---

## ⚡ Comandos Úteis | Useful Commands

### Testar Localmente
```bash
# Python 3
python3 -m http.server 8000

# Acesse: http://localhost:8000
```

### Validar HTML/CSS
```bash
# Online validators:
# HTML: https://validator.w3.org/
# CSS: https://jigsaw.w3.org/css-validator/
```

### Ver Erros JavaScript
```bash
# Abra DevTools: F12 ou Cmd+Option+I
# Vá na aba Console
# Veja se há erros em vermelho
```

---

## 🎯 Checklist Rápido | Quick Checklist

Antes de usar em sala de aula:

- [ ] 54 questões carregam?
- [ ] Toggle de idioma funciona?
- [ ] Respostas validam corretamente?
- [ ] Feedback aparece (verde/vermelho)?
- [ ] Explicações exibem após resposta?
- [ ] Navegação entre questões funciona?
- [ ] Seção de dicas acessível?
- [ ] Funciona no mobile?
- [ ] Site carregou no GitHub Pages?
- [ ] Sem erros no console?

✅ **Tudo OK? Pronto para usar!**

---

## 🆘 Solução de Problemas Rápida

### Problema: "Agent não está criando arquivos"
**Solução:** 
- Certifique-se que `.github/copilot-instructions.md` existe
- Reinicie o Agent
- Tente prompt mais específico

### Problema: "Questões não aparecem"
**Solução:**
- Abra F12 → Console
- Veja se há erro no carregamento de `data.js`
- Verifique sintaxe do JSON

### Problema: "GitHub Pages mostra 404"
**Solução:**
- Confirme que `index.html` está na raiz
- Aguarde 10 minutos
- Limpe cache (Ctrl+Shift+R)
- Verifique Settings → Pages

### Problema: "Layout quebrado no celular"
**Solução:**
- Adicione no `<head>` do HTML:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Use unidades relativas (rem, %) no CSS
- Teste no DevTools com dimensões mobile

---

## 📱 Testando em Múltiplos Dispositivos

### Desktop
- Chrome DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
- Teste dimensões: 1920x1080, 1366x768, 1024x768

### Tablet
- iPad: 768x1024
- Android Tablet: 800x1280

### Mobile
- iPhone SE: 375x667
- iPhone 14: 390x844
- Android: 360x640

---

## 💡 Dicas de Uso em Sala de Aula

### Modo Projeção
1. Abra o site no navegador
2. Pressione F11 para fullscreen
3. Resolva questões junto com a turma
4. Discuta estratégias

### Modo Individual
1. Compartilhe o link com os alunos
2. Cada um pratica no próprio ritmo
3. Professor circula tirando dúvidas
4. Discutam dificuldades ao final

### Competição Amigável
1. Divida turma em grupos
2. Cada grupo responde uma questão
3. Pontue acertos
4. Torne revisão mais engajadora

---

## 🎓 Recursos Adicionais

### Documentação Completa
- `README.md` - Guia completo do projeto
- `system-prompt.md` - Especificações técnicas
- `.github/copilot-instructions.md` - Instruções para Agent
- `complete-guide.pdf` - Guia consolidado (12 páginas)

### Dados
- `enem_english_questions.csv` - 54 questões prontas
- `exam-tips-content.md` - Todo conteúdo das dicas

### Links Úteis
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Copilot Agent Guide](https://code.visualstudio.com/docs/copilot/agent-mode)
- [INEP - Provas Anteriores](https://www.gov.br/inep)

---

## 🎉 Pronto!

Seu sistema está configurado e pronto para desenvolvimento.

**Próximos passos:**
1. ✅ Repositório criado
2. ✅ Arquivos adicionados
3. ✅ Copilot Agent ativado
4. ⏳ Aguarde Agent criar aplicação
5. ⏳ Faça push e deploy
6. 🎓 Use em sala de aula!

---

**Boa sorte com seu projeto e sucesso na última aula do ano! 🚀📚**

---

*Criado para professores de inglês preparando alunos para o ENEM 2025*  
*Created for English teachers preparing students for ENEM 2025*
