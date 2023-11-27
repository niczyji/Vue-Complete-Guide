const app = Vue.createApp({
  data() {
    return {
      goals: [],
      inputClass: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputClass);
      console.log(this.goals);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
