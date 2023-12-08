const app = Vue.createApp({
  data() {
    return {
      monsterHP: 200,
      playerHP: 200,
      battleLog: [],
      disabledSpecialAttack: true,
      canHeal: false,
    };
  },
  methods: {
    attackButton() {
      let damageMonsterHP = Math.floor(Math.random() * 21);
      let damagePlayerHP = Math.floor(Math.random() * 21);

      this.battleLog.push(`Monster attacks and deals ${damagePlayerHP}`);
      this.battleLog.push(`Player attacks and deals ${damageMonsterHP}`);

      this.monsterHP = this.monsterHP - damageMonsterHP;
      this.playerHP = this.playerHP - damagePlayerHP;
      this.canHeal = true;
    },
    specialAttackButton() {
      let damageMonsterHP = Math.floor(Math.random() * 21);
      let damagePlayerHP = Math.floor(Math.random() * 41);
      this.battleLog.push(`Monster attacks and deals ${damagePlayerHP}`);
      this.battleLog.push(`Player attacks and deals ${damageMonsterHP}`);
      this.monsterHP = this.monsterHP - damageMonsterHP;
      this.disabledSpecialAttack = !this.disabledSpecialAttack;
      this.canHeal = true;
    },
    healButton() {
      if (this.canHeal) {
        let healAmount = Math.floor(Math.random() * 21);
        this.playerHP =
          this.playerHP + healAmount > 200 ? 200 : this.playerHP + healAmount;
        this.battleLog.push(`Player heals for ${healAmount}`);
        this.disabledSpecialAttack = !this.disabledSpecialAttack;
        this.canHeal = false;
      }
    },
    startNewGame() {
      this.monsterHP = 200;
      this.playerHP = 200;
      this.battleLog = [];
      this.disabledSpecialAttack = true;
      this.canHeal = false;
    },
  },
  computed: {
    monsterHealthBarWidth() {
      return this.monsterHP < 1 ? "0%" : (this.monsterHP / 200) * 100 + "%";
    },
    playerHealthBarWidth() {
      return this.playerHP < 1 ? "0%" : (this.playerHP / 200) * 100 + "%";
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
