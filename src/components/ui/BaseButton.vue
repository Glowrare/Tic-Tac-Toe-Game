<template>
  <button class="base-btn"><slot></slot></button>
</template>

<style scoped>
.base-btn {
  width: min(90%, 90vw, 410px);
  font-family: var(--pry-font);
  /* font-size: min(32px, 2.5vw + 0.5rem); */
  font-size: clamp(14px, 3vw + 0.5rem, 32px);
  background: #ffffff;
  border: 2px solid var(--pry-clr);
  border-radius: 50px;
}
</style>