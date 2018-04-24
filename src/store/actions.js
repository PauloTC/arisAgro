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
    agregardata({ commit, ventas }){
        var bar = {
                backgroundColor: 'rgb(73, 215, 187)',
                borderColor: 'rgb(255, 99, 132)',
                data: [30.000, 19.000, 15.000, 22.000, 26.000, 30.000, 36.000, 80.000, 56.000, 75.000, 25.000, 35.000],
            }
        commit('setDataSet', bar )
    }
}