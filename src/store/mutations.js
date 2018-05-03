export default {
    setFecha(state, fecha) {
        state.fecha = fecha
    },
    disminuirFecha(state) {
        state.fecha = state.fecha.clone().add(-1, 'month')
    },
    aumentarFecha(state) {
        const newFecha = state.fecha.clone().add(1, 'month')
        if (newFecha.diff(this.$moment().clone(), 'months') < 1)
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
        let venta=0;
        let ventaTotal='';
        let ids=[];    
        if(datos.vendedor!=null && datos.vendedor){
            ids = datos.zonasSeleccionadas.map(element=>element.id);
            
            const arrayVentas = datos.vendedor.ventas;

            venta = arrayVentas.map((element,i) => {
                if(ids.indexOf(i)>-1){
                    return element.venta
                }               
            }).filter(e=> e!=undefined)
             ventaTotal = venta.reduce((a, b)=> a + b);
             console.log(ventaTotal)
            state.datasets3[datos.indice].data = [ventaTotal,ventaTotal,ventaTotal,ventaTotal,ventaTotal,ventaTotal,ventaTotal,ventaTotal,ventaTotal,ventaTotal,ventaTotal,ventaTotal]
        }
        console.log(state.datasets3) 
    }    
}