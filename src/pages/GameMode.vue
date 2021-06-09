<template>
  <base-button>Game Mode</base-button>
  <base-board-bg>
    <base-button :hoverable="true" id="versusComp"
      ><router-link
        class="block-display"
        :to="`/game-play/${theme}/versus-computer`"
        >vs. Computer
      </router-link></base-button
    >
    <base-button :hoverable="true" id="multiplayer"
      ><router-link
        class="block-display"
        :to="`/game-play/${theme}/multiplayer`"
        >Multiplayer</router-link
      ></base-button
    >
  </base-board-bg>
</template>

<script>
export default {
  props: ["theme"],
};
</script>

<style scoped>
.block-display {
  display: block;
}
</style>

