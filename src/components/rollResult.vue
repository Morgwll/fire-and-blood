<template>
  <div class="roll">
    <div class="roll-modal">
      <h2>Roll</h2>
      <div class="roll-modal-close" @click="close"><i class="fas fa-times"></i></div>
      <div v-if="$store.state.bonus != null">
        <div class="roll-modal-result-bonus">
          <div class="dieroll">
            <div class="dieroll-result">{{ $store.state.roll }}</div>
            <img src="../assets/images/d20.png"/>
            <div class="dieroll-result-bonus">+</div>
            <div class="dieroll-result-bonus">{{ $store.state.bonus }}</div>
          </div>
          
        </div>
      </div>
      <div  class="roll-modal-result-no-bonus" v-else>
        <div class="dieroll">
          <div class="dieroll-result">{{ $store.state.roll }}</div>
          <img src="../assets/images/d20.png"/>
        </div>
      </div>
      <div class="roll-modal-message">
        {{ $store.state.rollMessage }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      close() {
        this.$store.state.showRollModal = false;
      }
    }
  }
</script>
<style lang="scss">
  .roll {
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 7;
    &-modal {
      height: 200px;
      width: 200px;
      margin: 60px auto;
      background-image: url('https://5.imimg.com/data5/JB/EM/MY-11791301/parchment-paper-500x500.jpg');
      border: 6px solid #000;
      border-radius: 5px;
      position: relative;
      &-message {
        font-family: "New Rocker";
        text-align: center;
        padding: 0 10px;
      }
      &-result-bonus {
        font-family: "New Rocker";
        .dieroll {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0 15px;
          &-result {
            position: absolute;
            top: 37px;
            left: 56px;
            font-size: 1.2rem;
            font-weight: 700;
            color: #fff;
            width: 18px;
            text-align: center;
            &-bonus {
              color: #7a1207;
              font-size: 2rem;
              width: 30px;
              text-align: center;
              font-weight: 700;
            }
          }
          img {
            width: 100px;
            height: 100px;
          }
        }
      }
      &-result-no-bonus {
        font-family: "New Rocker";
        .dieroll {
          position: relative;
          display: flex;
          justify-content: center;
          &-result {
            position: absolute;
            top: 37px;
            left: 90px;
            font-size: 1.2rem;
            font-weight: 700;
            color: #fff;
            width: 18px;
            text-align: center;
          }
          img {
            width: 100px;
            height: 100px;
          }
        }
      }
      h2 {
        margin-bottom: 10px;
      }
      &-close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
      }
    }
  }
</style>