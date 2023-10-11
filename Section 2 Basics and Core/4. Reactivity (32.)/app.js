const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
    };
  },
  methods: {
    isSelected(box) {
      if (box === "A") {
        this.boxA = true;
      } else if (box === "B") {
        this.boxB = true;
      } else if (box === "C") {
        this.boxC = true;
      }
    },
  },
});

app.mount("#styling");
