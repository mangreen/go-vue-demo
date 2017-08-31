import Vue from 'vue';

import * as types from './mutations_types.js';

export const setLanguage = ({ dispatch, commit, getters, rootGetters }, lang) => {
  	commit(types.LANGUAGE, lang);
}