import Vue from 'vue'

import mutations from './mutations'
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_types.js'

export const actionIncrease = ({ dispatch, commit, getters, rootGetters }, num) => {
  console.log('actionIncrease', num);
  commit(types.INCREASE, +num);
}

export const actionDecrease = ({ dispatch, commit, getters, rootGetters }, num) => {
  console.log('actionDecrease', num);
  commit(types.DECREASE, +num);
}

export const actionCountReset = ({ dispatch, commit, getters, rootGetters }) => {
  console.log('actionCountReset');
  commit(types.COUNT_RESET);
}