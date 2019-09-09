export default {
	data() {
		return {
			userName: null,
			password: null,
		};
	},
	methods: {
		submitLogin() {
			this.$navigator.navigate('/dashboard', { clearHistory: true });
		},
	},
};
