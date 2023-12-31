const MAX_HP = 200;

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHP: MAX_HP,
      playerHP: MAX_HP,
      currentRound: 0,
      battleLog: [],
      winner: null,
    };
  },
  methods: {
    attackMonster() {
      const damage = getRandomValue(5, 12);
      this.monsterHP = Math.max(this.monsterHP - damage, 0);
      this.addLogMessage("player", "attack", attackValue);
    },
    attackPlayer() {
      const damage = getRandomValue(8, 31);
      this.playerHP = Math.max(this.playerHP - damage, 0);
      this.addLogMessage("monster", "attack", attackValue);
    },
    attackButton() {
      this.currentRound++;
      this.attackMonster();
      this.attackPlayer();
    },
    specialAttackButton() {
      this.currentRound++;
      const damage = getRandomValue(10, 25);
      this.monsterHP = Math.max(this.monsterHP - damage, 0);
      this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    healPlayerButton() {
      this.currentRound++;
      const healAmount = getRandomValue(8, 20);
      this.playerHP = Math.min(this.playerHP + healAmount, MAX_HP);
      this.addLogMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    startNewGame() {
      this.monsterHP = MAX_HP;
      this.playerHP = MAX_HP;
      this.currentRound = 0;
      this.battleLog = [];
      this.winner = null;
    },
    surrenderButton() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  watch: {
    playerHP(value) {
      if (value <= 0 && this.monsterHP <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHP(value) {
      if (value <= 0 && this.playerHP <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: (this.monsterHP / MAX_HP) * 100 + "%" };
    },
    playerBarStyles() {
      return { width: (this.playerHP / MAX_HP) * 100 + "%" };
    },
    mayUseSpacialAttack() {
      return this.currentRound % 3 !== 0;
    },
    monsterHealthBarWidth() {
      return this.monsterHP < 1 ? "0" : (this.monsterHP / MAX_HP) * 100;
    },
    playerHealthBarWidth() {
      return this.playerHP < 1 ? "0" : (this.playerHP / MAX_HP) * 100;
    },
  },
});

app.mount("#game");
