import Vue from 'vue';

Vue.mixin({
  methods: {
    diceRoller(die) {
      let result = Math.floor(Math.random() * die) + 1;
      this.$store.state.roll = result;
      this.$store.state.showRollModal = true;
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
    },
    regRoll(bonus, challenge) {
      this.$store.state.showRollModal = true;
      this.$store.state.roll = this.diceRoller(20);
      const success = this.$store.state.roll + bonus;
      this.$store.state.defense = challenge;
      const defr = this.$store.state.defense;
      if(this.$store.state.roll === 20) {
        this.$store.state.rollMessage = "Natural 20!!";
      }
      if(this.$store.state.roll === 1) {
        this.$store.state.rollMessage = "Oh, it's a 1...";
      }
      if (success > defr) {
        this.$store.state.rollMessage = "Success!";
      } else {
        this.$store.state.rollMessage = "Miss";
      }
    },
    attack(atkr, defr, cost) {
      this.$store.state.bonus = this.baseAttack;
      this.$store.state.showRollModal = true;
      this.$store.state.roll = this.diceRoller(20);
      const hit = this.$store.state.roll + atkr;
      this.endurance = this.endurance - cost;
      if(this.$store.state.roll === 20) {
        this.$store.state.rollMessage = "Natural 20!!";
      }
      if(this.$store.state.roll === 1) {
        this.$store.state.rollMessage = "Oh, it's a 1...";
      }
      if (hit > defr) {
        this.$store.state.rollMessage = "It's a Hit!";
      } else {
        this.$store.state.rollMessage = "Miss";
      }
    },
    cast(dmg, defr, cost) {
      this.sorcery = this.sorcery - cost;
    }
  }
})