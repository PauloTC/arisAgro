export default {
    setFecha(state, fecha) {
        state.fecha = fecha
    },
    disminuirFecha(state) {
        state.fecha = state.fecha.clone().add(-1, 'month')
    },
    aumentarFecha(state) {
        const newFecha = state.fecha.clone().add(1, 'month')
        if (newFecha.diff(this.$moment().clone(), 'months') <= 0)
            state.fecha = newFecha;
    },
    setProductos(state, productos) {
        state.productos = productos
    },
    setDataSet(state, datasets){
        state.datasets = [ datasets ]
    }
}