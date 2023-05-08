const root = document.querySelector('#root');
const area = document.createElement('div');
const cells = [];
area.className = 'area';

let player = 'x';

const winIndexs = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,7],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

const cellClick = (event) => {
    const data = [];
    
    if (!event.target.innerHTML) {
        event.target.innerHTML = player;
    } else {
        console.log('Ячейка занята!')
    }

    cells.map(item => {
        if (item.innerHTML == player) data.push(item.id)
    })

    player = player == 'x' ? 'o' : 'x';
    console.log(data)
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
 


root.append(area);
//area
//cell 