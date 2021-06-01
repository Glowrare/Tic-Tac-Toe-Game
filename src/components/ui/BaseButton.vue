<template>
  <base-flex-wrapper justifyContent="center">
    <button :class="['base-btn', { 'base-btn-hoverable': hoverable }]">
      <slot></slot>
    </button>
  </base-flex-wrapper>
</template>

<script>
export default {
  props: ["hoverable"],
};
</script>

<style scoped>
.base-btn {
  width: min(90%, 90vw, 410px);
  font-family: var(--pry-font);
  font-size: clamp(14px, 3vw + 0.5rem, 32px);
  background: #ffffff;
  border: 2px solid var(--pry-clr);
  border-radius: 50px;
  margin-bottom: 40px;
}
.base-btn-hoverable {
  cursor: pointer;
}
.base-btn-hoverable:hover {
  color: #fff;
  background: var(--pry-clr);
  border-color: #fff;
}
</style>