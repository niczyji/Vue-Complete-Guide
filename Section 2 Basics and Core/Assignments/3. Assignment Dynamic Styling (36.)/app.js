const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
    };
  },
  methods: {
    appliedClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
      };
    },
  },
});

app.mount("#assignment");
