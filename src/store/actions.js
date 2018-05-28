export default {
    fechaActual({ commit }) {
        this.$moment.locale('es')
        commit('setFecha', this.$moment())
    },
    cambiarMes({ commit, state }, aumentar) {
        // todo: llamar a servicios
        // ejemplo
        // commit('setProductos', state.productos.reverse())
        commit(aumentar ? 'aumentarFecha' : 'disminuirFecha')
    },
    agregardata1({ commit,state }, data){
        if(data) commit('setDataSet', data)  
    },
    agregardata2({ commit,state }, data){
        if(data) commit('setDataSet1', data)
    },
    agregardata3({ commit,state }, data){
        console.log(data)
        if(data) commit('setDataSet2', data)
    },
}