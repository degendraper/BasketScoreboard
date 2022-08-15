pointsHome = 0
pointsVisitor = 0
countHome = document.getElementById("scoreHome")
countVisitor = document.getElementById("scoreVisitor")
whoWin = document.getElementById("message")

function add1home() {
    pointsHome += 1
    countHome.textContent = pointsHome
    whosWinning()
}

function add2home() {
    pointsHome += 2
    countHome.textContent = pointsHome
    whosWinning()
}

function add3home() {
    pointsHome += 3
    countHome.textContent = pointsHome
    whosWinning()
}

function add1visitor() {
    pointsVisitor += 1
    countVisitor.textContent = pointsVisitor
    whosWinning()
}

function add2visitor() {
    pointsVisitor += 2
    countVisitor.textContent = pointsVisitor
    whosWinning()
}

function add3visitor() {
    pointsVisitor += 3
    countVisitor.textContent = pointsVisitor
    whosWinning()
}

function whosWinning(){
    if (pointsHome > pointsVisitor){
        whoWin.textContent = "Home team's ahead!";
    } else if (pointsVisitor > pointsHome){
        whoWin.textContent = "Visitors ahead!";
    } else if (pointsVisitor + pointsHome == 0) {
        whoWin.textContent = " ";
    } else {
        whoWin.textContent = "It's a tie!";
    }
}

function gameOver(){
    pointsHome = 0
    pointsVisitor = 0
    countHome.textContent = pointsHome
    countVisitor.textContent = pointsVisitor
    whoWin.textContent= " - "
}

