import Vue from 'vue';
import Vuex from 'vuex';

import mainModule from './mainModule';
import registerModule from './registerModule';
import loginModule from './loginModule';
import userModule from './userModule';
import dashboardModule from './dashboardModule';

Vue.use(Vuex);

export default function() {
	const Store = new Vuex.Store({
		modules: {
			mainModule,
			registerModule,
			loginModule,
			userModule,
			dashboardModule,
		},
	});

	return Store;
}
