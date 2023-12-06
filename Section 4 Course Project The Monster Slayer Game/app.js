const app = Vue.createApp({
  data() {
    return {
      monsterHP: 200,
      playerHP: 200,
    };
  },
  methods: {
    attackButton() {
      let damageMonsterHP = Math.floor(Math.random() * 21);
      let damagePlayerHP = Math.floor(Math.random() * 21);
      console.log(
        "Damage to Player:",
        damagePlayerHP,
        "Damage to Monster:",
        damageMonsterHP
      );
      this.monsterHP = this.monsterHP - damageMonsterHP;
      this.playerHP = this.playerHP - damagePlayerHP;
      console.log("Player HP:", this.playerHP, "Monster HP:", this.monsterHP);
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
