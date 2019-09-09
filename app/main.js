import Vue from 'nativescript-vue';
import App from './views/App.vue';

import VueDevtools from 'nativescript-vue-devtools';
import Navigator from 'nativescript-vue-navigator';
import { routes } from './routes';
import { store } from './store';

//Tailwind CSS
import 'nativescript-tailwind/dist/tailwind.css';

// Components
import StatusBarPlugin from 'nativescript-systemui/vue';
import ActivityIndicatorPlugin from 'nativescript-material-activityindicator/vue';
// import CardViewPlugin from 'nativescript-material-cardview/vue';
// import RipplePlugin from 'nativescript-material-ripple/vue';
import FloatingActionButtonPlugin from 'nativescript-material-floatingactionbutton/vue';
// import SliderPlugin from 'nativescript-material-slider/vue';
// import ProgressPlugin from 'nativescript-material-progress/vue';
// import BottomNavigationBar from 'nativescript-bottom-navigation/vue';
import BubbleNavigation from 'nativescript-bubble-navigation/vue';

// Navigation - Route
Vue.use(Navigator, { routes });

if (TNS_ENV !== 'production') {
	Vue.use(VueDevtools);
}

Vue.use(StatusBarPlugin);
Vue.use(ActivityIndicatorPlugin);
// Vue.use(CardViewPlugin);
Vue.use(FloatingActionButtonPlugin);
// Vue.use(SliderPlugin);
// Vue.use(ProgressPlugin);
// Vue.use(BottomNavigationBar);
Vue.use(BubbleNavigation);

Vue.config.silent = TNS_ENV === 'production';

new Vue({
	store,
	render: h => h(App),
}).$start();
