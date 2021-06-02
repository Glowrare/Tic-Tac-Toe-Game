<template>
  <base-modal>
    <template v-slot:gameMessage>
      Are you sure you want to quit the game now?</template
    >
    <template v-slot:otherModalContent>
      <base-flex-wrapper justifyContent="space-evenly">
        <button class="rect-btn rect-btn-yes">
          <router-link to="">Yes</router-link>
        </button>
        <button class="rect-btn rect-btn-no">
          <router-link to="">No</router-link>
        </button>
      </base-flex-wrapper>
    </template>
  </base-modal>
</template>

<style scoped>
.rect-btn {
  border: 1px solid #000000;
  height: 50px;
  width: 100px;
  color: #fff;
  text-transform: uppercase;
  font-family: inherit;
  font-size: min(2vw + 0.5rem, 36px);
  cursor: pointer;
}
.rect-btn-yes {
  background: #206a5d;
}
.rect-btn-yes:hover {
  background: #46b19d;
}
.rect-btn-no {
  background: #ba135d;
}
.rect-btn-no:hover {
  background: #b94378;
}
</style>