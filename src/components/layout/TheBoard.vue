<template>
  <base-board-bg>
    <div class="board" id="board" :class="[crossClass ? 'cross' : 'nought']">
      <div
        class="cell board-cell"
        :class="[boardCell.one ? playClass.one : '']"
        @click.once="addPlayClass('cellOne')"
        @click="$emit('cell-click', setPlayClass)"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.two ? playClass.two : '']"
        @click.once="addPlayClass('cellTwo')"
        @click="$emit('cell-click', setPlayClass)"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.three ? playClass.three : '']"
        @click.once="addPlayClass('cellThree')"
        @click="$emit('cell-click', setPlayClass)"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.four ? playClass.four : '']"
        @click.once="addPlayClass('cellFour')"
        @click="$emit('cell-click', setPlayClass)"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.five ? playClass.five : '']"
        @click.once="addPlayClass('cellFive')"
        @click="$emit('cell-click', setPlayClass)"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.six ? playClass.six : '']"
        @click.once="addPlayClass('cellSix')"
        @click="$emit('cell-click', setPlayClass)"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.seven ? playClass.seven : '']"
        @click.once="addPlayClass('cellSeven')"
        @click="$emit('cell-click', setPlayClass)"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.eight ? playClass.eight : '']"
        @click.once="addPlayClass('cellEight')"
        @click="$emit('cell-click', setPlayClass)"
      ></div>
      <div
        class="cell board-cell"
        :class="[boardCell.nine ? playClass.nine : '']"
        @click.once="addPlayClass('cellNine')"
        @click="$emit('cell-click', setPlayClass)"
      ></div>
    </div>
  </base-board-bg>
</template>

<script>
export default {
  emits: ["cell-click"],
  props: {
    restartStatus: {
      type: Boolean,
      required: true,
    },
  },
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
  watch: {
    restartStatus() {
      if (this.restartStatus) {
        console.log("1 =>" + this.restartStatus);
        this.boardCell = Object.keys(this.boardCell).reduce((cell, key) => {
          cell[key] = "false";
          return cell;
        }, {});
        this.playClass = Object.keys(this.boardCell).reduce((cell, key) => {
          cell[key] = "";
          return cell;
        }, {});
      }
    },
  },
  computed: {
    setPlayClass() {
      if (this.crossClass) {
        return "nought";
      } else {
        return "cross";
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
        if (!this.boardCell[this.getNumber]) {
          this.isCross();
          this.boardCell[this.getNumber] = true;
          this.playClass[this.getNumber] = this.setPlayClass;
        }
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