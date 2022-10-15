let size = 8;
let board = "";

// controls the lines
for (let y = 0; y < size; y++) {

  // controls characters
  for (let x = 0; x < size; x++) {

    // checking board for position for character value
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
