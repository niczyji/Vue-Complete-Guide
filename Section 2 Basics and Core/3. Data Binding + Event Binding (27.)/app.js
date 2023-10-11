const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      //fullname: "",
    };
  },
  watch: {
    /*     name(value) {
      if (value === "") {
        this.fullname = "";
      }
      this.fullname = value + " " + this.lastName;
    },
    lastName(value) {
      if (value === "") {
        this.fullname = "";
      }
      this.fullname = this.name + " " + value;
    }, */
  },
  computed: {
    fullname() {
      console.log("Count");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
