const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxA };
    },
    boxBClasses() {
      return { active: this.boxB };
    },
    boxCClasses() {
      return { active: this.boxC };
    },
  },
  methods: {
    isSelected(box) {
      if (box === "A") {
        this.boxA = !this.boxA;
      } else if (box === "B") {
        this.boxB = !this.boxB;
      } else if (box === "C") {
        this.boxC = !this.boxC;
      }
    },
  },
});

app.mount("#styling");
