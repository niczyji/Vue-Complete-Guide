import { createApp } from "vue";

// Definiere eine einfache Komponente
const App = {
  template: `
    <div id="app">
      <h1>Hello Vue!</h1>
      <button @click="count++">Klick mich</button>
      <p>Du hast {{ count }} mal geklickt.</p>
    </div>
  `,
  data() {
    return {
      count: 0,
    };
  },
};

// Initialisiere und mounte die Vue-App
createApp(App).mount("#app");
