<template>
  <base-button>Game Mode</base-button>
  <base-board-bg>
    <base-button :hoverable="true" id="versusComp" @click="comingSoonMessage"
      >vs. Computer</base-button
    >
    <base-button :hoverable="true" id="multiplayer">
      <router-link class="block-display" :to="`/game-play/${theme}/multiplayer`"
        >Multiplayer</router-link
      >
    </base-button>
  </base-board-bg>
  <coming-soon v-show="comingSoon"></coming-soon>
</template>

<script>
import ComingSoon from "../components/message/ComingSoon";
export default {
  data() {
    return {
      comingSoon: false,
    };
  },
  components: { ComingSoon },
  props: ["theme"],
  methods: {
    comingSoonMessage() {
      this.comingSoon = true;
      setTimeout(() => {
        this.comingSoon = false;
      }, 1500);
    },
  },
};
</script>

<style scoped>
.block-display {
  display: block;
}
</style>

