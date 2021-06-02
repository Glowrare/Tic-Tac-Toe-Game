<template>
  <base-board-bg>
    <div class="board" id="board">
      <div class="cell board-cell"></div>
      <div class="cell board-cell"></div>
      <div class="cell board-cell"></div>
      <div class="cell board-cell"></div>
      <div class="cell board-cell"></div>
      <div class="cell board-cell"></div>
      <div class="cell board-cell"></div>
      <div class="cell board-cell"></div>
      <div class="cell board-cell"></div>
    </div>
  </base-board-bg>
</template>

<style scoped>
.board {
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, auto);
}
.cell {
  width: min(30vw, 150px);
  height: min(30vw, 150px);
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.cell:first-child,
.cell:nth-child(2),
.cell:nth-child(3) {
  border-top: none;
}
.cell:nth-child(3n + 1) {
  border-left: none;
}
.cell:nth-child(3n + 3) {
  border-right: none;
}
.cell:last-child,
.cell:nth-child(8),
.cell:nth-child(7) {
  border-bottom: none;
}
.cell.cross,
.cell.nought {
  cursor: not-allowed;
}
.cell.cross::before,
.cell.cross::after {
  background-color: #fff;
}
.cell.nought::before {
  background: transparent;
  border: solid 15px #fff;
}
.board.cross .cell:not(.cross):not(.nought):hover::before,
.board.cross .cell:not(.cross):not(.nought):hover::after {
  background-color: lightgrey;
}
.board.nought .cell:not(.cross):not(.nought):hover::before {
  border: solid 15px lightgrey;
}
.cell.cross::before,
.cell.cross::after,
.cell:not(.cross):not(.nought):hover::before,
.board.cross .cell:not(.cross):not(.nought):hover::after {
  content: "";
  position: absolute;
  width: calc((100px * 0.9) * 0.15);
  height: calc(100px * 0.9);
}
.cell.cross::before,
.board.cross .cell:not(.cross):not(.nought):hover::before {
  transform: rotate(45deg);
}
.cell.cross::after,
.board.cross .cell:not(.cross):not(.nought):hover::after {
  transform: rotate(-45deg);
}
.cell.nought::before,
.board.nought .cell:not(.cross):not(.nought):hover::before {
  content: "";
  position: absolute;
  border-radius: 50%;
}
.cell.nought::before,
.board.nought .cell:not(.cross):not(.nought):hover::before {
  width: calc(100px * 0.7);
  height: calc(100px * 0.7);
}
</style>