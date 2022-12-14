import Vue from 'vue'
import Vuex from 'vuex'
import counterModule from './modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    CounterModule: counterModule
  }
})
