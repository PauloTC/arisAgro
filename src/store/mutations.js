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
    setDataSet(state, data){
        console.log(data)
        if(data != undefined){
            state.datasets[0].data = data[0].ventas
            // state.datasets[1].data = data[1].ventas
            // state.datasets[2].data = data[2].ventas
        } 
    }    
}