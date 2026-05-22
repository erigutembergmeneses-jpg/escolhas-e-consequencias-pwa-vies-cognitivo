# 📖 PWA Viés Cognitivo

Uma Progressive Web App leve, otimizada para mobile, sem login e sem carregamento pesado.  
O objetivo é simular cenários rápidos e revelar o viés cognitivo dominante do usuário.

---

## 🚀 Como usar
1. Abra `index.html` em um navegador moderno.
2. A tela inicial aparece por 2 segundos.
3. Em seguida, o usuário escolhe entre 3 cenários interativos.
4. O resultado mostra o viés dominante e sugere um capítulo.
5. Botões permitem:
   - 📖 Ler a introdução grátis.
   - 📤 Compartilhar o perfil neural (imagem minimalista via Canvas + Web Share API).

---

## 🛠️ Tecnologias
- **HTML, CSS, JavaScript puro** (sem frameworks pesados).
- **Canvas API** para gerar imagem de perfil neural.
- **Web Share API** para compartilhar em WhatsApp/Instagram/LinkedIn.
- **Manifest.json** para tornar a PWA instalável.
- **Service Worker** para cache e funcionamento offline.

---

## 📦 Estrutura de Arquivos
- `index.html` → página principal com fluxo interativo.
- `style.css` → estilos visuais.
- `style.js` → lógica de interação e cenários.
- `manifest.json` → define ícones, nome e comportamento da PWA.
- `service-worker.js` → gerencia cache e suporte offline.
- `icon-192.png` e `icon-512.png` → ícones para instalação.
- `README.md` → documentação do projeto.

---

## 📱 Instalação como App
1. Abra o link hospedado no navegador do celular.
2. O navegador oferecerá a opção **Adicionar à tela inicial**.
3. O app funcionará como aplicativo independente, mesmo offline.

---

## 🌐 Hospedagem Gratuita
Pode ser hospedada em:
- **GitHub Pages**  
- **Netlify**

Após enviar os arquivos para o repositório, ative o GitHub Pages em *Settings → Pages* e selecione a branch `main` com `/root`.  
O link público será algo como:  
`https://seuusuario.github.io/pwa-vies-cognitivo/`

---

## ✅ Próximos Passos
- Criar ícones minimalistas (`icon-192.png` e `icon-512.png`) em preto/branco para combinar com o design.  
- Testar em diferentes navegadores para garantir compatibilidade.  
- Expandir cenários e capítulos conforme o conteúdo do livro.
