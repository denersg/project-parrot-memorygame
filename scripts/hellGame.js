let numberOfDarkCardsChosen = 0, numberOfDarkCardsAllowed = false;
let cardDark1, cardDark2;
let hitTwoDarkCards = 0, computeDarkPlays = 0;
// function darkGame(){
//     alert("PARABÉNS!!! Vc entrou no DARKGAME")

//     const newheader = document.querySelector("header h1");
//     newheader.innerHTML = "👹 HELL MEMORY GAME 👹";
// }


function createHellGameModel(){
    // alert("PARABENS VOCE ENTROU NO DARKGAME!!!")
    // console.log("PARABENS VOCE ENTROU NO DARKGAME!!!")
    const newheader = document.querySelector("header h1");
    newheader.innerHTML = "👹 HELL MEMORY GAME 👹";
    return(`
        <ul class="container">
            ${validateCards()}
        </ul>
    `);
}

createHellGameModel();