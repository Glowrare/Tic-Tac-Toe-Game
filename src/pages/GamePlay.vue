<template>
  <base-button>Game Mode</base-button>
  <the-board></the-board>
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
};
</script>