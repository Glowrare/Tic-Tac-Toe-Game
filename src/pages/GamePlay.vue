<template>
  <base-button>{{ currentClass }}</base-button>
  <base-flex-wrapper justifyContent="center">
    <button class="quit-btn" @click="quitGameRequest">Quit</button>
  </base-flex-wrapper>
  <the-board
    :key="componentKey"
    @cell-click="cellClick"
    :restartStatus="restartStatus"
  ></the-board>
  <result-message
    class="result-message"
    v-show="gameEnd"
    :gameEndMessage="gameEndMessage"
    @restart-game="restartGame"
    @end-game="endGame"
  ></result-message>
  <quit-message
    class="quit-message"
    v-show="quitRequest"
    @cancel-quit="cancelQuit"
    @confirm-quit="endGame"
  ></quit-message>
</template>

<script>
import TheBoard from "../components/layout/TheBoard";
import ResultMessage from "../components/message/ResultMessage";
import QuitMessage from "../components/message/QuitMessage";
export default {
  components: {
    TheBoard,
    ResultMessage,
    QuitMessage,
  },
  props: ["theme", "id"],
  data() {
    return {
      componentKey: 0,
      currentClass: "X's turn",
      winResult: false,
      drawResult: false,
      gameEnd: false,
      quitRequest: false,
      gameEndMessage: "",
      restartStatus: false,
      WINNING_COMBINATIONS: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    checkWin(currentClass) {
      let cellElements = document.querySelectorAll(".board-cell");
      let winStatus = this.WINNING_COMBINATIONS.some((combination) => {
        return combination.every((index) => {
          return cellElements[index].classList.contains(currentClass);
        });
      });
      if (winStatus) {
        this.winResult = true;
        this.gameEnd = true;
        if (currentClass === "nought") {
          this.gameEndMessage = "O wins this round!";
        } else {
          this.gameEndMessage = "X wins this round!";
        }
      }
    },
    checkDraw() {
      let cellElements = document.querySelectorAll(".board-cell");
      let drawStatus = [...cellElements].every((cell) => {
        return (
          cell.classList.contains("nought") || cell.classList.contains("cross")
        );
      });
      if (drawStatus) {
        this.drawResult = true;
        this.gameEnd = true;
        this.gameEndMessage = "Draw!";
      }
    },
    cellClick(setPlayClass) {
      this.checkDraw();
      this.checkWin(setPlayClass);
      if (!this.gameEnd) {
        this.restartStatus = false;
        if (setPlayClass === "nought") {
          this.currentClass = "X's turn";
        } else {
          this.currentClass = "O's turn";
        }
      } else {
        this.currentClass = "Game ends!";
      }
    },
    restartGame() {
      (this.currentClass = "X's turn"), (this.winResult = false);
      this.drawResult = false;
      this.gameEnd = false;
      this.restartStatus = true;
      this.gameEndMessage = "";
      document.querySelector("#board").classList.remove("nought");
      document.querySelector("#board").classList.add("cross");
      let cellElements = document.querySelectorAll(".board-cell");
      cellElements.forEach((cell) => {
        cell.classList.remove("nought", "cross");
      });
      this.forceRerender();
    },
    endGame() {
      this.restartGame();
    },
    quitGameRequest() {
      this.quitRequest = true;
    },
    cancelQuit() {
      this.quitRequest = false;
    },
  },
};
</script>

<style scoped>
.quit-btn {
  text-transform: uppercase;
  background: #ffffff;
  border: 2px solid var(--pry-clr);
  color: var(--pry-clr);
  font-weight: 700;
  height: 40px;
  width: 110px;
  margin-top: -20px;
  margin-bottom: 25px;
  font-size: 24px;
}
.quit-btn:hover {
  background: var(--pry-clr);
  border-color: #ffffff;
  color: #ffffff;
}
</style>