const app = Vue.createApp({
  data() {
    return {
      registeredUser: "",
      enteredUser: "",
    };
  },
  methods: {
    showAlert() {
      console.log("Alert");
    },
    registerUser(e) {
      console.log(e);
      this.registeredUser = e.target.value;
    },
    registerEnterUser(e) {
      this.enteredUser = e.target.value;
    },
  },
});

app.mount("#assignment");
