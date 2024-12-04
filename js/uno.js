console.clear()
console.log('Uno Game Loaded\n')

var playerCount = 0;
var players = []
var currentPlayerIndex = 1;
var direcection = 1; // 1 = clockwise and -1 = counter clockwise

var playerCards = []
var AI1Cards = []
var AI2Cards = []
var AI3Cards = []

var deckSize = 107;
var discardPile = []
var drawPile = []
var fullDeckArray = []
var shuffledDeck = []
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

for (const value of Object.values(fullDeck)) {
    fullDeckArray.push(value)
}

console.log('GameDeck: ')
for (const value of Object.values(fullDeck)){
    console.log(value)
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

function dealCards() {
    shuffleDeck()
    console.log('\n\nDealing Cards to ' + playerCount + ' players.')

    for(let i=1;i<8; i++) {

        if (playerCount === 2) {
            AI1Cards.push(shuffledDeck[0])
            console.log('\nAI 1 Received Card ' + AI1Cards.length + ': '+ shuffledDeck[0])
            shuffledDeck.splice(0, 1)
            player = ['player', 'ai1']
            deckSize--
            
            playerCards.push(shuffledDeck[0])
            console.log('Player 1 Received Card ' + playerCards.length + ': '+ shuffledDeck[0])
            shuffledDeck.splice(0, 1)
            deckSize--
        }
        else if (playerCount === 3) {
            AI1Cards.push(shuffledDeck[0])
            console.log('\nAI 1 Received Card ' + AI1Cards.length + ': '+ shuffledDeck[0])
            shuffledDeck.splice(0, 1)
            player = ['player', 'ai1', 'ai2']
            deckSize--

            AI2Cards.push(shuffledDeck[0])
            console.log('AI 2 Received Card ' + AI3Cards.length+ ': '+ shuffledDeck[0])
            shuffledDeck.splice(0, 1)
            deckSize--

            playerCards.push(shuffledDeck[0])
            console.log('Player 1 Received Card ' + playerCards.length + ': ' + shuffledDeck[0])
            shuffledDeck.splice(0, 1)
            deckSize--

        }
        else if (playerCount === 4) {
            AI1Cards.push(shuffledDeck[0])
            console.log('\nAI 1 Received Card ' + AI1Cards.length + ': '+ shuffledDeck[0])
            shuffledDeck.splice(0, 1)
            player = ['player', 'ai1', 'ai2', 'ai3']
            deckSize--

            AI2Cards.push(shuffledDeck[0])
            console.log('AI 2 Received Card ' + AI2Cards.length + ': '+ shuffledDeck[0])
            shuffledDeck.splice(0, 1)
            deckSize--

            AI3Cards.push(shuffledDeck[0])
            console.log('AI 3 Received Card ' + AI3Cards.length + ': '+ shuffledDeck[0])
            shuffledDeck.splice(0, 1)
            deckSize--

            playerCards.push(shuffledDeck[0])
            console.log('Player 1 Received Card ' + playerCards.length + ': ' + shuffledDeck[0])
            shuffledDeck.splice(0, 1)
            deckSize--

        }
    }

    if (playerCount === 2) {
        console.log('\nAI 1\'s Starting Hand: ')
        console.log(AI1Cards.join(', '))
        console.log('Hand Size: '+ AI1Cards.length)
        console.log('\n\nPlayer 1\'s Starting Hand:')
        console.log(playerCards.join(', '))
        console.log('Hand Size: '+ playerCards.length)

        //document.getElementById('aiTop').innerHTML = 'Cards: ' + AI1Cards.join(', ');
        document.getElementById('aiTopCardTotal').innerHTML = 'Card Total: ' + AI1Cards.length;
        //document.getElementById('playerBottom').innerHTML = 'Cards: ' + playerCards.join(', ');
        document.getElementById('playerBottomCardTotal').innerHTML = 'Card Total: ' + playerCards.length;

    }
    else if (playerCount === 3) {
        console.log('\nAI 1\'s Starting Hand: ')
        console.log(AI1Cards.join(', '))
        console.log('Hand Size: '+ AI1Cards.length)
        console.log('\nAI 2\'s Starting Hand: ')
        console.log(AI2Cards.join(', '))
        console.log('Hand Size: '+ AI2Cards.length)
        console.log('\n\nPlayer 1\'s Starting Hand: ')
        console.log(playerCards.join(', '))
        console.log('Hand Size: '+ playerCards.length)
    }
    else if (playerCount === 4) {
        console.log('\nAI 1\'s Starting Hand: ')
        console.log(AI1Cards.join(', '))
        console.log('Hand Size: '+ AI1Cards.length)
        console.log('\nAI 2\'s Starting Hand: ')
        console.log(AI2Cards.join(', '))
        console.log('Hand Size: '+ AI2Cards.length)
        console.log('\nAI 3\'s Starting Hand: ')
        console.log(AI3Cards.join(', '))
        console.log('Hand Size: '+ AI3Cards.length)
        console.log('\n\nPlayer 1\'s Starting Hand: ')
        console.log(playerCards.join(', '))
        console.log('Hand Size: '+ playerCards.length)
    }

    flipDrawTopCard()

    updateHandCards()

    updateAIHandCards()

    //setting random timer between 1000ms and 5000ms for the bot to make their play off first hand
    const containerDraw = document.getElementById('DrawPile')
    const container = document.getElementById('playerCards');
    container.style.pointerEvents = 'none'
    containerDraw.style.pointerEvents = 'none'
    container.style.cursor = 'pointer'
    containerDraw.cursor = 'pointer'
    setTimeout(AIMove, 2500);
}

function flipDrawTopCard() {
    discardPile.push(shuffledDeck[0])
    shuffledDeck.splice(0, 1)
    showTopCard()

    console.log('\nTop Card on Discard Pile:  ' + discardPile[0])
    console.log('Number of Cards in Discard Pile: ' + discardPile.length)
    console.log('Number of Cards in Draw Pile: ' + shuffledDeck.length)
}

function showTopCard() {
    document.getElementById('DiscardPile').src = cardImg[discardPile[0]]
}

function removeCardsFromContainer(containerID) {
    console.log('\nRemoving Cards from container: ' + containerID)
    const container = document.getElementById(containerID)
    container.innerHTML = '';
    document.getElementById('aiTopCardTotal').innerHTML = 'Card Total: ' + AI1Cards.length;
    document.getElementById('playerBottomCardTotal').innerHTML = 'Card Total: ' + playerCards.length;
}

function updateHandCards() {
    
    const playerContainer = document.getElementById('playerCards')
    //console.log('\n---- Updating Player\'s Card Display ----\n')
    for (let i = 0; i < playerCards.length; i++) {
        const elementImg = document.createElement('img')
        elementImg.src = cardImg[playerCards[i]]
        elementImg.setAttribute('onclick' , 'playerPlayCard(' + i + ')')
        elementImg.setAttribute('id', i)

        //console.log(cardImg[playerCards[i]])
        //console.log('i= ' + i + '\n')

        playerContainer.appendChild(elementImg)
    }
    document.getElementById('playerBottomCardTotal').innerHTML = 'Card Total: ' + playerCards.length;
}

function updateAIHandCards() {
    const playerContainer = document.getElementById('AI1Cards')
    //console.log('\n---- Updating AI 1\'s Card Display ----\n')

    if(playerCount === 2) {
        for (let i = 0; i < AI1Cards.length; i++) {
            const elementImg = document.createElement('img')
            elementImg.src = cardImg['Back']
            elementImg.setAttribute('id', i)
    
            //console.log(cardImg['Back'])
            //console.log('i= ' + i + '\n')
    
            playerContainer.appendChild(elementImg)
        }
        document.getElementById('aiTopCardTotal').innerHTML = 'Card Total: ' + AI1Cards.length;
    }
}

function getNextPlayerIndex() {
    // Update the index for the next player
    currentPlayerIndex = (currentPlayerIndex + direction + players.length) % players.length;
}

function reverseDirection() {
    // Reverse the play direction
    direction *= -1;
}

function skipNextPlayer() {
    // Skip the next player
    getNextPlayerIndex();
    getNextPlayerIndex();
}

function getCurrentPlayer() {
    return players[currentPlayerIndex];
}

function drawFour(player) {
    console.log('Plus four to player')

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
    console.log(player)
}

function drawTwo(player) {
    console.log('Plus two to player: ' + player)
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
    console.log(player)
}

function skipPlayer(player) {
    console.log('Skipping Player: ' + player)

    if (player === 'AI1') {

    }
    else if (player === 'player') {
        const containerDraw = document.getElementById('DrawPile')
        const container = document.getElementById('playerCards');
        container.style.pointerEvents = 'none'
        containerDraw.style.pointerEvents = 'none'
        container.style.cursor = 'pointer'
        containerDraw.cursor = 'pointer'

        setTimeout(AIMove, 2500)
    }

}

function reverseGame() {
    console.log('Reverse')

}

// ------------------------------------  AI BRAIN TO PLAY  ------------------------------------

function AIMove() {

    console.log('\n\n------------ AI Turn \n------------')

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

// ------------------------------------------------------------------------------------
function parseElement(element) {
    const parts = element.split(' ');
    return {
        color: parts[0],
        number: parseInt(parts[1], 10)
    };
}

function playCard(index) {
    console.log('Card played:', AI1Cards[index]);
    discardPile.unshift(AI1Cards[index]);
    AI1Cards.splice(index, 1);
    handleCardEffects(discardPile[0]);
    
    removeCardsFromContainer('AI1Cards')
    showTopCard()
    updateAIHandCards()
    playerMayPlay()
}

function isSpecialCard(card) {
    handleCardEffects(card)
    return card.includes('Reverse') || card.includes('+2') || card.includes('Skip');
}

function handleCardEffects(AICard) {
    // Wild Draw Four
    console.log(AICard)
    if (AICard === 'Wild +4') {
        drawFour(playerCards)
    }
    // Draw Two
    if (AICard.includes('+2')) {
        drawTwo(playerCards)
    }
    // Wild
    if (AICard.includes('Wild') && !AICard.includes('+4')) {
        console.log('-- Wild Card Played --')
    }
    // Reverse 
    if (AICard.includes('Reverse')) {
        console.log('-- Reverse Card Played --')
        reverseGame()
    }
    // Skip
    if (AICard.includes('Skip')) {
        console.log('-- Skip Card Played --')
        skipPlayer('player')
    }
}   

function drawCardFromDrawPile() {
    console.log('Drawing card from draw pile...');
    AI1Cards.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);
    
    removeCardsFromContainer('AI1Cards')
    showTopCard()
    updateAIHandCards()
    playerMayPlay()
}

function playerMayPlay() {
    const containerDraw = document.getElementById('DrawPile')
    const container = document.getElementById('playerCards');
    container.style.pointerEvents = 'auto'
    containerDraw.style.pointerEvents = 'auto'
    container.style.cursor = 'default'
    containerDraw.cursor = 'default'
}



/* function AIMove() {

    let played = false;

    function parseElement(element) {
        const parts = element.split(' ');
        return {
            color: parts[0],
            number: parseInt(parts[1], 10)
        };
    }
    const target = parseElement(discardPile[0]);

    // Finding if a card matches color wise or number wise
    const containsMatchColor = AI1Cards.some(item => {
        const parsedItem = parseElement(item);
        return parsedItem.color === target.color;
    });
    const containsMatchNumber = AI1Cards.some(item => {
        const parsedItem = parseElement(item);
        return parsedItem.number === target.number;
    });
    // Finding Index Values from above
    const matchColorIndex = AI1Cards.findIndex(item => {
        const parsedItem = parseElement(item);
        return parsedItem.color === target.color;
    });
    const matchNumberIndex = AI1Cards.findIndex(item => {
        const parsedItem = parseElement(item);
        return parsedItem.number === target.number;
    });

    // Matching Color Only
    if (containsMatchColor === true && containsMatchNumber === false) { 
        console.log('Matching color played')
        discardPile.unshift(AI1Cards[matchColorIndex])
        AI1Cards.splice(matchColorIndex, 1)
        console.log(AI1Cards)
        showTopCard()
        played = true;

        removeCardsFromContainer('AI1Cards')
        updateAIHandCards()
    }
    // Matching Number Only
    else if(containsMatchNumber === true && containsMatchColor === false) {
        console.log('Matching number played')
        discardPile.unshift(AI1Cards[matchNumberIndex])
        AI1Cards.splice(matchColorIndex, 1)
        console.log(AI1Cards)
        showTopCard()
        played = true;

        removeCardsFromContainer('AI1Cards')
        updateAIHandCards()
    }
    // Matching Number and Color
    else if(containsMatchNumber === true && containsMatchColor === true) {
        console.log('Matching number and color played')
        discardPile.unshift(AI1Cards[matchColorIndex])
        AI1Cards.splice(matchColorIndex, 1)
        console.log(AI1Cards)
        showTopCard()
        played = true;

        removeCardsFromContainer('AI1Cards')
        updateAIHandCards()
    }
    // Play regular wild if no play above works
    else if (containsMatchNumber === false && containsMatchColor === false) {
        console.log('No other play, Wild played...')
        indexOfCard = AI1Cards.findIndex(element => element.includes('Wild'));
        discardPile.unshift(AI1Cards[indexOfCard])
        AI1Cards.splice(indexOfCard, 1)
        console.log(AI1Cards)
        showTopCard()
        played = true;

        removeCardsFromContainer('AI1Cards')
        updateAIHandCards()
    }

    // No other play, and has a Wild +4 in their hand.. Play Wild +4
    else if (containsMatchNumber === false && containsMatchColor === false && AI1Cards.some(element => element.includes('Wild +4')) === true ){
        console.log('No other play, Wild +4 played...')
        indexOfCard = AI1Cards.findIndex(element => element.includes('Wild +4'));
        discardPile.unshift(AI1Cards[indexOfCard])
        AI1Cards.splice(indexOfCard, 1)
        console.log(AI1Cards)
        showTopCard()
        played = true;

        removeCardsFromContainer('AI1Cards')
        updateAIHandCards()
    }
    else {
        console.log('AI possible play has no condition yet...')
        AI1Cards.push(shuffledDeck[0])
        console.log(AI1Cards)
        shuffledDeck.splice(0, 1)
        played = false;
        removeCardsFromContainer('AI1Cards')
        updateAIHandCards() 
    }

    if (played === true && discardPile[0].includes('Wild +4')) {
        drawFour(playerCards)
    }
    else if (played === true && discardPile[0].includes('+2')) {
        drawTwo(playerCards)
    }
    else if (played === true && discardPile[0].includes('Reverse')) {
        reverseGame()
    }
    else if (played === true && discardPile[0].includes('Skip')) {
        skipPlayer('player')
        setTimeout(AIMove, 2500)
    }

    const containerDraw = document.getElementById('DrawPile')
    const container = document.getElementById('playerCards');
    container.style.pointerEvents = 'auto'
    containerDraw.style.pointerEvents = 'auto'
    container.style.cursor = 'default'
    containerDraw.cursor = 'default'

} */

// ------------------------------------  PLAYER TO PLAY  ------------------------------------

function playerPlayCard(cardIndex) {
    console.log('\n\n------------ Player Turn \n------------')
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
        drawFour(AI1Cards)
    }
    else if (cardPlayed.includes('+2')) {
        drawTwo(AI1Cards)
    }
    else if (cardPlayed.includes('Reverse')) {
        reverseGame()
    }
    else if (cardPlayed.includes('Skip')) {
        skipPlayer('AI1')
    }


    if (cardPlayed.includes('Skip')) {
        console.log('Player Played Skip, they go again...')
    }
    else if (cardPlayed.includes('Skip') === false) {
        const containerDraw = document.getElementById('DrawPile')
        const container = document.getElementById('playerCards');
        container.style.pointerEvents = 'none'
        containerDraw.style.pointerEvents = 'none'
        container.style.cursor = 'pointer'
        containerDraw.cursor = 'pointer'

        setTimeout(AIMove, 2500);
    }

}

function drawCard() {
    console.log('Player Picking card out of draw pile...')
    playerCards.push(shuffledDeck[0])
    console.log(playerCards)
    shuffledDeck.splice(0, 1)
    removeCardsFromContainer('playerCards')
    updateHandCards()

    const containerDraw = document.getElementById('DrawPile')
    const container = document.getElementById('playerCards');
    container.style.pointerEvents = 'none'
    containerDraw.style.pointerEvents = 'none'
    container.style.cursor = 'pointer'
    containerDraw.cursor = 'pointer'

    setTimeout(AIMove, 2500);
}


// --------------------------------------------------------------------------------------------



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

function setPlayerThree() {
    playerCount = 3;
    console.log('\nSet Uno Player Count = '+ playerCount)
    document.getElementById('PlayersTwo').disabled = false;
    document.getElementById('PlayersTwo').setAttribute('class', 'playerCount, enabled');

    document.getElementById('PlayersThree').disabled = true;
    document.getElementById('PlayersThree').setAttribute('class', 'playerCount, enabled, active');

    document.getElementById('PlayersFour').disabled = false;
    document.getElementById('PlayersFour').setAttribute('class', 'playerCount, enabled');
}

function setPlayerFour() {
    playerCount = 4;
    console.log('\nSet Uno Player Count = '+ playerCount)
    document.getElementById('PlayersTwo').disabled = false;
    document.getElementById('PlayersTwo').setAttribute('class', 'playerCount, enabled');

    document.getElementById('PlayersThree').disabled = false;
    document.getElementById('PlayersThree').setAttribute('class', 'playerCount, enabled');

    document.getElementById('PlayersFour').disabled = true;
    document.getElementById('PlayersFour').setAttribute('class', 'playerCount, enabled, active');
}

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