const app = Vue.createApp({
  data() {
    return {
      input1: "",
      visible: true,
    };
  },
  methods: {
    getInput(event) {
      this.input1 = event.target.value;
      console.log(this.input1);  // This will print the value to the console
    },
    toggleVisibleHidden() {
      this.visible = !this.visible
      console.log(this.visible);
    },
  },
  computed: {
    toggleStyle() {
      if (this.visible == true) {
        return ".hidden"
      } else {
        return ".visible"
      }
    }
  }
});

app.mount("#assignment");
