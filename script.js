const DARKGREY = "#222831"
const GREY = "#393E46";
const TEAL = "#00ADB5";
const OFFWHITE = "#EEEEEE";

const canvas = document.querySelector(".canvas");

function generateGrid(size) {

    for (let row = 0; row < size; row ++) {

        const newRow = document.createElement("div");
        newRow.setAttribute("class", "row")
        canvas.appendChild(newRow)
    
        for (let i = 0; i < size; i ++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.addEventListener("mouseover", (e) => {
                square.style.backgroundColor = TEAL;
            });
            newRow.appendChild(square);
        }
        
    }
}


const gridBtn = document.querySelector("#grid-btn");
gridBtn.addEventListener("click", () => {
    const newGridSize = parseInt(prompt("Set new grid size (max: 64):"));

    if (newGridSize > 0 && newGridSize < 65) {
        canvas.innerHTML = "";
        generateGrid(newGridSize);
    } else {
        alert("Please input a value from 1 to 64.")
    }

})

generateGrid(16);