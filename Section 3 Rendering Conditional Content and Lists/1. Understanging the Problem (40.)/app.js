const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      inputClass: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputClass);
      console.log(this.goals);
    },
  },
});

app.mount('#user-goals');
