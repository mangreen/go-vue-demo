import Vue from 'vue'
import axios from 'axios';

import mutations from './mutations'
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_types.js'

export const login = ({ dispatch, commit, getters, rootGetters }, account) => {
  	console.log('login');

  	return axios({
  			method: 'post',
  			url: '/api/login',
			data: {
				email: account.email,
				password: account.password
			}
	  	})
		.then((response) => {
		  	console.log("response", response);
		  	return response.data;
		})
		.catch(function (error) {
		    console.log("error", error);
		    return Promise.reject(error);
	  	});
  	
  	//commit(types.LOGIN, email);
}

export const logout = ({ dispatch, commit, getters, rootGetters }) => {
  	console.log('logout');
}

export const checkAuth = ({ dispatch, commit, getters, rootGetters }, account) => {
  	console.log('checkAuth');

  	return axios.post('/api/accounts')
		.then((response) => {
		  	console.log("response", response);
		  	return response.data;
		})
		.catch(function (error) {
		    console.log("error", error);
		    return Promise.reject(error);
	  	});
  	
  	//commit(types.LOGIN, email);
}