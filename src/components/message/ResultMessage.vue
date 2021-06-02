<template>
  <base-modal>
    <template v-slot:gameMessage> Player 1 wins! </template>
    <template v-slot:otherModalContent>
      <base-button :hoverable="true">
        <router-link to="">Next Round</router-link>
      </base-button>
      <base-button :hoverable="true">
        <router-link to="">Start over</router-link>
      </base-button>
    </template>
  </base-modal>
</template>