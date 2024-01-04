//Variáveis
const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
const imgCookieClosed = document.querySelector('#screen1 img');
let randomPhrase = Math.round(Math.random() * 10)

//Frases
let phrases = [
    "Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.",
    "É em meio a dificuldade que se encontra a oportunidade",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "Respire fundo e fique atento às surpresas deliciosas que a vida preparou para você!",
    "Nem todos os dias são bons, mas há algo bom em cada dia.",
    "Respeite sua mente e trate seu corpo com carinho.",
    "Não há que ser forte. Há que ser flexível.",
    "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
    "Há três coisas que jamais voltam, a flecha lançada, a palavra dita e a oportunidade perdida.",
    "Um passo de cada vez. Até meio passo serve. Siga firme, não há motivo para ter pressa.",
    "A vida trará coisas boas se tiver paciência.",
    "Dentro de você, há uma luz muito forte! Acredite nela e deixe que ela ilumine o seu dia.",
    "Comece seu dia com um sorriso que venha lá de dentro da alma.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "Meta do dia: agradecer."
]

//Eventos
screen2.querySelector('button').addEventListener('click', btnReset)
imgCookieClosed.addEventListener('click', openCookie);

//funções
function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function newPhrase(){
  document.querySelector('#screen2 p').innerText = phrases[randomPhrase]  //Adicionando as frases ao documento
}

function openCookie(){
  toggleScreen()
  newPhrase()
}

function btnReset(){
  toggleScreen()
  randomPhrase = Math.round(Math.random() * 10)
}