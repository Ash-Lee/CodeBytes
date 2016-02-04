/* JavaScript =================================================================================================================
    Create a function which returns a string that represents an 8×8 grid, using newline characters to separate lines.
    At each position of the grid there is either a space or a “#” character.
    The characters should resemble a chess board.
============================================================================================================================ */


// Solution 1
var gridSize = prompt("Size of grid"),
  chessBoard = "";

for (var line = 0; line < gridSize; line++) {
  
  for (var square = 0; square < gridSize; square++) {
    if ((line + square) % 2 === 0) {
      chessBoard += "#";
    } else {
      chessBoard += " ";
    }
  }

  chessBoard += "\n";
}
 
// Output (8)
console.log(chessBoard);
/* =>
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
*/





// Solution 2 - OOP + Prototypal Inheritance
function Board(gridSize) {
  this.size = gridSize;
  this.grid = "";

  this.createFrame();

  for (var line = 0; line < this.size; line++) {
    for (var square = 0; square < this.size; square++) {
      if (square === 0) this.grid += "|";

      if ((line + square) % 2 === 0) {
        this.grid += "##";
      } else {
        this.grid += "  ";
      }

      if (square === (this.size - 1)) this.grid += "|";
    }

    this.grid += "\n";
  }

  this.createFrame();
}

Board.prototype.createFrame = function() {
  for (var frame = 0; frame < ((this.size * 2) + 2); frame++) {
    this.grid += "-";
  }

  this.grid += "\n";
};

// Output
var chessBoard = new Board(8);
console.log(chessBoard.grid);
/* =>
------------------
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
------------------
*/





// Solution 3 - OOP
function Board(gridSize) {
  this.size = gridSize;
  this.grid = "";
  
  this.createFrame = function() {
    for (var frame = 0; frame < ((this.size * 2) + 2); frame++) {
      this.grid += "-";
    }

    this.grid += "\n";
  };
  
  this.createGrid = function() {
    for (var line = 0; line < this.size; line++) {
      for (var square = 0; square < this.size; square++) {
        if (square === 0) this.grid += "|";

        if ((line + square) % 2 === 0) {
          this.grid += "##";
        } else {
          this.grid += "  ";
        }

        if (square === (this.size - 1)) this.grid += "|";
      }

      this.grid += "\n";
    }
  };

  this.display = function() {
    return this.grid;
  };
  
  this.createFrame();
  this.createGrid();
  this.createFrame();
}

// Output
var chessBoard = new Board(8);
console.log(chessBoard.display());
/* =>
------------------
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
------------------
*/





// Solution 4 - OOP + IIFE
function Board(gridSize) {
  this.size = gridSize;
  this.grid = "";

  this.createFrame = function() {
    for (var frame = 0; frame < ((this.size * 2) + 2); frame++) {
      this.grid += "-";
    }

    this.grid += "\n";
  };

  this.createGrid = function() {
    for (var line = 0; line < this.size; line++) {
      for (var square = 0; square < this.size; square++) {
        if (square === 0) this.grid += "|";

        if ((line + square) % 2 === 0) {
          this.grid += "##";
        } else {
          this.grid += "  ";
        }

        if (square === (this.size - 1)) this.grid += "|";
      }

      this.grid += "\n";
    }
  };

  this.display = function() {
    return this.grid;
  };

  // Work around local scope of IIFE
  var that = this;

  // Auto construct grid layout with IIFE
  (function() {
    that.createFrame();
    that.createGrid();
    that.createFrame();
  })();
}

// Output
var chessBoard = new Board(8);
console.log(chessBoard.display());
/* =>
------------------
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
|##  ##  ##  ##  |
|  ##  ##  ##  ##|
------------------
*/

var chessBoard = new Board(20);
console.log(chessBoard.display());
/* =>
------------------------------------------
|##  ##  ##  ##  ##  ##  ##  ##  ##  ##  |
|  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##|
|##  ##  ##  ##  ##  ##  ##  ##  ##  ##  |
|  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##|
|##  ##  ##  ##  ##  ##  ##  ##  ##  ##  |
|  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##|
|##  ##  ##  ##  ##  ##  ##  ##  ##  ##  |
|  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##|
|##  ##  ##  ##  ##  ##  ##  ##  ##  ##  |
|  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##|
|##  ##  ##  ##  ##  ##  ##  ##  ##  ##  |
|  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##|
|##  ##  ##  ##  ##  ##  ##  ##  ##  ##  |
|  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##|
|##  ##  ##  ##  ##  ##  ##  ##  ##  ##  |
|  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##|
|##  ##  ##  ##  ##  ##  ##  ##  ##  ##  |
|  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##|
|##  ##  ##  ##  ##  ##  ##  ##  ##  ##  |
|  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##|
------------------------------------------
*/