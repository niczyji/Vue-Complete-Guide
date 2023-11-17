const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      isVisible: true,
      inlineStyling: "",
    };
  },
  methods: {
    toggleClasses() {
      this.isVisible = !this.isVisible;
    },
  },
  computed: {
    appliedClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
      };
    },
    visibleClass() {
      return {
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
});

app.mount("#assignment");
