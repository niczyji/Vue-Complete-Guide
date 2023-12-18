const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Luise",
          phone: "12412344214",
          email: "manuel@example.com",
        },
        {
          id: "sophia",
          name: "Sophia Martinez",
          phone: "3125550198",
          email: "sophia.martinez@example.com",
        },
        {
          id: "alex",
          name: "Alex Johnson",
          phone: "4155550269",
          email: "alex.johnson@example.com",
        },
        {
          id: "lisa",
          name: "Lisa Chang",
          phone: "3235550731",
          email: "lisa.chang@example.com",
        },
        {
          id: "omar",
          name: "Omar Hassan",
          phone: "2135550812",
          email: "omar.hassan@example.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
   </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Luise",
        phone: "12412344214",
        email: "manuel@example.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
