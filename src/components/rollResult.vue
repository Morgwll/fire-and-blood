<template>
  <div class="roll">
    <div class="roll-modal">
      <h2>Roll</h2>
      <div class="roll-modal-close"><i class="fas fa-times"></i></div>
      <div class="roll-modal-result">{{ result }}</div>
      <img src="../assets/images/d20.png"/>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        result: 20
      }
    }
  }
</script>
<style lang="scss">
  .roll {
    background-color: rgba(0,0,0,.7);
    &-modal {
      height: 200px;
      width: 200px;
      margin: 60px auto;
      background-image: url('https://5.imimg.com/data5/JB/EM/MY-11791301/parchment-paper-500x500.jpg');
      border: 2px solid #422f25;
      border-radius: 5px;
    }
  }
</style>