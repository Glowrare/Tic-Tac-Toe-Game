<template>
  <div class="modal-overlay">
    <base-flex-wrapper justifyContent="center" class="margin-t100">
      <div class="modal-box">
        <div class="game-message">
          <p>
            <slot name="gameMessage"></slot>
          </p>
        </div>
        <slot name="otherModalContent"></slot>
      </div>
    </base-flex-wrapper>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
}
.modal-box {
  background: #ffffff;
  border-radius: 30px;
  min-height: 200px;
  width: clamp(200px, 350px, 95vw);
  padding: 20px 20px 70px;
}
.margin-t100 {
  margin-top: 100px;
}
.game-message p {
  font-size: min(2.5vw + 0.5rem, 36px);
  text-align: center;
}
</style>