
let buttons = document.querySelectorAll('.grid>button');
let turn = 0;
let list = ['','','',
            '','','',
            '','',''];

buttons.forEach(button=> button.addEventListener('click', (e)=>{
    let divClass = e.target.getAttribute("class");
    let div = document.querySelector('.'+divClass)

    //Display
    if (div.getElementsByTagName('*').length === 0) {
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
        let position = e.target.getAttribute("class")[4];
        list.splice(position, 1, simbol);
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
            console.log('Winner X')
        }else if (list[combination[0]] === 'O' && list[combination[1]]=== 'O' && list[combination[2]] === 'O'){
            console.log('Winner O')
        }
    } 
}



/*Player*/ 

const createPlayer = (name, marker) => {
    return {name, marker};
}

let player1 = createPlayer(1,'X')

console.log(player1.marker)