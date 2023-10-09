const app = Vue.createApp({
  data() {
    return {
      name: "Mika",
      age: 31,
      randomPic:
        "https://www.leadersnet.de/resources/images/2023/7/17/127424/tesla-cybertruck-c-elon-mus.jpg",
    };
  },
  methods: {
    randomNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");
