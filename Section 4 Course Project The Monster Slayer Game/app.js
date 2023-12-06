const app = Vue.createApp({
  data() {
    return {
      monsterHP: 200,
      playerHP: 200,
      battleLog: [],
      disabledSpecialAttack: true,
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
    },
    specialAttackButton() {
        let damageMonsterHP = Math.floor(Math.random() * 21);
        let damagePlayerHP = Math.floor(Math.random() * 41);
        this.battleLog.push(`Monster attacks and deals ${damagePlayerHP}`);
        this.battleLog.push(`Player attacks and deals ${damageMonsterHP}`);
        this.disabledSpecialAttack = !this.disabledSpecialAttack;
    },
    healButton() {
      let healAmount = Math.floor(Math.random() * 21);
      this.playerHP = this.playerHP + healAmount > 200 ? 200 : this.playerHP + healAmount;
      this.battleLog.push(`Player heals for ${healAmount}`);
      this.disabledSpecialAttack = !this.disabledSpecialAttack;
    },
  },
  computed: {
    monsterHealthBarWidth() {
       return this.monsterHP < 1 ? "0%" : (this.monsterHP / 200) * 100 + "%"
    },
    playerHealthBarWidth() {
        return this.playerHP < 1 ? "0%" : (this.playerHP / 200) * 100 + "%"
    },
  },
});

app.mount("#game");
