import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations.js'
import * as getters from './getters.js'
import * as actions from './actions.js'

/*
  因為我們把 vuex 所有職權都寫在同一隻檔案，
  所以必須要 export 出去給最外層 index.js 組合使用
*/
export default {
	namespaced: true,
  	state,
  	getters,
  	actions,
  	mutations
}