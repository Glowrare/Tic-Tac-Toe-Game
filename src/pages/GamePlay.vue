<template>
  <base-button>Game Mode</base-button>
  <the-board @cell-click="cellClick"></the-board>
  <result-message class="result-message" v-show="gameEnd"></result-message>
  <quit-message class="quit-message" v-show="quitRequest"></quit-message>
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
      gameEnd: false,
      quitRequest: false,
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
      result: null,
    };
  },
  methods: {
    checkWin(currentClass) {
      let cellElements = document.querySelectorAll(".board-cell");
      let winStatus = this.WINNING_COMBINATIONS.some((combination) => {
        return combination.every((index) => {
          return cellElements[index].classList.contains(currentClass);
        });
      });
      if (winStatus) {
        this.gameEnd = true;
      }
    },
    cellClick(setPlayClass) {
      this.checkWin(setPlayClass);
    },
  },
};
</script>