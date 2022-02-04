// numberOfCards = prompt("Com quantas cartas deseja começar? [escolha números pares entre 4 e 14]");
let numberOfCardsChosen, numberOfCardsAllowed = false;
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
        boxOfCards.innerHTML += `
            <li class="card upturned-card">
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