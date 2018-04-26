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
    agregardata({ commit,state }, ventas){
        console.log(ventas)
        commit('setDataSet', ventas)
    }
}