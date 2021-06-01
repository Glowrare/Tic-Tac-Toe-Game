<template>
  <div
    class="base-flex-wrapper"
    :style="{
      justifyContent: justifyContent,
      alignItems: alignItems,
      flexWrap: flexWrap,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    justifyContent: {
      type: String,
      required: false,
    },
    alignItems: {
      type: String,
      required: false,
    },
    flexWrap: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.base-flex-wrapper {
  display: flex;
}
</style>