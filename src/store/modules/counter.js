export const TYPES = {
    SET_COUNTER_INCREMENT: "SET_COUNTER_INCREMENT",
    SET_COUNTER_DECREMENT: "SET_COUNTER_DECREMENT",
};
  
  const counterModule = {
    namespaced: true,
    state: {
      counter: 0,
    },
    mutations: {
      [TYPES.SET_COUNTER_INCREMENT]: (state) => (state.counter += 1),
      [TYPES.SET_COUNTER_DECREMENT]: (state) => (state.counter -= 1),
    },
    actions: {
      setIncrementCounter({ commit }) {
        commit(TYPES.SET_COUNTER_INCREMENT);
      },
      setDecrementCounter({commit}) {
        commit(TYPES.SET_COUNTER_DECREMENT);
      },
    },
    getters: {
      getCounter: (state) => state.counter,
    },
  };
  
  export default counterModule;
  