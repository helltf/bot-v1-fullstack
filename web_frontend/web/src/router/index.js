import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import LogoutPage from '../pages/LogoutPage.vue'
import EmptyPage from '../pages/EmptyPage.vue'
import CommandPage from '../pages/CommandPage.vue'
import StatsPage from '../pages/StatsPage.vue'

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
		path: '/:access_token',
		name: 'HomeWithToken',
		component: HomePage,
		redirect: () => {
			return {
				name: 'Home',
			}
		},
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
		path: '/user-info/',
		name: 'User',
		component: EmptyPage,
	},
	{
		path: '/stats',
		name: 'Stats',
		component: StatsPage,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
