import { createApp } from 'vue';
import App from './App.vue'
import './index.css'
import './assets/tailwind.css'
import router from './router'
import VueGtag from "vue-gtag-next";



const app = createApp(App).use(router).use(router).use(router).use(router)
app.use(router)
app.use(VueGtag, {
    property: {
      id: "G-ZL5G5NKZBG"
    }
  });
app.mount("#app")
