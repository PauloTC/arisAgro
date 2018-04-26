<template lang="pug">
    .listatop
        .title
            p TOP CLIENTES {{ items.nombre }}
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
    // data:{
    //     return:{
    //     }
    // }
}
</script>
