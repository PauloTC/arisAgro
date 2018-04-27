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
    setDataSet(state, datos){
        if(datos){
            state.datasets[datos.index].data = datos.territorioSeleccionado.ventas
        } 
    },
    setDataSet1(state, datos){
        if(datos){
            state.datasets[datos.index].data = datos.zonaSeleccionada.ventas
        } 
    },
    setDataSet2(state, datos){
        console.log(datos.vendedor)
        if(datos){
            state.datasets[datos.index].data = datos.vendedor.ventas
        } 
    }    
}