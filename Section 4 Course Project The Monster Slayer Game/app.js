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
      this.currentRound++;

      let healAmount = getRandomValue(15, 25);

      this.playerHP =
        this.playerHP + healAmount > MAX_HP
          ? MAX_HP
          : this.playerHP + healAmount;

      this.battleLog.push(`Player heals for ${healAmount}`);
    },
    startNewGame() {
      this.monsterHP = MAX_HP;
      this.playerHP = MAX_HP;
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
      return this.monsterHP < 1 ? "0" : (this.monsterHP / MAX_HP) * 100;
    },
    playerHealthBarWidth() {
      return this.playerHP < 1 ? "0" : (this.playerHP / MAX_HP) * 100;
    },
    winCondition() {
      if (this.monsterHP <= 0) return "Player Wins!";
      if (this.playerHP <= 0) return "Monster Wins!";
      return "";
    },
  },
});

app.mount("#game");
