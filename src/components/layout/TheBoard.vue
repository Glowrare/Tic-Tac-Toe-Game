<template>
  <base-board-bg>
    <div
      class="board"
      id="board"
      :class="[crossClass ? 'cross' : 'nought']"
      @click="isCross"
    >
      <div
        class="cell board-cell"
        :class="[boardCell.one ? playClass.one : '']"
        @click.once="addPlayClass('cellOne')"
        @click="$emit('cell-click', 'one')"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.two ? playClass.two : '']"
        @click.once="addPlayClass('cellTwo')"
        @click="$emit('cell-click', 'two')"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.three ? playClass.three : '']"
        @click.once="addPlayClass('cellThree')"
        @click="$emit('cell-click', 'three')"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.four ? playClass.four : '']"
        @click.once="addPlayClass('cellFour')"
        @click="$emit('cell-click', 'four')"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.five ? playClass.five : '']"
        @click.once="addPlayClass('cellFive')"
        @click="$emit('cell-click', 'five')"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.six ? playClass.six : '']"
        @click.once="addPlayClass('cellSix')"
        @click="$emit('cell-click', 'six')"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.seven ? playClass.seven : '']"
        @click.once="addPlayClass('cellSeven')"
        @click="$emit('cell-click', 'seven')"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.eight ? playClass.eight : '']"
        @click.once="addPlayClass('cellEight')"
        @click="$emit('cell-click', 'eight')"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.nine ? playClass.nine : '']"
        @click.once="addPlayClass('cellNine')"
        @click="$emit('cell-click', 'nine')"
      ></div>
    </div>
  </base-board-bg>
</template>

<script>
export default {
  emits: ["cell-click"],
  data() {
    return {
      crossClass: true,
      boardCell: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
      },
      playClass: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
      },
      number: "",
    };
  },
  computed: {
    setPlayClass() {
      if (this.crossClass) {
        return "cross";
      } else {
        return "nought";
      }
    },
    getNumber() {
      return this.number.substring(4).toLowerCase();
    },
  },
  methods: {
    isCross() {
      this.crossClass = !this.crossClass;
    },
    playClassSetter(cell) {
      this.number = cell;
      if (cell) {
        this.boardCell[this.getNumber] = true;
        this.playClass[this.getNumber] = this.setPlayClass;
      }
    },
    addPlayClass(cellNo) {
      this.playClassSetter(cellNo);
    },
  },
};
</script>

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