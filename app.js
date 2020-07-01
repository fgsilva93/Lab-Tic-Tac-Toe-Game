let cells = document.querySelectorAll(".row > div"); 
let resetButton = document.getElementById("reset")
let currentPlayer = "X";
let moves = 0;
let gameOver = false;
let winningCombos = [
    [cells[0] ,cells[1], cells[2]], 
    [cells[3] ,cells[4], cells[5]], 
    [cells[6] ,cells[7], cells[8]], 
    [cells[0] ,cells[3], cells[6]], 
    [cells[1] ,cells[4], cells[7]], 
    [cells[1] ,cells[4], cells[7]], 
    [cells[2] ,cells[5], cells[8]], 
    [cells[0] ,cells[4], cells[8]], 
    [cells[2] ,cells[4], cells[6]], 
];

resetButton.addEventListener("click", newGame); 

cells.forEach(function (cell) {
    cell.addEventListener("click", function (e) {
        if(e.target.textContent === "" && gameOver === false) {
            e.target.textContent = currentPlayer;
            moves++;
            checkWin();
            if(currentPlayer === "X") {
                currentPlayer = "O";
            }
            else {
                currentPlayer = "X";
            }
        }
    });
});

function checkWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        let XCount = 0;
        let OCount = 0;

        for(let j = 0; j < winningCombos[i].length; j++) {
            if(winningCombos[i][j].textContent === "X") {
                XCount++
            }
            else if (winningCombos[i][j].textContent === "O") {
                OCount++
            }
        }

        if(XCount === 3) {
            setTimeout(() => {
                alert("X Wins");
            }, 0);
            gameOver = true;
            resetButton.style.display = "block";
        }
        else if(OCount === 3) {
            setTimeout(() => {
                alert("O Wins");
            }, 0);
            gameOver = true;
            resetButton.style.display = "block";
        }
        else if(moves === 9) {
            setTimeout(() => {
                alert("Draw");
            }, 0);
            gameOver = true;
            resetButton.style.display = "block";
            break;
        }
    }
}

function newGame() {
    currentPlayer = "X";
    moves = 0
    cells.forEach(function (cell) {
        cell.textContent = "";
    })
}
