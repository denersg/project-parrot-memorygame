// numberOfCards = prompt("Com quantas cartas deseja começar? [escolha números pares entre 4 e 14]");

const cards = [
    "./images/bobrossparrot.gif",
    "./images/explodyparrot.gif",
    "./images/fiestaparrot.gif",
    "./images/metalparrot.gif",
    "./images/revertitparrot.gif",
    "./images/tripletsparrot.gif",
    "./images/unicornparrot.gif",
];

function buildMemoryGame(){
    const boxOfCards = document.querySelector(".container");
    
    boxOfCards.innerHTML = "";
    for(let i = 0; i < cards.length; i++){
        boxOfCards.innerHTML += `
            <li class="card upturned-card">
                <div class="front template">
                    <img src="./images/front.png">
                </div>
                <div class="back template">
                    <img src="${cards[i]}">
                </div>
            </li>
            <li class="card">
                <div class="front template">
                    <img src="./images/front.png">
                </div>
                <div class="back template">
                    <img src="${cards[i]}">
                </div>
            </li>
        `;
    }
}

function createGameModel(){
    return(`
        <ul class="container">
            ${buildMemoryGame()}
        </ul>
    `);
}

createGameModel();