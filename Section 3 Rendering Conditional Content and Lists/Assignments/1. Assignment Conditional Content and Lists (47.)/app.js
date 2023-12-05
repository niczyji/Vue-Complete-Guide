const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputTask: "",
      isActive: false,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
      console.log(this.tasks);
    },
    toggleButton() {
      this.isActive = !this.isActive;
    },
  },
});

app.mount("#assignment");
