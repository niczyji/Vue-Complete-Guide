<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">
      {{ friendIsFavorite === "1" ? "Unfavorite" : "Favorite" }}
    </button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if (this.friendIsFavorite === true) {
        this.friendIsFavorite = false;
      } else {
        this.friendIsFavorite = true;
      }
    },
  },
};
</script>
