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
        if(datos.territorioSeleccionado!=null && datos.territorioSeleccionado){
            state.datasets1[datos.indice].data = datos.territorioSeleccionado.ventas
        } 
    },
    setDataSet1(state, datos){
        if(datos.zonaSeleccionada!=null && datos.zonaSeleccionada){
            console.log(datos.indice)        
            state.datasets2[datos.indice].data = datos.zonaSeleccionada.ventas;
        } 
    },
    setDataSet2(state, datos){
        if(datos.vendedor!=null && datos.Vendedor){
            state.datasets3[datos.indice].data = datos.vendedor.ventas
        }
        console.log(state.datasets3) 
    }    
}