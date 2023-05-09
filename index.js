const root = document.querySelector('#root');
const area = document.createElement('div');
const cells = [];
area.className = 'area';
// сделать делегирование, вместо собыия на каждой клетке, повесить одно событие и проверять каждую клетку
// переделать alert на всплывающее окно
let player = 'x';

const movePlayer = document.createElement('div');
movePlayer.className = 'text__move_player';
const movePlayerSpan = document.createElement('span');
movePlayer.textContent = 'Current move: ';
movePlayerSpan.textContent = player;
movePlayer.append(movePlayerSpan);

const winIndexs = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

const restartGame = (text) => {
    alert(text);
    cells.map(item => item.innerHTML = '');
    player = player == 'x' ? 'o' : 'x'; // смена игрока
}

const checkWin = (data) => {
    return winIndexs.some(item => {
        return item.filter(id => data.includes(id)).length === item.length
    });
}

const cellClick = (event) => {
    const data = [];
    
    if (!event.target.innerHTML) {
        event.target.innerHTML = player;
    } else {
        console.log('Ячейка занята!');
        return;
    }

    cells.map(item => {
        if (item.innerHTML == player) data.push(Number(item.id))
    })
    
    if (checkWin(data)) {
        restartGame(`Выиграл ${player}`)
    } else {
        let fillCell = cells.every(item => {
            if (item.innerHTML == '') {
                return false;
            } else return true;
        })
        if (fillCell) restartGame('Ничья!');
    }

    player = player == 'x' ? 'o' : 'x'; // смена игрока
    movePlayerSpan.textContent = player;
}

const renderCell = (index) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = index;
    cell.addEventListener('click', cellClick, false);
    cells.push(cell);
    return cell;
}

for (let i = 1; i <= 9; i++) { // переделать на рекурсивную функцию
    area.append(renderCell(i));
}

root.append(movePlayer ,area);
