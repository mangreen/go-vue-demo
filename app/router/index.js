import Vue from 'vue'
import Router from 'vue-router'

import store from '../store';

const login = () => import('@/pages/login')
const count = () => import('@/pages/count')

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'home',
		component: login
	}, {
		path: '/login',
		name: 'login',
		component: login
	}, {
		path: '/count',
		name: 'count',
		component: count
	}, { 
		path: '/*', redirect: '/' 
	}]
})

export default router;
