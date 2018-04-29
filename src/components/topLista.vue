<template lang="pug">
        div 
            table.striped
                tbody(v-if="items")
                    tr(v-for='(elem,i) in items.clientes' :key="i")
                        td {{ i + 1 }}
                        td {{ elem.nombre }}
                        td {{ elem.venta }}
</template>
<script>
export default {
    name:'topLista',
    props:['items'],
    data:function(){
        return{
            // element: this.items
        }
    }
}
</script>
