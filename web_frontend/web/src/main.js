import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import { globalCookiesConfig } from 'vue3-cookies'
import Notifications from '@kyvg/vue3-notification'


globalCookiesConfig({
	expireTimes: '30d',
	path: '/',
	domain: '',
	secure: true,
	sameSite: 'None',
})

const app = createApp({
	render: () => h(App),
})
	.use(router)
	.use(Notifications)
	.provide('access_token', {token: undefined})

app.mount('#app')
