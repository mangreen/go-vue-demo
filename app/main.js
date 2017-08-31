import 'es6-promise/auto' //fixed ie11 bug "vuex requires a promise polyfill in this browser"

import Vue from 'vue'

import './directives';
import './filters';

import app from './App';
import router from './router';
import store from './store';
import i18n from './i18n';

//Vue.config.debug = false;
//Vue.config.devtools = false;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	i18n,
	store,
	render: h => h(app)
})
