export const getCount = (state, getters, rootState, rootGetters) => {
	console.log(state, getters, rootState, rootGetters);
	return state.count 
}