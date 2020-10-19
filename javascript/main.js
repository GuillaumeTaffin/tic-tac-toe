const players = {
    ROUND: 'round',
    CROSS: 'cross'
}
let gameState;

configureGameBoard();
resetGameState();

function configureGameBoard() {
    let gridItems = findGridItems();
    gridItems.forEach(element => {
        element.addEventListener("click", () => {
            if (!element.firstChild) {
                let image = document.createElement('img');
                image.src = selectImageSource();
                element.appendChild(image);
                changePlayer();
            }
        });
    });
}

function resetGameState() {
    initGrid();
    gameState = initState();
}

function initState() {
    return {
        victory: false,
        currentPlayer: players.CROSS
    };
}

function findGridItems() {
    return Array.from(document.getElementsByClassName('grid-item'));
}

function initGrid() {
    const items = findGridItems();
    items.forEach(item => {
        while (item.firstChild) {
            item.removeChild(item.lastChild);
        }
    });
}

function selectImageSource() {
    if (gameState.currentPlayer === players.CROSS) {
        return './resource/letter-x.png';
    }
    else {
        return './resource/circle-ring.png';
    }
}

function changePlayer() {
    if (gameState.currentPlayer === players.CROSS) {
        gameState.currentPlayer = players.ROUND;
    }
    else {
        gameState.currentPlayer = players.CROSS;
    }
}