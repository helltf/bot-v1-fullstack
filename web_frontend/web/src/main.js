import {createApp, h} from "vue"
import App  from "./App.vue"
import router from './router' 
import { globalCookiesConfig } from "vue3-cookies";

globalCookiesConfig({
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
  });
  
const app = createApp({
    render: () => h(App)
}).use(router)

app.provide('user', {
  signed_in: null
})

app.mount('#app')

