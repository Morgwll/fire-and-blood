import Vue from 'vue';

Vue.mixin({
  methods: {
    diceRoller(die) {
      let result = Math.floor(Math.random() * die) + 1;
      console.log(result);
      return result;
    },
    calcBonus(stat) {
      return Math.floor((stat - 10) / 2); 
    },
    heal(score, maxScore) {
      if (score < maxScore) {
        score++;
      }
    },
    damage(score) {
      if(score <= 0) {
        score--;
      }
    }
  }
})