import { createStore } from 'vuex'
import Counter from './counter/counter'
import Auth from './auth/auth'
export default createStore({
  // state:{
  //   count: 10,
  //   step: 13
  // },
  // getters:{
  //   getCount(state){
  //     return state.count
  //   },
  //   getStep(state){
  //     return state.step
  //   }
  // },
  // mutations:{
  //   addCount(state,i){
  //     state.count+=i
  //   },
  //   addStep(state,g){
  //     state.step+=g
  //   }
  // },
  // actions:{
  //   addCount({commit,state}){
  //     commit('addCount', state.step)
  //   },
  //   addStep({commit}){
  //     commit('addStep', 1)
  //   }
  // },
  modules: {
    Counter,
    Auth
  }
})
