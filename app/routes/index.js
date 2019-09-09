import LoginView from '../views/login/Login.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';

export const routes = {
	'/login': {
		component: LoginView,
		meta: { needsAuth: false },
	},
	'/dashboard': {
		component: Dashboard,
		meta: { needsAuth: true },
	},
};
