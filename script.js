const shades = [
    "#00ADB5",
    "#009197",
    "#007F85",
    "#006D72",
    "#00595D",
    "#003E41"
]

shades.reverse();

const canvas = document.querySelector(".canvas");

function generateGrid(size) {

    for (let row = 0; row < size; row ++) {

        const newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
        canvas.appendChild(newRow);
    
        for (let i = 0; i < size; i ++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.setAttribute("data-strokes", "0");
            square.addEventListener("mouseover", () => {
                const strokes = parseInt(square.getAttribute("data-strokes"));
                square.style.backgroundColor = shades[strokes];
                square.setAttribute("data-strokes", strokes + 1);
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