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

/******************** Variáveis do jogo do mal ********************/
let numberOfDarkCardsChosen = 0, numberOfDarkCardsAllowed = false;
let darkcard1, darkcard2;
let hitTwoDarkCards = 0, computeDarkPlays = 0;

const darkCards = [
    "./images/hardgame/1-advanced-ritual-art.jpg",
    "./images/hardgame/2-beaver-warrior.jpg",
    "./images/hardgame/3-black-dragon.jpg",
    "./images/hardgame/4-black-luster-ritual.jpg",
    "./images/hardgame/5-black-luster-soldier.jpg",
    "./images/hardgame/6-celtic-guardian.jpg",
    "./images/hardgame/7-curse-of-dragon.jpg",
    "./images/hardgame/8-dark-magician.jpg",
    "./images/hardgame/9-gaia.jpg",
    "./images/hardgame/10-giant-soldier.jpg",
    "./images/hardgame/11-goblin-circus.jpg",
    "./images/hardgame/12-kuriboh.jpg",
    "./images/hardgame/13-magician-faith.jpg",
    "./images/hardgame/14-magic-jammer.jpg",
    "./images/hardgame/15-mystic-elf.jpg",
    "./images/hardgame/16-old-magician.jpg",
    "./images/hardgame/17-polymerization.jpg",
    "./images/hardgame/18-ra-dragon.jpg",
    "./images/hardgame/19-senju-thousand-hands.jpg",
    "./images/hardgame/20-shadow-specter.jpg",
    "./images/hardgame/21-silver-fang.jpg",
    "./images/hardgame/22-skull-king.jpg",
    "./images/hardgame/23-soul-release.jpg",
    "./images/hardgame/24-spellbinding-circle.jpg",
    "./images/hardgame/25-sphere-kuriboh.jpg",
    "./images/hardgame/26-spiral-spear-strike.jpg",
    "./images/hardgame/27-twister.jpg",
    "./images/hardgame/28-white-dragon.jpg",
    "./images/hardgame/29-white-gift.jpg",
    "./images/hardgame/30-winged-dragon.jpg",
];




/******************** Variáveis do jogo comum ********************/
let numberOfCardsChosen = 0, numberOfCardsAllowed = false;
let card1, card2;
let hitTwoCards = 0, computePlays = 0;
let counter = document.querySelector(".counter");

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

/***********************************************************************
 ***********************************************************************
 ***************************** JOGO DO MAL *****************************
 *****                                                              ****
 ***** Este trecho não faz parte do jogo comum. Tal parte foi       **** 
 ***** idealizada única e exclisivamente para o entretenimento,     ****
 ***** visando dar ao jogador um maior desafio. Divirta-se!!!       ****
 ***********************************************************************
 ***********************************************************************
*/

function toUnderworld(){
    darkcard1.classList.remove("upturned-card");
    darkcard2.classList.remove("upturned-card");

    darkcard1 = undefined;
    darkcard2 = undefined;
}

function turnDarkCardFaceUp(pressedDarkCard){
    const alreadyTurned = pressedDarkCard.classList.contains("upturned-card");
    if(alreadyTurned){
        return;
    }

    if( (darkcard1 !== undefined) && (darkcard2 !== undefined) ){
        return;
    }

    computeDarkPlays++;
    pressedDarkCard.classList.add("upturned-card");

    if(darkcard1 === undefined){
        darkcard1 = pressedDarkCard;
        return;
    }

    darkcard2 = pressedDarkCard;

    if(darkcard1.innerHTML !== darkcard2.innerHTML){
        setTimeout(toUnderworld, 1000);
        return;
    }
    
    hitTwoDarkCards++;
    resetCards();



    // endGame();
}

function buildHellMemoryGame(){
    let darkCardShown = [];

    for(let i = 0; i < numberOfDarkCardsChosen/2; i++){
        let saveDarkCard = darkCards[i];

        darkCardShown.push(saveDarkCard);
        darkCardShown.push(saveDarkCard);
    }

    darkCardShown = darkCardShown.sort(comparator);

    const boxOfDarkCards = document.querySelector(".container");
    
    boxOfDarkCards.innerHTML = "";
    for(let i = 0; i < darkCardShown.length; i++){
        boxOfDarkCards.innerHTML += `
            <li class="darkcard" onclick="turnDarkCardFaceUp(this)">
                <div class="front template">
                    <img src="./images/hardgame/0-front.png">
                </div>
                <div class="back template">
                    <img src="${darkCardShown[i]}">
                </div>
            </li>
        `;
    }
}

function validateDarkCards(){
    while(numberOfDarkCardsAllowed == false){
        numberOfDarkCardsChosen = prompt("Com quantas cartas deseja começar? [escolha números pares entre 14 e 30]");
        
        if(numberOfDarkCardsChosen%2 == 0){
            if( (numberOfDarkCardsChosen >= 14) && (numberOfDarkCardsChosen <= 30) ){
                numberOfDarkCardsAllowed = true;
                // chronos();
                buildHellMemoryGame();
            }
        }
    }
}

function createDarkGameModel(){
    return(`
        <ul class="container">
            ${validateDarkCards()}
        </ul>
    `);
}

function hellGame(){
    // alert("PARABÉNS!!! Vc entrou no HELLGAME")
    const newheader = document.querySelector("header h1");
    newheader.innerHTML = "👹 HELL MEMORY GAME 👹";

    // const newCounter = document.querySelector(".counter");
    // newCounter.innerHTML = "Você não vai querer saber quando tempo permanecer no submundo, HUMANO. HAHAHAHA";

    const hellBody = document.querySelector("body");
    hellBody.classList.add("dark-environment");

    createDarkGameModel();
}






/***************************** FINAL DO JOGO *****************************/

function finishAndNewGame(){
    alert(`Você ganhou em ${computePlays} jogadas! Com um tempo de ${counter.innerHTML} segundos!`);

    let challengeRequest = prompt("Quer jogar novamente? [s/n]");

    if(challengeRequest === "s"){
        challengeRequest = prompt("Quer do jeito fácil ou do jeito difícil? [f/d]");
        if(challengeRequest === "f"){
            // numberOfCardsAllowed = false;
            // hitTwoCards = 0, computePlays = 0;
            // counter.innerHTML = 0;
            // validateCards();
            window.location.reload();
        }
        else if(challengeRequest === "d"){
            hellGame();
        }
    }
}

function endGame(){
    // console.log("Cartas escolhidas: "+numberOfCardsChosen)
    // console.log("Acertos: "+hitTwoCards)
    if( (numberOfCardsChosen/2) == hitTwoCards ){
        setTimeout(finishAndNewGame, 200);
    }
}


/***************************** JOGO NORMAL *****************************/

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


// counter = document.querySelector(".counter");

function increaseTime(){
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}


function chronos(){
    setInterval(increaseTime, 1000);
}

function validateCards(){
    while(numberOfCardsAllowed == false){
        numberOfCardsChosen = prompt("Com quantas cartas deseja começar? [escolha números pares entre 4 e 14]");
        
        if(numberOfCardsChosen%2 == 0){
            if( (numberOfCardsChosen >= 4) && (numberOfCardsChosen <= 14) ){
                numberOfCardsAllowed = true;
                chronos();
                buildMemoryGame();
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