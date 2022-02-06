/* ####### ANOTAÇÕES DO CÓDIGO #######
# 
# As funções do jogo foram criadas de baixo para cima, sendo as funções mais inferiores as primeiras a serem executadas e as mais superiores, as últimas.
# A lógica das funções funciona assim:
#   
#   1. Todas as variáveis globais foram declaradas no início.
#   2. A primeira função a ser chamada cria o esqueleto que vai acomodar a lista de cartas.
#   3. Ao executar a função que vai comportar as cartas, em seguida é chamada a próxima função que vai validar a escolha do usuário.
#   4.

  O jogo funciona da seguinte forma:
  1. 
*/

// numberOfCards = prompt("Com quantas cartas deseja começar? [escolha números pares entre 4 e 14]");
let numberOfCardsChosen, numberOfCardsAllowed = false;
let card1, card2, hitTwoCards = 0, computePlays = 0;

const cards = [
    "./images/bobrossparrot.gif",
    "./images/explodyparrot.gif",
    "./images/fiestaparrot.gif",
    "./images/metalparrot.gif",
    "./images/revertitparrot.gif",
    "./images/tripletsparrot.gif",
    "./images/unicornparrot.gif",
];

// function validateCards(){
//     while(numberOfCardsAllowed == false){
//         numberOfCards = prompt("Com quantas cartas deseja começar? [escolha números pares entre 4 e 14]");
        
//         if(numberOfCards%2 == 0){
//             if( (numberOfCards >= 4) && (numberOfCards <= 14) ){
//                 numberOfCardsAllowed = true;
//                 buildMemoryGame();
//             }
//         }
//     }
// }

function endGame(){
    // console.log("Cartas escolhidas: "+numberOfCardsChosen)
    // console.log("Acertos: "+hitTwoCards)
    if( (numberOfCardsChosen/2) == hitTwoCards ){
        alert(`Você ganhou em ${computePlays} jogadas!`);
    }
}




function resetCards(){
    return(card1 = card2 = undefined);
}

function turnDown(){
    card1.classList.remove("upturned-card");
    card2.classList.remove("upturned-card");

    card1 = undefined;
    card2 = undefined;
}

function turnCardFaceUp(pressedCard){
    /*Se a carta já está virada, quer dizer que não preciso virá-la
     *novamente.*/
    const alreadyTurned = pressedCard.classList.contains("upturned-card");
    // console.log(alreadyTurned)
    if(alreadyTurned){
        return;
    }

    /*As duas primeiras cartas tem que ser viradas corretamente
      para então o jogador poder clicar em outras.*/
    if( (card1 !== undefined) && (card2 !== undefined) ){
        return;
    }

    /*Se o jogador passou pelas duas verificações acima e não
      entrou nelas, então a atual carta é a 3ª. Significa que
      posso inserir a classe de virar e contabilizar a jogada.*/
    computePlays++;
    console.log(computePlays)
    pressedCard.classList.add("upturned-card");

    //Identifica se é a 1ª carta
    if(card1 === undefined){
        card1 = pressedCard;
        return;
    }

    /*Como já foi definida a 1ª carta, a 2ª é estabelecida
      automaticamente*/
    card2 = pressedCard;

    
    /*Se o conteúdo (imagem) de ambas as cartas forem diferentes,
      eu preciso chamar uma função para virar elas de volta para
      baixo.*/
    if(card1.innerHTML !== card2.innerHTML){
        /*Apenas chamar a função fará a carta virar instantâneamente,
          sem dar tempo para que o jogador veja qual carta ele havia
          virado. Então, efetuo um atraso de alguns milissegundos
          para dar tempo do jogador ver qual carta foi clicada.*/
        setTimeout(turnDown, 1000);
        return;
    }
    /*Se o conteúdo das cartas forem iguais, o jogador vai ter
      acertado.*/
    hitTwoCards++;
    /*Se ambas as cartas forem viradas corretamente, elas serão
      resetadas para que o jogador possa virar as demais.*/
    resetCards();



    endGame();
}

function comparator() {
	return Math.random() - 0.5; 
}

function buildMemoryGame(){
    // let shuffle = cards.sort(comparador);
    let cardShown = [];

    // Distribui o número de cartas escolhido pelo jogador
    for(let i = 0; i < numberOfCardsChosen/2; i++){
        let saveCard = cards[i];

        cardShown.push(saveCard);
        cardShown.push(saveCard);
    }

    /* Embaralha a posição das cartas para que a distribuição, no
    ** momento do jogo, seja aleatória.*/
    cardShown = cardShown.sort(comparator);

    // Acessa a classe onde serão inseridas as cartas
    const boxOfCards = document.querySelector(".container");
    
    // Acessa a lista não ordenada e insere os itens
    boxOfCards.innerHTML = "";
    for(let i = 0; i < cardShown.length; i++){
        // <li class="card upturned-card"></li>
        boxOfCards.innerHTML += `
            <li class="card" onclick="turnCardFaceUp(this)">
                <div class="front template">
                    <img src="./images/front.png">
                </div>
                <div class="back template">
                    <img src="${cardShown[i]}">
                </div>
            </li>
        `;
    }
}

function validateCards(){
    while(numberOfCardsAllowed == false){
        numberOfCardsChosen = prompt("Com quantas cartas deseja começar? [escolha números pares entre 4 e 14]");
        
        if(numberOfCardsChosen%2 == 0){
            if( (numberOfCardsChosen >= 4) && (numberOfCardsChosen <= 14) ){
                numberOfCardsAllowed = true;
                buildMemoryGame();
                // console.log(numberOfCards)
            }
        }
    }
}

function createGameModel(){
    return(`
        <ul class="container">
            ${validateCards()}
        </ul>
    `);
}

createGameModel();