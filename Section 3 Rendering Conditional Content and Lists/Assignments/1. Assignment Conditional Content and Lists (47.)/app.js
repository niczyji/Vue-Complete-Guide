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
      this.tasks.push(this.inputTask)
      console.log(this.tasks);
     },
     toggleButton() {
      if (!this.isActive) {
        this.isActive = true;
        console.log("Active");
      } else {
        this.isActive = false;
        console.log("Not Active");
      }
     }
    },
  });
  
  app.mount("#assignment");
  