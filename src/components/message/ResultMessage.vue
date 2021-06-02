<template>
  <base-modal>
    <template v-slot:gameMessage>{{ gameEndMessage }}</template>
    <template v-slot:otherModalContent>
      <base-button @click="$emit('restart-game')" :hoverable="true"
        >Next Round
      </base-button>
      <base-button :hoverable="true">
        <router-link to="/" @click="$emit('end-game')">End Game</router-link>
      </base-button>
    </template>
  </base-modal>
</template>

<script>
export default {
  props: ["gameEndMessage"],
  emits: ["restart-game", "end-game"],
};
</script>