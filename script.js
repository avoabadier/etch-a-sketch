// get grid
const grid = document.getElementById("grid");
const resize = document.getElementById("resize");

resize.addEventListener("click", () => {
    let size = prompt("Enter grid size (1-100): ");

    size = Number(size);

    if (size < 1 || size > 100 || isNaN(size)){
        alert("Invalid Input. Must be from 1 to 100");
    }

    createGrid(size);
});

function getRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function color(cell){
    let colored = false;
    cell.style.opacity = 0.1;

    cell.addEventListener("mouseover", () => {
        if (!colored){
            cell.style.background = getRGB();
            colored = true;
        }

        let currentOpacity = Number(cell.style.opacity);

        if (currentOpacity < 1){
            cell.style.opacity = Math.min(1, currentOpacity + 0.1);
        }
    });
}

function createGrid(size){
    grid.innerHTML = "";

    const totalCells = size * size;
    
    for (let i = 0; i < totalCells; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.style.width = `calc(100% / ${size})`;
        cell.style.height = `calc(100% / ${size})`;
        
        color(cell);
        grid.appendChild(cell);
    }

    
}

createGrid(16);