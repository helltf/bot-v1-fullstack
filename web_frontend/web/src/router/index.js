import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import LogoutPage from '../pages/LogoutPage.vue'
import EmptyPage from '../pages/EmptyPage.vue'
import CommandPage from '../pages/CommandPage.vue'

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: LoginPage,
	},
	{
		path: '/logout',
		name: 'Logout',
		component: LogoutPage,
	},
	{
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/about',
		name: 'About',
		component: EmptyPage,
	},
	{
		path: '/commands',
		name: 'Commands',
		component: CommandPage,
	},
	{
		path: '/user-info',
		name: 'User',
		component: EmptyPage,
	},
	{
		path: '/weather',
		name: 'Weather',
		component: EmptyPage,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
