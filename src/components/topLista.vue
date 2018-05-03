<template lang="pug">
        div 
            table.striped
                tbody(v-if="items")
                    tr(v-for='(elem,i) in limiteClientes' :key="i")
                        td {{ i + 1 }}
                        td {{ elem.nombre }}
                        td USD {{ elem.venta }}
                        td 
</template>
<script>
export default {
    name:'topLista',
    props:['items'],
    computed:{
        limiteClientes: function(){
            let clientesArray = this.items.clientes;
            let clientesOrdenados = clientesArray.slice().sort(function(a,b){
                let x = (a.venta),
                    y = (b.venta);

                return ((x > y)? -1:((x < y)? 1: 0))
            })
            if (clientesOrdenados.length > 10){
                clientesOrdenados = clientesOrdenados.slice(0,10);
            }
            return clientesOrdenados;
        }
    }
}
</script>
