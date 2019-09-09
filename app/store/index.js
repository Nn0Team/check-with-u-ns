import Vue from 'vue';
import Vuex from 'vuex';

import registerModule from './modules/registerModule';
import userModule from './modules/userModule';
import dashboardModule from './modules/dashboardModule';

Vue.use(Vuex);

export const store = new Vuex.Store({
	strict: TNS_ENV !== 'production',
	modules: {
		registerModule,
		userModule,
		dashboardModule,
	},
});

Vue.prototype.$store = store;
