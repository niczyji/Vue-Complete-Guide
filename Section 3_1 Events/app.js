const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "Mika",
    };
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    removeCounter(num) {
      this.counter = this.counter - num;
    },
    updateName(e) {
      this.name = e.target.value;
    },
  },
});

app.mount("#events");
