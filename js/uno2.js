console.clear()
console.log('Uno Game Loaded\n')

var playerCount = 0;
var players = ['player', 'ai']
var currentPlayerIndex = 0;
var direcection = 1; // 1 = clockwise && -1 = counter clockwise

var playerCards = []
var AI1Cards = []

var deckSize = 107;
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
    11: 'Red Skip',
    12: 'Red Reverse',
    13: 'Red +2',
    14: 'Wild',
    15: 'Yellow 0',
    16: 'Yellow 1',
    17: 'Yellow 2',
    18: 'Yellow 3',
    19: 'Yellow 4',
    20: 'Yellow 5',
    21: 'Yellow 6',
    22: 'Yellow 7',
    23: 'Yellow 8',
    24: 'Yellow 9',
    25: 'Yellow Skip',
    26: 'Yellow Reverse',
    27: 'Yellow +2',
    28: 'Wild',
    29: 'Green 0',
    30: 'Green 1',
    31: 'Green 2',
    32: 'Green 3',
    33: 'Green 4',
    34: 'Green 5',
    35: 'Green 6',
    36: 'Green 7',
    37: 'Green 8',
    38: 'Green 9',
    39: 'Green Skip',
    40: 'Green Reverse',
    41: 'Green +2',
    42: 'Wild',
    43: 'Blue 0',
    44: 'Blue 1',
    45: 'Blue 2',
    46: 'Blue 3',
    47: 'Blue 4',
    48: 'Blue 5',
    49: 'Blue 6',
    50: 'Blue 7',
    51: 'Blue 8',
    52: 'Blue 9',
    53: 'Blue Skip',
    54: 'Blue Reverse',
    55: 'Blue +2',
    56: 'Wild',
    57: 'Red 1',
    58: 'Red 2',
    59: 'Red 3',
    60: 'Red 4',
    61: 'Red 5',
    62: 'Red 6',
    63: 'Red 7',
    64: 'Red 8',
    65: 'Red 9',
    66: 'Red Skip',
    67: 'Red Reverse',
    68: 'Red +2',
    69: 'Wild +4',
    70: 'Yellow 1',
    71: 'Yellow 2',
    72: 'Yellow 3',
    73: 'Yellow 4',
    74: 'Yellow 5',
    75: 'Yellow 6',
    76: 'Yellow 7',
    77: 'Yellow 8',
    78: 'Yellow 9',
    79: 'Yellow Skip',
    80: 'Yellow Reverse',
    81: 'Yellow +2',
    82: 'Wild +4',
    83: 'Green 1',
    84: 'Green 2',
    85: 'Green 3',
    86: 'Green 4',
    87: 'Green 5',
    88: 'Green 6',
    89: 'Green 7',
    90: 'Green 8',
    91: 'Green 9',
    92: 'Green Skip',
    93: 'Green Reverse',
    94: 'Green +2',
    95: 'Wild +4',
    96: 'Blue 1',
    97: 'Blue 2',
    98: 'Blue 3',
    99: 'Blue 4',
    100: 'Blue 5',
    101: 'Blue 6',
    102: 'Blue 7',
    103: 'Blue 8',
    104: 'Blue 9',
    105: 'Blue Skip',
    106: 'Blue Reverse',
    107: 'Blue +2',
    108: 'Wild +4'
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
    'Red Skip': 'uno_cards/RedSkip.png',
    'Red Reverse': 'uno_cards/RedReverse.png',
    'Red +2': 'uno_cards/RedPlus2.png',
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
    'Yellow Skip': 'uno_cards/YellowSkip.png',
    'Yellow Reverse': 'uno_cards/YellowReverse.png',
    'Yellow +2': 'uno_cards/YellowPlus2.png',
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
    'Green Skip': 'uno_cards/GreenSkip.png',
    'Green Reverse': 'uno_cards/GreenReverse.png',
    'Green +2': 'uno_cards/GreenPlus2.png',
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
    'Blue Skip': 'uno_cards/BlueSkip.png',
    'Blue Reverse': 'uno_cards/BlueReverse.png',
    'Blue +2': 'uno_cards/BluePlus2.png',
    'Wild': 'uno_cards/Wild.png',
    'Wild +4': 'uno_cards/WildPlus4.png',
    'Back': 'uno_cards/uno_back.png'
}

// Append fullDeck values into an Array of the entire deck
for (const value of Object.values(fullDeck)) {
    fullDeckArray.push(value)
}

// Function to Shuffle Deck on game start
function shuffleDeck() {
    console.log('\n\n--- Shuffling Deck ---')
    for(let i = 0; i < 108; i++) {
        let currentCard = Math.floor(Math.random() * deckSize) + 0;
        shuffledDeck.push(fullDeckArray[currentCard])
        fullDeckArray.splice(currentCard, 1)
        deckSize--
    }
    console.log('Shuffled Deck:')
    console.log(shuffledDeck.join('\n'))
    console.log('Shuffled Deck Size: ' + shuffledDeck.length)
    deckSize = 107          // Reset the deck size after subtracting it all
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

// ------------------------------------  Card Conditions  ------------------------------------
// Draw 4 card was played
function drawFour(player, playerName) {
    console.log('Plus four to player: ' + playerName)

    plusFourLoops(4)
    function plusFourLoops(i) {
        setTimeout(function() {
            player.push(shuffledDeck[0])
            shuffledDeck.splice(0, 1)
            removeCardsFromContainer('AI1Cards')
            updateAIHandCards()
            removeCardsFromContainer('playerCards')
            updateHandCards()

            if (--i) plusFourLoops(i);
        }, 150)
    }
    skipPlayer(playerName)
}

// Draw 2 card was played
function drawTwo(player, playerName) {
    console.log('Plus two to player: '+ playerName)
    plusTwoLoops(2)
    function plusTwoLoops(i) {
        setTimeout(function() {
            player.push(shuffledDeck[0])
            shuffledDeck.splice(0, 1)
            removeCardsFromContainer('AI1Cards')
            updateAIHandCards()
            removeCardsFromContainer('playerCards')
            updateHandCards()

            if (--i) plusTwoLoops(i);
        }, 150)
    }
    skipPlayer(playerName)
}

// Skip card was played
function skipPlayer(playerName) {
    console.log('Skipping Player: ' + playerName)

    if (playerName === 'AI1') {
        enablePlayer()
        return;
    }
    else if (playerName === 'player') {
        disablePlayer()
    }
}

// Reverse Card was played
function reverseGame() {
    console.log('Reverse')
}

// -------------------------------------------------------------------------------------------
// --------------------------------  Other AI Card Functions  --------------------------------
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
    handleCardEffects(discardPile[0]);
    
    removeCardsFromContainer('AI1Cards')
    showTopCard()
    updateAIHandCards()
    updateGameState()
}

// Check and see if the card is 'Special'; +2, Reverse, Skip... Returns, True/False
function isSpecialCard(card) {
    handleCardEffects(card)
    return card.includes('Reverse') || card.includes('+2') || card.includes('Skip');
}

// Check the card for their 'special' type and do their effect.
function handleCardEffects(AICard) {
    // Wild Draw Four
    if (AICard === 'Wild +4') {
        drawFour(playerCards, 'Player')
        return;
    }
    // Draw Two
    if (AICard.includes('+2')) {
        drawTwo(playerCards, 'Player')
        return;
    }
    // Wild
    if (AICard.includes('Wild') && !AICard.includes('+4')) {
        console.log('-- Wild Card Played --')
        return;
    }
    // Reverse 
    if (AICard.includes('Reverse')) {
        console.log('-- Reverse Card Played --')
        reverseGame()
        return;
    }
    // Skip
    if (AICard.includes('Skip')) {
        console.log('-- Skip Card Played --')
        skipPlayer('player')
        return;
    }
    console.log('No special Card Effects..')
} 

// Make AI pick a card from the Draw Pile
function drawCardFromDrawPile() {
    console.log('Drawing card from draw pile...');
    AI1Cards.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);
    
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
        parseElement(card).color === target.color &&
        !isSpecialCard(card)
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

    // Priority 3: Matching Color (Special Cards like Reverse, +2, Skip)
    const matchSpecialColorIndex = AI1Cards.findIndex(card => 
        parseElement(card).color === target.color && 
        isSpecialCard(card)
    );
    if (matchSpecialColorIndex !== -1) {
        playCard(matchSpecialColorIndex);
        return;
    }
    // Priority 4: Wild Card
    const wildCardIndex = AI1Cards.findIndex(card => card.includes('Wild') && !card.includes('+4'));
    if (wildCardIndex !== -1) {
        playCard(wildCardIndex);
        return;
    }
    // Priority 5: Wild +4 Card
    const wildPlusFourIndex = AI1Cards.findIndex(card => card.includes('Wild +4'));
    if (wildPlusFourIndex !== -1) {
        playCard(wildPlusFourIndex);
        return;
    }
    // Priority 6: Draw from Draw Pile
    drawCardFromDrawPile();
}
// -------------------------------------------------------------------------------------------
// ---------------------------------  Players turn to play  ----------------------------------
function playerPlayCard(cardIndex) {
    console.log("Player clicked card: ", playerCards[cardIndex]);


    discardPile.unshift(playerCards[cardIndex])
    let cardPlayed = playerCards[cardIndex]
    playerCards.splice(cardIndex, 1)
    showTopCard()
    removeCardsFromContainer('playerCards')
    updateHandCards()
    console.log("Player card count: ", playerCards.length)


    // Checking for special card played

    if (cardPlayed === 'Wild +4') { // Played a +4
        drawFour(AI1Cards, 'AI1')
        return;
    }
    else if (cardPlayed.includes('+2')) { // Played a +2
        drawTwo(AI1Cards, 'AI1')
        return;
    }
    else if (cardPlayed.includes('Reverse')) { // Played a Reverse
        reverseGame()
    }
    else if (cardPlayed.includes('Skip')) { // Played a Skip
        skipPlayer('AI1')
        return;
    }

    updateGameState()
}
// Player Chose to pick card from draw pile
function drawCard() {
    console.log('Player Picking card out of draw pile...')
    playerCards.push(shuffledDeck[0])
    console.log(playerCards)
    shuffledDeck.splice(0, 1)
    removeCardsFromContainer('playerCards')
    updateHandCards()

    updateGameState()
}
// --------------------------------------------------------------------------------------------
// Setting player count
function setPlayerTwo() {
    playerCount = 2;
    console.log('\nSet Uno Player Count = '+ playerCount)
    document.getElementById('PlayersTwo').disabled = true;
    document.getElementById('PlayersTwo').setAttribute('class', 'playerCount, enabled, active');

    document.getElementById('PlayersThree').disabled = false;
    document.getElementById('PlayersThree').setAttribute('class', 'playerCount, enabled');

    document.getElementById('PlayersFour').disabled = false;
    document.getElementById('PlayersFour').setAttribute('class', 'playerCount, enabled');
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
    // Make game Player's Move
    if(currentPlayerIndex === 1) { // Current player is Index 1
        currentPlayerIndex--
        enablePlayer()
        return;
    }
    // Make game AI's Move
    else if(currentPlayerIndex === 0) { // Current player is Index 0
        currentPlayerIndex++
        disablePlayer()
        return;
    }
}