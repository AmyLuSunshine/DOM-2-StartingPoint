// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});
const table = document.getElementById("grid").querySelector("tbody");
let selectedColor = document.getElementById("color-picker").value;
let isMouseDown = false;

// Track mouse state for drag coloring
document.body.addEventListener("mousedown", () => (isMouseDown = true));
document.body.addEventListener("mouseup", () => (isMouseDown = false));

// #5 Update selected color on dropdown change
document.getElementById("color-picker").addEventListener("change", function () {
  selectedColor = this.value;
});

//#6 Click to color
function setupCell(cell) {
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = selectedColor;
  });

  cell.addEventListener("mouseover", () => {
    if (isMouseDown) {
      cell.style.backgroundColor = selectedColor;
    }
  });
}

for (let row of table.rows) {
  for (let cell of row.cells) {
    setupCell(cell);
  }
}

//#1 Add row
document.getElementById("add-row").addEventListener("click", () => {
  const row = table.insertRow();
  const colCount = table.rows[0]?.cells.length || 1;
  for (let i = 0; i < colCount; i++) {
    const cell = row.insertCell();
    setupCell(cell);
  }
});

//#2 Add column
document.getElementById("add-col").addEventListener("click", () => {
  if (table.rows.length === 0) {
    const row = table.insertRow();
    const cell = row.insertCell();
    setupCell(cell);
    return;
  }
  for (let row of table.rows) {
    const cell = row.insertCell();
    setupCell(cell);
  }
});

//#3 Remove row
document.getElementById("remove-row").addEventListener("click", () => {
  if (table.rows.length > 0) {
    table.deleteRow(table.rows.length - 1);
  }
});

//#4 Remove column
document.getElementById("remove-col").addEventListener("click", () => {
  for (let row of table.rows) {
    if (row.cells.length > 0) {
      row.deleteCell(row.cells.length - 1);
    }
  }
});

//#7 Fill uncolored cells
document.getElementById("fill-uncolored").addEventListener("click", () => {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      if (
        !cell.style.backgroundColor ||
        cell.style.backgroundColor === "transparent"
      ) {
        cell.style.backgroundColor = selectedColor;
      }
    }
  }
});

//#8 Fill all cells with the currently selected color
document.getElementById("fill-all").addEventListener("click", () => {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      cell.style.backgroundColor = selectedColor;
    }
  }
});

//#9 Clear all cells/restore all cells to their original/initial color
document.getElementById("clear").addEventListener("click", () => {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      cell.style.backgroundColor = "";
    }
  }
});

//#10 Click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
function setupCell(cell) {
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = selectedColor;
  });

  cell.addEventListener("mouseover", () => {
    if (isMouseDown) {
      cell.style.backgroundColor = selectedColor;
    }
  });
}
