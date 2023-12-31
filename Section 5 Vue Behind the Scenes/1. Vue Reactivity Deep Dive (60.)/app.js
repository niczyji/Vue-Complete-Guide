const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userText.value;
      console.log(this.$refs.userText.value);
      console.dir(this.$refs.userText.value);
    },
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "Burger",
    };
  },
});

app2.mount("#app2");

const data = {
  message: "Hello!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Helllooo!!!";

console.log(proxy.longMessage);
