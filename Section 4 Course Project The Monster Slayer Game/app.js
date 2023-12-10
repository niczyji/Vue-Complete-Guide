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
      const damage = getRandomValue(5, 12);
      this.monsterHP = Math.max(this.monsterHP - damage, 0);
      this.battleLog.push(`Player attacks and deals ${damage}`);
    },
    attackPlayer() {
      const damage = getRandomValue(8, 31);
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
      const damage = getRandomValue(10, 25);
      this.monsterHP = Math.max(this.monsterHP - damage, 0);
      this.battleLog.push(
        `Player performs a special attack and deals ${damage}`
      );
      this.attackPlayer();
    },
    healPlayerButton() {
      this.currentRound++;
      const healAmount = getRandomValue(8, 20);
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
  watch: {
    winCondition() {
      if (this.monsterHP <= 0 && this.playerHP <= 0) {
        return "Even! Both players have 0 HP";
      } else if (this.monsterHP <= 0) {
        return "Player Wins!";
      } else if (this.playerHP <= 0) {
        return "Monster Wins!";
      }
      return "";
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
