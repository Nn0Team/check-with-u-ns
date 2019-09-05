import Vue from 'nativescript-vue';
import App from './App.vue';

import VueDevtools from 'nativescript-vue-devtools';
import store from './store';

if (TNS_ENV !== 'production') {
	Vue.use(VueDevtools);
}

Vue.config.silent = TNS_ENV === 'production';

new Vue({
	store,
	render: h => h('frame', [h(App)]),
}).$start();
