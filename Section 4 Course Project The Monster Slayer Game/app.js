function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHP: 200,
      playerHP: 200,
      currentRound: 0,
      battleLog: [],
    };
  },
  methods: {
    attackButton() {
      this.currentRound++;

      let damageMonsterHP = getRandomValue(5, 21);
      let damagePlayerHP = getRandomValue(10, 31);

      this.monsterHP = this.monsterHP - damageMonsterHP;
      this.playerHP = this.playerHP - damagePlayerHP;

      this.battleLog.push(`Monster attacks and deals ${damagePlayerHP}`);
      this.battleLog.push(`Player attacks and deals ${damageMonsterHP}`);
    },
    specialAttackButton() {
      this.currentRound++;

      let damageMonsterHP = getRandomValue(15, 51);
      let damagePlayerHP = getRandomValue(10, 31);

      this.monsterHP = this.monsterHP - damageMonsterHP;

      this.battleLog.push(`Monster attacks and deals ${damagePlayerHP}`);
      this.battleLog.push(`Player attacks and deals ${damageMonsterHP}`);
    },
    healPlayerButton() {
      let healAmount = getRandomValue(15, 25);

      this.playerHP =
        this.playerHP + healAmount > 200 ? 200 : this.playerHP + healAmount;

      this.battleLog.push(`Player heals for ${healAmount}`);
    },
    startNewGame() {
      this.monsterHP = 200;
      this.playerHP = 200;
      this.battleLog = [];
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealthBarWidth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealthBarWidth + "%" };
    },
    mayUseSpacialAttack() {
      return this.currentRound % 3 !== 0;
    },
    monsterHealthBarWidth() {
      return this.monsterHP < 1 ? "0" : (this.monsterHP / 200) * 100;
    },
    playerHealthBarWidth() {
      return this.playerHP < 1 ? "0" : (this.playerHP / 200) * 100;
    },
    winCondition() {
      if (this.monsterHP <= 0) {
        return "Player Wins!";
      } else if (this.playerHP <= 0) {
        return "Monster Wins!";
      }
      return "";
    },
  },
});

app.mount("#game");
