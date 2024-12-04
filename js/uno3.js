/* *********************************************
*   This 'Uno.js' was made by Corey Rinda      *
*   This is just a color/number game           *
*   If you would like to see source code for   *
*   Uno with special cards, go to              *
*   'uno2.js'. Thanks!                         *
********************************************* */

console.clear()
console.log('Uno Game Loaded\n')

var playerCount = 0;
var players = ['player', 'ai']
var currentPlayerIndex = 0;
var direcection = 1; // 1 = clockwise && -1 = counter clockwise
var cardsPickedup = 14;

var playerCards = []
var AI1Cards = []

var deckSize = 75;
var discardPile = []
var drawPile = []
var fullDeckArray = []
var shuffledDeck = []

// Obj of the entire deck
var fullDeck = {
    1: 'Red 0',
    2: 'Red 1',
    3: 'Red 2',
    4: 'Red 3',
    5: 'Red 4',
    6: 'Red 5',
    7: 'Red 6',
    8: 'Red 7',
    9: 'Red 8',
    10: 'Red 9',
    11: 'Yellow 0',
    12: 'Yellow 1',
    13: 'Yellow 2',
    14: 'Yellow 3',
    15: 'Yellow 4',
    16: 'Yellow 5',
    17: 'Yellow 6',
    18: 'Yellow 7',
    19: 'Yellow 8',
    20: 'Yellow 9',
    21: 'Green 0',
    22: 'Green 1',
    23: 'Green 2',
    24: 'Green 3',
    25: 'Green 4',
    26: 'Green 5',
    27: 'Green 6',
    28: 'Green 7',
    29: 'Green 8',
    30: 'Green 9',
    31: 'Blue 0',
    32: 'Blue 1',
    33: 'Blue 2',
    34: 'Blue 3',
    35: 'Blue 4',
    36: 'Blue 5',
    37: 'Blue 6',
    38: 'Blue 7',
    39: 'Blue 8',
    40: 'Blue 9',
    41: 'Red 1',
    42: 'Red 2',
    43: 'Red 3',
    44: 'Red 4',
    45: 'Red 5',
    46: 'Red 6',
    47: 'Red 7',
    48: 'Red 8',
    49: 'Red 9',
    50: 'Yellow 1',
    51: 'Yellow 2',
    52: 'Yellow 3',
    53: 'Yellow 4',
    54: 'Yellow 5',
    55: 'Yellow 6',
    56: 'Yellow 7',
    57: 'Yellow 8',
    58: 'Yellow 9',
    59: 'Green 1',
    60: 'Green 2',
    61: 'Green 3',
    62: 'Green 4',
    63: 'Green 5',
    64: 'Green 6',
    65: 'Green 7',
    66: 'Green 8',
    67: 'Green 9',
    68: 'Blue 1',
    69: 'Blue 2',
    70: 'Blue 3',
    71: 'Blue 4',
    72: 'Blue 5',
    73: 'Blue 6',
    74: 'Blue 7',
    75: 'Blue 8',
    76: 'Blue 9'
}

// Obj of the all the card images
var cardImg = {
    'Red 0': 'uno_cards/Red0.png',
    'Red 1': 'uno_cards/Red1.png',
    'Red 2': 'uno_cards/Red2.png',
    'Red 3': 'uno_cards/Red3.png',
    'Red 4': 'uno_cards/Red4.png',
    'Red 5': 'uno_cards/Red5.png',
    'Red 6': 'uno_cards/Red6.png',
    'Red 7': 'uno_cards/Red7.png',
    'Red 8': 'uno_cards/Red8.png',
    'Red 9': 'uno_cards/Red9.png',
    'Yellow 0': 'uno_cards/Yellow0.png',
    'Yellow 1': 'uno_cards/Yellow1.png',
    'Yellow 2': 'uno_cards/Yellow2.png',
    'Yellow 3': 'uno_cards/Yellow3.png',
    'Yellow 4': 'uno_cards/Yellow4.png',
    'Yellow 5': 'uno_cards/Yellow5.png',
    'Yellow 6': 'uno_cards/Yellow6.png',
    'Yellow 7': 'uno_cards/Yellow7.png',
    'Yellow 8': 'uno_cards/Yellow8.png',
    'Yellow 9': 'uno_cards/Yellow9.png',
    'Green 0': 'uno_cards/Green0.png',
    'Green 1': 'uno_cards/Green1.png',
    'Green 2': 'uno_cards/Green2.png',
    'Green 3': 'uno_cards/Green3.png',
    'Green 4': 'uno_cards/Green4.png',
    'Green 5': 'uno_cards/Green5.png',
    'Green 6': 'uno_cards/Green6.png',
    'Green 7': 'uno_cards/Green7.png',
    'Green 8': 'uno_cards/Green8.png',
    'Green 9': 'uno_cards/Green9.png',
    'Blue 0': 'uno_cards/Blue0.png',
    'Blue 1': 'uno_cards/Blue1.png',
    'Blue 2': 'uno_cards/Blue2.png',
    'Blue 3': 'uno_cards/Blue3.png',
    'Blue 4': 'uno_cards/Blue4.png',
    'Blue 5': 'uno_cards/Blue5.png',
    'Blue 6': 'uno_cards/Blue6.png',
    'Blue 7': 'uno_cards/Blue7.png',
    'Blue 8': 'uno_cards/Blue8.png',
    'Blue 9': 'uno_cards/Blue9.png',
    'Back': 'uno_cards/uno_back.png'
}

// Append fullDeck values into an Array of the entire deck
for (const value of Object.values(fullDeck)) {
    fullDeckArray.push(value)
}

// Function to Shuffle Deck on game start
function shuffleDeck() {
    console.log('\n\n--- Shuffling Deck ---')
    for(let i = 0; i < 76; i++) {
        let currentCard = Math.floor(Math.random() * deckSize) + 0;
        shuffledDeck.push(fullDeckArray[currentCard])
        fullDeckArray.splice(currentCard, 1)
        deckSize--
    }
    console.log('Shuffled Deck:')
    console.log(shuffledDeck.join('\n'))
    console.log('Shuffled Deck Size: ' + shuffledDeck.length)
    deckSize = 76          // Reset the deck size after subtracting it all
}

// Fucntion that Deals the card on game start
function dealCards() {
    shuffleDeck()
    console.log('\n\nDealing Cards to ' + playerCount + ' players.')

    // Deal each player a card from the top of shuffled deck and removing it into a player
    for(let i=1;i<8; i++) {
        AI1Cards.push(shuffledDeck[0])
        shuffledDeck.splice(0, 1)
        deckSize--
            
        playerCards.push(shuffledDeck[0])
        shuffledDeck.splice(0, 1)
        deckSize--
    }

    console.log('\nAI 1\'s Starting Hand: ')
    console.log(AI1Cards.join(', '))
    console.log('Hand Size: '+ AI1Cards.length)
    console.log('\n\nPlayer 1\'s Starting Hand:')
    console.log(playerCards.join(', '))
    console.log('Hand Size: '+ playerCards.length)

    document.getElementById('aiTopCardTotal').innerHTML = 'Card Total: ' + AI1Cards.length;
    document.getElementById('playerBottomCardTotal').innerHTML = 'Card Total: ' + playerCards.length;

    flipDrawTopCard()           // flip the top card from the draw pile into the top of the discard pile
    updateHandCards()           // update the <span> to show the player cards
    updateAIHandCards()         // update the <span> to show the ai cards
    const containerDraw = document.getElementById('DrawPile')
    const container = document.getElementById('playerCards');
    container.style.pointerEvents = 'none'
    containerDraw.style.pointerEvents = 'none'
    container.style.cursor = 'default'
    containerDraw.cursor = 'default'
    setTimeout(updateGameState, 2500) // Change game state to be the AI's turn in 2500ms
}

// Flipping the top card on on the shuffled deck into the discard pile
function flipDrawTopCard() {
    discardPile.push(shuffledDeck[0])
    shuffledDeck.splice(0, 1)
    showTopCard()

    console.log('\nTop Card on Discard Pile:  ' + discardPile[0])
    console.log('Number of Cards in Discard Pile: ' + discardPile.length)
    console.log('Number of Cards in Draw Pile: ' + shuffledDeck.length)
}

// Remove all the inner HTML from the given player's Card <span>
function removeCardsFromContainer(containerID) {
    console.log('\nRemoving Cards from container: ' + containerID)
    const container = document.getElementById(containerID)
    container.innerHTML = '';
    document.getElementById('aiTopCardTotal').innerHTML = 'Card Total: ' + AI1Cards.length;
    document.getElementById('playerBottomCardTotal').innerHTML = 'Card Total: ' + playerCards.length;
}

// Update the Cards in <span> for the player (bottom)
function updateHandCards() {    
    const playerContainer = document.getElementById('playerCards')
    for (let i = 0; i < playerCards.length; i++) {
        const elementImg = document.createElement('img')
        elementImg.src = cardImg[playerCards[i]]
        elementImg.setAttribute('onclick' , 'playerPlayCard(' + i + ')')
        elementImg.setAttribute('id', i)

        playerContainer.appendChild(elementImg)
    }
    document.getElementById('playerBottomCardTotal').innerHTML = 'Card Total: ' + playerCards.length;
}

// Update the Cards in <span> for the AI (top)
function updateAIHandCards() {
    const playerContainer = document.getElementById('AI1Cards')
    if(playerCount === 2) {
        for (let i = 0; i < AI1Cards.length; i++) {
            const elementImg = document.createElement('img')
            elementImg.src = cardImg['Back']
            elementImg.setAttribute('id', i)
    
            playerContainer.appendChild(elementImg)
        }
        document.getElementById('aiTopCardTotal').innerHTML = 'Card Total: ' + AI1Cards.length;
    }
}

// Disable the player from clicking on cards and making plans
function disablePlayer() {
    console.log('\n\n----- AI Turn -----')
    console.log('Current Player Index: ' + currentPlayerIndex + '\n')
    const containerDraw = document.getElementById('DrawPile')
    const container = document.getElementById('playerCards');
    container.style.pointerEvents = 'none'
    containerDraw.style.pointerEvents = 'none'
    container.style.cursor = 'default'
    containerDraw.cursor = 'default'

    setTimeout(AIMove, 2500) // Allow the AI to move in 2500ms
}

// Enable the player to click on cards and make plays
function enablePlayer() {
    console.log('\n\n----- Player Turn -----')
    console.log('Current Player Index: ' + currentPlayerIndex + '\n')
    const containerDraw = document.getElementById('DrawPile')
    const container = document.getElementById('playerCards');
    container.style.pointerEvents = 'auto'
    containerDraw.style.pointerEvents = 'auto'
    container.style.cursor = 'pointer'
    containerDraw.style.cursor = 'pointer'
}

// Show the top card on the Discard Pile
function showTopCard() {
    document.getElementById('DiscardPile').src = cardImg[discardPile[0]]
}

// -------------------------------------------------------------------------------------------
// --------------------------------  AI Card Functions  --------------------------------
// Parses a Card Type and number ('Red') and ('2') or ('+4')
function parseElement(element) {
    const parts = element.split(' ');
    return {
        color: parts[0],
        number: parseInt(parts[1], 10)
    };
}

// Plays the card with index from the AI's Hand
function playCard(index) {
    console.log('Card played:', AI1Cards[index]);
    discardPile.unshift(AI1Cards[index]);
    AI1Cards.splice(index, 1);
    
    removeCardsFromContainer('AI1Cards')
    showTopCard()
    updateAIHandCards()
    updateGameState()
}


// Make AI pick a card from the Draw Pile
function drawCardFromDrawPile() {
    console.log('Drawing card from draw pile...');
    AI1Cards.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);
    cardsPickedup++
    
    removeCardsFromContainer('AI1Cards')
    showTopCard()
    updateAIHandCards()
    updateGameState()
}
// -------------------------------------------------------------------------------------------
// -----------------------------------  AI Brain To Play  ------------------------------------
function AIMove() {
    // Parse the discard pile's top card
    const target = parseElement(discardPile[0]);

    // Priority 1: Matching Color (Normal Cards)
    const matchColorIndex = AI1Cards.findIndex(card => 
        parseElement(card).color === target.color
    );
    if (matchColorIndex !== -1) {
        playCard(matchColorIndex)
        return;
    }

    // Priority 2: Matching Number (Changes Color)
    const matchNumberIndex = AI1Cards.findIndex(card => 
        parseElement(card).number === target.number
    );
    if (matchNumberIndex !== -1) {
        playCard(matchNumberIndex);
        return;
    }
     //Priority 3: Draw from Draw Pile
    drawCardFromDrawPile();
}
// -------------------------------------------------------------------------------------------
// ---------------------------------  Players turn to play  ----------------------------------
function playerPlayCard(cardIndex) {
    console.log("Player clicked card: ", playerCards[cardIndex]);

    // Parse the discard pile's top card and the player's selected card
    const target = parseElement(discardPile[0]);
    const selectedCard = parseElement(playerCards[cardIndex]);

    // Check if the selected card matches the color or number of the target card
    if (selectedCard.color === target.color || selectedCard.number === target.number) {
        // If there's a match, play the card
        console.log('Card played');
        discardPile.unshift(playerCards[cardIndex]);
        playerCards.splice(cardIndex, 1);
        showTopCard();
        removeCardsFromContainer('playerCards');
        updateHandCards();
        console.log("Player card count: ", playerCards.length);
        updateGameState();
    } else {
        // If there's no match, handle accordingly (e.g., show an error message)
        console.log('Cannot play this card');
    }
}
// Player Chose to pick card from draw pile
function drawCard() {
    console.log('Player Picking card out of draw pile...')
    playerCards.push(shuffledDeck[0])
    console.log(playerCards)
    shuffledDeck.splice(0, 1)
    removeCardsFromContainer('playerCards')
    updateHandCards()
    cardsPickedup++

    updateGameState()
}
// --------------------------------------------------------------------------------------------
// Setting player count
function setPlayerTwo() {
    playerCount = 2;
    console.log('\nSet Uno Player Count = '+ playerCount)
    document.getElementById('PlayersTwo').disabled = true;
    document.getElementById('PlayersTwo').setAttribute('class', 'playerCount, enabled, active');
}
// Start Game Function for HTML button
function startGame() {
    if (playerCount < 1) {
        console.log('\nGame Start Failed!')
        console.log('Game cannot start with: '+ playerCount + ' players')
    }
    else {
        console.log('\nGame Start Success!')
        document.getElementById('preGame').style = 'display: none;'
        document.getElementById('UnoGameBoard').style= 'display: block;'
        console.log('Game starting with: '+ playerCount + ' players')
        dealCards()
    }
}
// Updating Game State (What player's turn is it)
function updateGameState() {
    // Announce Uno or Winner for the player
    if (playerCards.length === 1) {
        document.getElementById('Player_Name').innerHTML = "You (Uno!)";
    } else if (playerCards.length === 0) {
        document.getElementById('Player_Name').innerHTML = "You (Winner!)";
        document.getElementById('NewGame').setAttribute('style', 'visibility: visible;')
        return;
    } else {
        document.getElementById('Player_Name').innerHTML = "You";
    }

    // Announce Uno or Winner for the AI
    if (AI1Cards.length === 1) {
        document.getElementById('AI_Name').innerHTML = "AI (Uno!)";
    } else if (AI1Cards.length === 0) {
        document.getElementById('AI_Name').innerHTML = "AI (Winner!)";
        document.getElementById('NewGame').setAttribute('style', 'visibility: visible;')
        return;
    } else {
        document.getElementById('AI_Name').innerHTML = "AI";
    }

    // Switch turns
    currentPlayerIndex = (currentPlayerIndex === 0) ? 1 : 0;
    if (currentPlayerIndex === 0) {
        enablePlayer();
        checkDrawPileSize()
        console.log('Cards drew: '+ cardsPickedup)
    } else {
        disablePlayer();
        checkDrawPileSize()
        console.log('Cards drew: '+ cardsPickedup)
    }
}

// Button commands to reset game after the game is over
function resetGame() {
    document.getElementById('preGame').style = 'display: block;'
    document.getElementById('UnoGameBoard').style= 'display: none;'
    document.getElementById('NewGame').setAttribute('style', 'visibility: hidden;')
    document.getElementById('PlayersTwo').disabled = false;
    document.getElementById('PlayersTwo').setAttribute('class', 'playerCount, enabled,');
    location.reload();
}

// If the draw pile is empty then shuffle the discard pile and replace
function shuffleDiscardDeck(array) {
    console.log('\n\n--- Shuffling Deck ---');
    let shuffled = [];
    while (array.length > 0) {
        let currentCard = Math.floor(Math.random() * array.length); // Adjust to the current array length
        shuffled.push(array[currentCard]);
        array.splice(currentCard, 1);
    }
    console.log('Shuffled Deck:', shuffled.join('\n'));
    console.log('Shuffled Deck Size:', shuffled.length);
    return shuffled; // Return the shuffled array
}

// Checking to make sure the draw pile is not 0
function checkDrawPileSize() {
    if (shuffledDeck.length === 0) {
        let cardsToShuffle = discardPile.slice(1); // Exclude the top card
        shuffledDeck = shuffleDiscardDeck(cardsToShuffle); // Refill drawPile with shuffled cards
        discardPile = [discardPile[0]]; // Keep only the top card in the discard pile
    }
}
