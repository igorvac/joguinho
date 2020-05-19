// Código feito para a aula Game Maker da FIAP SCHOOL
// por Igor Vac e pronto par você modificar :)


// Características da moeda

let moedaX = 0; // Posição X da moeda
let moedaY = 0; // Posição Y da moeda
let moedaTamanho = 30; // Tamanho da moeda
let velo = 2; // Velocidade de queda da moeda
let moedaImg; // Vai armazenar a imagem da moeda

// Características da personagem

let personagemTamanho = 50; //Tamanho da personagem
let personagemImg; // Vai armazenar a imagem da personagem

// Características gerais

let pontos = 0; // Armazena a quantidade de pontos
let fundoImg; //Vai armazenar a imagem do fundo

// Aqui são carregadas as imagens
function preload() {
  moedaImg = loadImage('imagens/diamante.png'); // Imagem da moeda
  personagemImg = loadImage('imagens/steve.png'); // Imagem da personagem
  fundoImg = loadImage('imagens/grama.jpg'); // Imagem da personagem
}

function setup() {
  moedaX = random(moedaTamanho / 2, width - moedaTamanho / 2); // Sorteia a primeira posição da moeda
  createCanvas(500, 500); // Cria uma tela de 500 por 500 pixels
  imageMode(CENTER);
}

function draw() { // Aqui começa a desenhar na tela
  distCheck(); // Checa a distancia entre a moeda e a personagem

  //background(0, 0, 0);
  image(fundoImg, width/2, height/2, width, height);

  fill(255, 255, 255);
  textAlign(LEFT);
  textSize(30);
  text(pontos, 400, 50)

  //fill(255, 255, 0);
  //ellipse(moedaX, moedaY, moedaTamanho, moedaTamanho);
  image(moedaImg, moedaX, moedaY, moedaTamanho, moedaTamanho);

  //fill(255, 255, 255);
  //ellipse(mouseX, height - personagemTamanho / 2, personagemTamanho, personagemTamanho);
  image(personagemImg, mouseX, height - personagemTamanho , personagemTamanho, personagemTamanho);


  moedaY += velo;

  if (moedaY > height) {
    moedaY = -moedaTamanho;
    moedaX = random(moedaTamanho / 2, width - moedaTamanho / 2);
    if (pontos > 0) {
      pontos = pontos - 1;
    }
  }

  if (distance <= moedaTamanho + personagemTamanho) {
    pontos = pontos + 1;
    moedaY = -moedaTamanho;
    moedaX = random(moedaTamanho / 2, width - moedaTamanho / 2);
  }
}


let distX; 
let distY;
let distance;
function distCheck() {
  distX = moedaX - mouseX;
  distY = moedaY - height - 25;
  distance = sqrt(distX * distX + distY * distY);
  
}