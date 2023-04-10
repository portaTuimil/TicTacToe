
let buttons = document.querySelectorAll('.grid>button');
let turn = 0;
let list = ['','','',
            '','','',
            '','',''];

buttons.forEach(button=> button.addEventListener('click', ()=>{
    let divClass = button.getAttribute('class');
    let div = document.querySelector('.'+divClass)
    let number = divClass[4];

    //Display
    if (list[number]=== '') {
        let p = document.createElement('p')
        let simbol;
        if (turn % 2 == 0){
            simbol = 'X';
            p.setAttribute('style', 'color: #00204a;');
        }else{
            simbol = 'O';
            p.setAttribute('style', 'color: #ff9a3c; ');
        }

        p.innerText = simbol;
        turn++
        div.appendChild(p);

        //Value Storage:
        list.splice(number, 1, simbol);
        console.log(list)

        checkWins()
}}));

const winnerCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkWins(){
    for (let combination of winnerCombinations){

        if (list[combination[0]] === 'X' && list[combination[1]]=== 'X' && list[combination[2]] === 'X'){
            playerX.wins++;
            reset()
        }else if (list[combination[0]] === 'O' && list[combination[1]]=== 'O' && list[combination[2]] === 'O'){
            playerY.wins++;
            reset()
        }else if (list.includes('') === false){
            draw.wins++;
            reset();
        }
    } 
}



/*Players*/ 

const createPlayer = (name, marker, wins) => {
    return {name, marker, wins};
}

let playerX = createPlayer(1,'X', 0);
let draw = createPlayer(0, 'Z', 0)
let playerY = createPlayer(2,'Y', 0);

/*Reset && Counter*/ 
let CounterX = document.querySelector('.player-1p');
let CounterY = document.querySelector('.player-2p');
let CounterZ = document.querySelector('.draw-p');

function reset(){
    buttons.forEach(button=>{
        button.innerText= '';
    })

    //Reset Variables:
    list = ['','','',
            '','','',
            '','',''];
    turn = 0;

    //Contador:
    CounterX.innerText = playerX.wins;
    CounterY.innerText = playerY.wins;
    CounterZ.innerText = draw.wins;

}