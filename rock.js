let move, comp;
let move_str, comp_str;
let win = 0, loss = 0, tie = 0;

document.getElementById('rock').onclick = function() {
    move = 1;
    move_str = 'Rock';
    process();
}

document.getElementById('paper').onclick = function() {
    move = 2;
    move_str = 'Paper';
    process();
}

document.getElementById('scissor').onclick = function() {
    move = 3;
    move_str = 'Scissor';
    process();
}

document.getElementById('reset').onclick = function() {
    win = 0;
    loss = 0;
    tie = 0;
    history();
}


function process() {
    comp = getRandomNumber();
    if (move == comp) {
        console.log('tie');
        tie += 1;
    }
    else if ((move == 1 && comp == 3) || (move == 2 && comp == 1) || (move == 3 && comp == 2)) {
        console.log('won');
        win += 1;
    }
    else {
        console.log('lose');
        loss += 1;
    }
    log();
    history();
}

function getRandomNumber() {

    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) 
        comp_str = 'Rock';
    else if (num == 2)
        comp_str = 'Paper';
    else 
        comp_str = 'Scissor';
    return num;
}

function history() {
    document.getElementById('logs').textContent = `Wins: ${win}, Losses: ${loss}, Ties: ${tie}`;
}

function log() {
    document.getElementById('result').textContent = `You Pick: ${move_str} | Computer Pick: ${comp_str}`;
}


