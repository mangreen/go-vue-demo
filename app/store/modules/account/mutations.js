import * as types from './mutations_types.js'
import Vue from 'vue'

export const state = {};

export const mutations = {
  	[types.LOGIN] (state, email) {
		state.email = email;
		console.log('LOGIN', 'state?', state);
  	},
};