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
      this.boxA = box === "A";
      this.boxB = box === "B";
      this.boxC = box === "C";
    },
  },
});

app.mount("#styling");
