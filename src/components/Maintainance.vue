<template>
  <div class="maintain-wrapper">
    <div class="maintain-content">
      <div class="img-group">
        <div class="img-maintain-person">
          <img src="/IMG/pic_maintain_character.png" alt="" />
        </div>
        <div class="img-maintain-fence">
          <img src="/IMG/pic_maintain_fence.png" alt="" />
        </div>
        <div class="img-maintain-sweat">
          <img src="/IMG/pic_maintain_sweat.png" alt="" />
        </div>
      </div>
      <div class="text-group">
        <p class="maintain-title">Opps</p>
        <p class="maintain-text">This page is currently being maintained.</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scope>
.maintain-wrapper {
  position: relative;
  margin: 4vw 0 0 0;
  padding: 0 clamp(16px, 6vw, 48px);
  background-color: var(--bg_tertiary);
  .maintain-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4vw;
    padding: 7.5vw 0;
    min-height: 360px;
  }
  .maintain-title {
    font-family: 'Android 101';
    font-size: clamp(54px, 8vw, 80px);
    color: var(--text_primary);
  }
  .maintain-text {
    font-size: clamp(20px, 4vw, 28px);
    color: var(--text_primary);
  }
  .img-group {
    position: relative;
    height: 380px;
    flex: 300px 0 0;
    .img-maintain-person {
      height: 100%;
      >img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .img-maintain-fence {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      >img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    .img-maintain-sweat {
      position: absolute;
      top: 1vw;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      >img {
        height: 100%;
        width: 100%;
        object-fit: contain;        
      }
    }
  }
  .text-group {
    display: grid;
    gap: 1vw;
  }
}
@media screen and (max-width: 576px) {
  .maintain-wrapper {
    .maintain-content {
      flex-direction: column;
    }
    .maintain-title {
      text-align: center;
    }
    .maintain-text {
      text-align: center;
    }
  }
}
</style>