<template lang="pug">
    .mini-card
        span {{ (vendedorSeleccionado || {}).nombre || 'NINGUNO'}}
        a.modal-trigger.cambiar(:href='"#" + modalId') cambiar
         div(:id='modalId').modal.modal-fixed-footer
            .modal-header
                h6 SELECCIONE VENDEDORES
            .modal-content
                input.buscar(placeholder='Buscar por nombres o apellidos' v-model='valorInput')
                a.waves-effect
                    i.material-icons.left search
                .col.s6(style='padding:0')
                    ul 
                        li(v-for='(item,i) in arrayVendedores' @click='mostrarZonas(item,i)' :class='{ "activediv": item.id == isactive }') {{ item.nombre }}
                .col.s6(style='padding:0')
                    .content-item(v-for='(item, i) in zonasVendedor')
                        label.config-radio  
                            input(type='checkbox' class="filled-in" name='group3' v-model='zonas')
                            span
                            p {{ item }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarVendedor(); agregardata2({vendedor, index})') Aceptar
</template>
<script>
import { v4 } from 'uuid';
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'minicard3',
    props:['index'],
    data:function(){
        const { vendedores } = this.$store.state
        return{
            modalId: v4(),
            vendedorSeleccionadoModal: null,
            vendedorSeleccionado: null,
            valorInput:'',
            isactive:'',
            index1:'',
            indexVendedor:0,
            vendedores,
            indice: this.index,
            vendedor:[]
        }
    },
    methods:{
        ...mapActions({
            agregardata2: 'agregardata2',
        }),
        mostrarZonas:function(item,i){
            console.log(item)
            this.vendedor = item;
            this.isactive = item.id;
            this.index1 = i
            this.vendedorSeleccionadoModal = item.nombre;      
        },
        cambiarVendedor:function(){
            this.vendedorSeleccionado = this.vendedorSeleccionadoModal;
            this.indexTerrirorio = this.index1;
            this.$emit('vendedor', {valor:this.vendedorSeleccionado, indice:this.indice, chartData: this.chartData1})
        }, 
    },
    computed:{
        arrayVendedores:function(){
            // console.log(this.valorInput);
            const vendedores = this.vendedores.filter((element,i) => {         
                const filtrado = element.nombre.toLowerCase();
                console.log(filtrado)
                return filtrado.indexOf(this.valorInput.toLowerCase()) > -1;
            });
            return vendedores.length ? vendedores : this.vendedores
                // return vendedores
        }, 
        zonasVendedor:function(){
    
                // return this.arrayVendedores.length ? this.arrayVendedores[this.indexVendedor].zonas : ''  
            
        },
        ...mapGetters({
            chartData1 : 'chartDataset',
            mesActual: 'mesActual',
            labels: 'labels'
        }),
    }
}
</script>
<style>
    .activediv{
        background-color: #CDD8E3!important;
    }
    .show{
        opacity: 1!important;
    }
</style>
