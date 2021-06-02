<template>
  <base-button>Game Mode</base-button>
  <the-board></the-board>
</template>

<script>
import TheBoard from "../components/layout/TheBoard";
export default {
  components: {
    TheBoard,
  },
  props: ["theme", "id"],
};
</script>