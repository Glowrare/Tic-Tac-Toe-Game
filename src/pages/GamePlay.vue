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
    };
  },
  methods: {
    cellClick(cell) {
      if (cell === "one") {
        console.log("one time");
      } else if (cell === "two") {
        console.log("two time");
      } else if (cell === "three") {
        console.log("three time");
      } else if (cell === "four") {
        console.log("four time");
      } else {
        console.log("some other");
      }
    },
  },
};
</script>