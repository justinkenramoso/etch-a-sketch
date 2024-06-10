const DARKGREY = "#222831"
const GREY = "#393E46";
const TEAL = "#00ADB5";
const OFFWHITE = "#EEEEEE";

const canvas = document.querySelector(".canvas");
let gridSize = 16;

for (let row = 0; row < gridSize; row ++) {

    const newRow = document.createElement("div");
    newRow.setAttribute("class", "row")
    canvas.appendChild(newRow)

    for (let i = 0; i < gridSize; i ++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.addEventListener("mouseover", (e) => {
            square.style.backgroundColor = TEAL;
        });
        newRow.appendChild(square);
    }
    
}
