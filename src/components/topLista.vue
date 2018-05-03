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
            if (clientesArray.length > 10){
                clientesArray = clientesArray.slice(0,10);
            }
            return clientesArray;
        }
    }
}
</script>
