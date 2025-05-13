// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById('palpite').value);
  const mensagem = document.getElementById('mensagem');
  tentativas++;

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = 'Por favor, digite um número válido entre 1 e 100.';
  } else if (palpite === numeroSecreto) {
    mensagem.textContent = `Parabéns! Você acertou em ${tentativas} tentativas! 🎉`;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = 'Tente um número maior.';
  } else {
    mensagem.textContent = 'Tente um número menor.';
  }
}
