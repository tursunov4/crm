export default {
    namespade:true,
    state:{
        counter:13
    },
    getters:{
        getCounter(state){
            return state.counter
        }
    },
    mutations:{
        addCounter(state,i){
            state.counter +=i
        }
    },
    actions:{
        addCounter({commit}){
            commit('addCounter',1)
        }
    },
    modules:{

    }
}