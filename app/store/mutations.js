// 為了設定語系引入 Vue
import Vue from 'vue';

import * as types from './mutations_types.js';

import i18n from '../i18n';

export const state = {
	lang: i18n.locale,
};

export const mutations = {
	[types.LOADING] (state, isLoading) {
		state.loading = isLoading;
	},
	[types.TOKEN] (state, token) {
		state.token = token;
	},
	[types.LANGUAGE] (state, setlang) {    
		state.lang = setlang;
		i18n.locale = setlang;
		window.localStorage.language = setlang;
	},
};
