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
    attackMonster() {
      const damage = getRandomValue(5, 21);
      this.monsterHP = Math.max(this.monsterHP - damage, 0);
      this.battleLog.push(`Player attacks and deals ${damage}`);
    },
    attackPlayer() {
      const damage = getRandomValue(10, 31);
      this.playerHP = Math.max(this.playerHP - damage, 0);
      this.battleLog.push(`Monster attacks and deals ${damage}`);
    },
    attackButton() {
      this.currentRound++;
      this.attackMonster();
      this.attackPlayer();
    },
    specialAttackButton() {
      this.currentRound++;
      const damage = getRandomValue(15, 51);
      this.monsterHP = Math.max(this.monsterHP - damage, 0);
      this.battleLog.push(
        `Player performs a special attack and deals ${damage}`
      );
      this.attackPlayer();
    },
    healPlayerButton() {
      this.currentRound++;
      const healAmount = getRandomValue(15, 25);
      this.playerHP = Math.min(this.playerHP + healAmount, MAX_HP);
      this.battleLog.push(`Player heals for ${healAmount}`);
      this.attackPlayer();
    },
    startNewGame() {
      this.monsterHP = MAX_HP;
      this.playerHP = MAX_HP;
      this.currentRound = 0;
      this.battleLog = [];
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: (this.monsterHP / MAX_HP) * 100 + "%" };
    },
    playerBarStyles() {
      return { width: (this.playerHP / MAX_HP) * 100 + "%" };
    },
    winCondition() {
      if (this.monsterHP <= 0) return "Player Wins!";
      if (this.playerHP <= 0) return "Monster Wins!";
      return "";
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
