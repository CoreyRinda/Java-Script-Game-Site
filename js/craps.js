console.clear()
console.log('Craps Game Loaded\n')

var rolls = []
var gameIteration = 0
var playerPoint = 0
var rollTotal = 0
var winTotal = 0
var lossTotal = 0
var totalGames = 0

function diceRoll() {

    console.log('------  Dice Rolled! (' + new Date() + ')  ------');
    disableRollButton();
    
    let dice_display1 = document.getElementById('dice1');
    let dice_display2 = document.getElementById('dice2');

    let dice1 = 'dice_img/dice1.png'
    let dice2 = 'dice_img/dice2.png'
    let dice3 = 'dice_img/dice3.png'
    let dice4 = 'dice_img/dice4.png'
    let dice5 = 'dice_img/dice5.png'
    let dice6 = 'dice_img/dice6.png'

    rollLoop(10)
    function rollLoop(i) {
        setTimeout(function() {
            let rollOne = Math.floor(Math.random() * 6) + 1;
            let rollTwo = Math.floor(Math.random() * 6) + 1;
            rollTotal = rollOne + rollTwo;

            if (rollOne === 1) {
                dice_display1.src = dice1;
                if (i === 1) console.log('Dice Display 1 = Dice1');
            }
            else if (rollOne === 2) {
                dice_display1.src = dice2;
                if (i === 1) console.log('Dice Display 1 = Dice2');
            }
            else if (rollOne === 3) {
                dice_display1.src = dice3;
                if (i === 1) console.log('Dice Display 1 = Dice3');
            }
            else if (rollOne === 4) {
                dice_display1.src = dice4;
                if (i === 1) console.log('Dice Display 1 = Dice4');
            }
            else if (rollOne === 5) {
                dice_display1.src = dice5;
                if (i === 1) console.log('Dice Display 1 = Dice5');
            }
            else if (rollOne === 6) {
                dice_display1.src = dice6;
                if (i === 1) console.log('Dice Display 1 = Dice6');
            }
    
    
            if (rollTwo === 1) {
                dice_display2.src = dice1;
                if (i === 1) console.log('Dice Display 2 = Dice1\n');
            }
            else if (rollTwo === 2) {
                dice_display2.src = dice2;
                if (i === 1) console.log('Dice Display 2 = Dice2\n');
            }
            else if (rollTwo === 3) {
                dice_display2.src = dice3;
                if (i === 1) console.log('Dice Display 2 = Dice3\n');
            }
            else if (rollTwo === 4) {
                dice_display2.src = dice4;
                if (i === 1) console.log('Dice Display 2 = Dice4\n');
            }
            else if (rollTwo === 5) {
                dice_display2.src = dice5;
                if (i === 1) console.log('Dice Display 2 = Dice5\n');
            }
            else if (rollTwo === 6) {
                dice_display2.src = dice6;
                if (i === 1) console.log('Dice Display 2 = Dice6\n');
            }

            rolls = [rollOne, rollTwo];
            document.getElementById('rollTotal').innerHTML = rollTotal;

            if (--i) rollLoop(i);
        }, 100)
    }
    


    return rolls;
}

function disableRollButton() {
    console.log('+-- Disabled Roll Button --+\n')
    document.getElementById('RollDiceButton').disabled = true;
    document.getElementById('RollDiceButton').setAttribute('class', 'disabled')
    setTimeout(function() {
        document.getElementById('RollDiceButton').disabled = false;
        document.getElementById('RollDiceButton').setAttribute('class', 'enabled')
        console.log('+-- Enabled Roll Button --+');
        ;}, 1100)
}

function gameStart() {
    gameIteration = 1;
    document.getElementById('RollDiceButton').innerHTML = 'Roll'
    rolls = [diceRoll()];
    setTimeout(function() {
        console.log('\nVariable Rolls: ' + rollTotal);
        playerPoint = rollTotal;

        if (playerPoint === 2 || playerPoint === 3 || playerPoint === 12) {
            console.log('\nGame loss on Inital Roll, lose condition accepted.\n\n---------------------------------------------------------------\n')
            gameLoss()
        }
        else if (playerPoint === 7 || playerPoint == 11) {
            console.log('\nGame win on Inital Roll, win condition accepted.\n\n---------------------------------------------------------------\n')
            gameWin()
        }
        else {
            console.log('Player Point Value: ' + playerPoint)
            document.getElementById('point').innerHTML = 'Point: ' + playerPoint;
            document.getElementById('RollDiceButton').setAttribute('onclick', 'inGame()');
            document.getElementById('rollTotal').innerHTML = playerPoint;
        }
    }, 1100)
}

function inGame() {
    if (gameIteration === 1) console.log('\nWe are now in game! Game Iteration: ' + gameIteration + '\n');
    else console.log('Game Iteration: '+ gameIteration);
    rolls = [diceRoll()];
    setTimeout(function() {
        console.log('\nVariable Rolls: ' + rolls[0] + ', ' + rolls[1]);
        console.log('Roll Total:' + rollTotal)
        document.getElementById('rollTotal').innerHTML = rollTotal;
        
        if (rollTotal === playerPoint) {
            console.log('\nGame win on hitting the point, win condition accepted.\n\n---------------------------------------------------------------\n')
            gameWin()
        }
        else if (rollTotal === 7) {
            console.log('\nGame loss on 7 out, lose condition accepted.\n\n---------------------------------------------------------------\n')
            gameLoss()
        }
        else {
            console.log('\nRoll did not win or lose the round.')
        }

        gameIteration++;
    }, 1100)
}

function gameLoss() {
    document.getElementById('RollDiceButton').setAttribute('onclick', 'gameReset()');
    document.getElementById('GameCondition').innerHTML = 'Womp Womp, You Lose!';
    document.getElementById('GameCondition').style = 'visibility: visible; color: red;';
    document.getElementById('RollDiceButton').innerHTML = 'New Game'
    lossTotal++
    totalGames++
    document.getElementById('losstotal').innerHTML = 'Losses:'+ lossTotal;
    document.getElementById('winrate').innerHTML = 'Win Rate: '+ ((winTotal / totalGames) * 100).toFixed(2) + '%';
}

function gameWin() {
    document.getElementById('RollDiceButton').setAttribute('onclick', 'gameReset()');
    document.getElementById('GameCondition').innerHTML = 'Hooray, You Win!';
    document.getElementById('GameCondition').style = 'visibility: visible; color: lime;';
    document.getElementById('RollDiceButton').innerHTML = 'New Game'
    winTotal++
    totalGames++
    document.getElementById('wintotal').innerHTML = 'Wins:'+ winTotal;
    document.getElementById('winrate').innerHTML = 'Win Rate: '+ ((winTotal / totalGames) * 100).toFixed(2) + '%';
}

function gameReset() {
    console.log('\n+---- Game Reset ----+\n\n')
    document.getElementById('RollDiceButton').setAttribute('onclick', 'gameStart()');
    document.getElementById('GameCondition').style = 'visibility: hidden; color: black;';
    document.getElementById('GameCondition').innerHTML = 'You Win/Lose';
    document.getElementById('point').innerHTML = 'Point: Roll for Point';
    document.getElementById('RollDiceButton').innerHTML = 'Initial Roll';
    document.getElementById('dice1').src = 'dice_img/dice1.png';
    document.getElementById('dice2').src = 'dice_img/dice1.png';
    document.getElementById('rollTotal').innerHTML = '2';
}