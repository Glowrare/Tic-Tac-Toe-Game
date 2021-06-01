<template>
  <div class="board-style" :style="{ backgroundColor: boardTheme }">
    <base-flex-wrapper
      justifyContent="center"
      alignItems="center"
      class="full-height"
    >
      <img src="../../assets/board-img.svg" alt="" />
    </base-flex-wrapper>
  </div>
</template>

<script>
export default {
  props: {
    boardTheme: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.board-style {
  box-shadow: 4px 4px 3px rgba(27, 23, 23, 0.5);
  border-radius: 10px;
  width: 250px;
  height: 255px;
}
.board-style:hover {
  box-shadow: -10px -10px 5px rgba(27, 23, 23, 0.5);
}
.full-height {
  height: 100%;
}
</style>

