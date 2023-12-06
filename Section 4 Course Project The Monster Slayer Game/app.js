const app = Vue.createApp({
  data() {
    return {
      playerHP: 200,
      monsterHP: 200,
    };
  },
  methods: {
    attackButton() {
        damagePlayerHP = Math.floor(Math.random() * 21);
        damageMonsterHP = Math.floor(Math.random() * 21);
        console.log(damagePlayerHP, damageMonsterHP);
        this.playerHP = this.playerHP - damagePlayerHP;
        this.monsterHP =  this.monsterHP - damageMonsterHP;
        console.log("Player HP:", this.playerHP, "Monster HP:", this.monsterHP);    },
  },
  computed: {
    updateHealthBars() {

    },
  },
});

app.mount("#game");
