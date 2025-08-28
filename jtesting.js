const rows = 16;
const cols = 16;
const cellSize = 50; // px
const container = document.getElementById('grid-container');

// Style the container to manage overall layout
container.style.width = `${cols * cellSize}px`;
container.style.border = '1px solid black';
container.style.overflow = 'hidden'; // Clear floats if using float: left

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.textContent = `Cell ${i + 1}-${j + 1}`;

        // Apply inline styles for grid layout
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.border = '1px solid lightgray';
        cell.style.boxSizing = 'border-box'; // Include padding and border in width/height
        cell.style.display = 'inline-block'; // Or 'float: left'
        cell.style.textAlign = 'center';
        cell.style.lineHeight = `${cellSize}px`; // Vertically align text

        container.appendChild(cell);
    }
}