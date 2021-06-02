<template>
  <base-flex-wrapper justifyContent="center">
    <div class="base-board-bg" :style="{ background: gameTheme }">
      <slot></slot>
    </div>
  </base-flex-wrapper>
</template>

<script>
export default {
  inject: [
    "redTheme",
    "pinkTheme",
    "blueTheme",
    "orangeTheme",
    "greenTheme",
    "brownTheme",
  ],
  computed: {
    gameTheme() {
      if (this.$route.path.includes("redTheme")) {
        return this.redTheme;
      } else if (this.$route.path.includes("pinkTheme")) {
        return this.pinkTheme;
      } else if (this.$route.path.includes("blueTheme")) {
        return this.blueTheme;
      } else if (this.$route.path.includes("orangeTheme")) {
        return this.orangeTheme;
      } else if (this.$route.path.includes("greenTheme")) {
        return this.greenTheme;
      } else {
        return this.brownTheme;
      }
    },
  },
};
</script>

<style scoped>
.base-board-bg {
  width: min(790px, 90vw, 100%);
  border: 1px solid #000000;
  box-shadow: 9px 10px 3px 3px rgba(27, 23, 23, 0.5);
  border-radius: 10px;
  min-height: min(100vw, 500px);
  padding-top: 50px;
}
</style>