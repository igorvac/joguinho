// Código feito para a aula Game Maker da FIAP SCHOOL
// por Igor Vac e pronto par você modificar :)


// Características da moeda

let moedaX = 0; // Posição horizontal da moeda
let moedaY = 0; // Posição vertical da moeda
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

  image(fundoImg, width/2, height/2, width, height); //Desenha a imagem do fundo

  fill(255, 255, 255); // Cor do texto em branco
  textSize(30); // Tamanho do texto em 30 pixels
  text(pontos, 400, 50) // Desenha o texto na tela com os pontos

  // Desenha a imagem
  image(moedaImg, moedaX, moedaY, moedaTamanho, moedaTamanho); 
  moedaY += velo; // Soma a velocidade com a posição da moeda na tela

  // Desenha a personagem 
  image(personagemImg, mouseX, height - personagemTamanho , personagemTamanho, personagemTamanho); 

  
  //Aqui temos duas condições: Se a moeda não encostar no personagem e se a moeda encostar no personagem

  if (moedaY > height) {  //Se a moeda NÃO encostar
    moedaY = 0; // Desenha a moeda no topo da tela
    moedaX = random(moedaTamanho / 2, width - moedaTamanho / 2); // Sorteia a nova posição horizontal da moeda
    if (pontos > 0) { // Se ele tiver mais pontos que 0
      pontos = pontos - 1; // Remover um ponto
    }
  }

  if (distance <= moedaTamanho + personagemTamanho) { //Se a moeda encostar
    pontos = pontos + 1; // Soma um ponto
    moedaY = 0; // Desenha a moeda no topo da tela
    moedaX = random(moedaTamanho / 2, width - moedaTamanho / 2); // Sorteia a nova posição horizontal da moeda
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