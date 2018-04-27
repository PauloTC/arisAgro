<template lang="pug">
    .listatop
        .title 
            p  {{ items.nombre ||'NINGUNO' }}
        div
            table.striped
                tbody
                    tr(v-for='(elem,i) in items.clientes')
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
