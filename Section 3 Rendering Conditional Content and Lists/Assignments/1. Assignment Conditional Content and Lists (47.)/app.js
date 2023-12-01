const app = Vue.createApp({
    data() {
      return {
        tasks: [],
        inputTask: "",
      };
    },
    methods: {
     addTask() {
      this.tasks.push(this.inputTask)
      console.log(this.tasks);
     }
    },
  });
  
  app.mount("#assignment");
  