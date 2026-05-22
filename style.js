// Alterna telas com base no tempo
setTimeout(() => {
  document.getElementById('intro').classList.remove('active');
  document.getElementById('scenarios').classList.add('active');
}, 2000);

function selectOption(bias) {
  document.getElementById('scenarios').classList.remove('active');
  document.getElementById('result').classList.add('active');
  document.getElementById('biasResult').innerText = "Seu viés dominante: " + bias;
  document.getElementById('chapterSuggestion').innerText = "Comece pelo Capítulo 4. Sua próxima decisão crítica depende disso.";
}

function readIntro() {
  alert("Aqui você abriria a introdução gratuita (HTML estático).");
}

function shareProfile() {
  const canvas = document.getElementById('shareCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.font = "20px Arial";
  ctx.fillText("Perfil Neural", 120, 80);
  ctx.fillText(document.getElementById('biasResult').innerText, 50, 120);

  canvas.toBlob(blob => {
    const file = new File([blob], "perfil.png", { type: "image/png" });
    if (navigator.share) {
      navigator.share({
        title: "Meu Perfil Neural",
        files: [file]
      });
    } else {
      alert("Compartilhamento não suportado neste dispositivo.");
    }
  });
}
