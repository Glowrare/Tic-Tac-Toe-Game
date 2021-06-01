<template>
  <base-button>Pick your board</base-button>
  <base-flex-wrapper
    justifyContent="center"
    flexWrap="wrap"
    class="gap-spacing"
  >
    <router-link to="/game-mode/redTheme">
      <base-board-style
        :boardTheme="redTheme"
        @click="getTheme(redTheme)"
      ></base-board-style>
    </router-link>
    <router-link to="/game-mode/pinkTheme">
      <base-board-style :boardTheme="pinkTheme"></base-board-style>
    </router-link>
    <router-link to="/game-mode/blueTheme">
      <base-board-style :boardTheme="blueTheme"></base-board-style>
    </router-link>
    <router-link to="/game-mode/orangeTheme">
      <base-board-style :boardTheme="orangeTheme"></base-board-style>
    </router-link>
    <router-link to="/game-mode/greenTheme">
      <base-board-style :boardTheme="greenTheme"></base-board-style>
    </router-link>
    <router-link to="/game-mode/brownTheme">
      <base-board-style :boardTheme="brownTheme"></base-board-style>
    </router-link>
  </base-flex-wrapper>
</template>

<script>
import BaseBoardStyle from "../components/ui/BaseBoardStyle";
import BaseButton from "../components/ui/BaseButton";
export default {
  components: {
    BaseButton,
    BaseBoardStyle,
  },
  methods: {
    getTheme(theme) {
      console.log(theme);
    },
  },
  inject: [
    "redTheme",
    "pinkTheme",
    "blueTheme",
    "orangeTheme",
    "greenTheme",
    "brownTheme",
  ],
};
</script>

<style scoped>
.gap-spacing {
  margin: 20px auto;
  max-width: 900px;
}
.gap-spacing > * {
  margin: 20px 0 0 20px;
}
</style>