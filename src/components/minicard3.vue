<template lang="pug">
    .mini-card
        .divleft
        span.ninguno {{ (vendedorSeleccionado || {}).nombre || 'NINGUNO'}}
        a.modal-trigger.cambiar(:href='"#" + modalId') cambiar
         div(:id='modalId').modal.modal-fixed-footer.modal3
            .modal-header
                h6 SELECCIONE VENDEDORES
            .modal-content
                input.buscar(placeholder='Buscar por nombres o apellidos' v-model='valorInput')
                a.waves-effect
                    i.material-icons.left search
                .col.s6(style='padding:0')
                    ul 
                        li(v-for='(item,i) in arrayVendedores' @click='mostrarZonas(item,i)' :class='{ "activediv": item.id == indexVendedor }') {{ item.nombre }}
                .col.s6(style='padding:0')
                    .content-item(v-for='(item, i) in zonasVendedor' :class='{ check: item.id == i }')
                        label.config-radio  
                            input(type='checkbox' class="filled-in" name='group3' value='item' @click='zona(item)')
                            span
                            p {{ item }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarVendedor(); agregardata2({vendedor, indice})') Aceptar
</template>
<script>
import { v4 } from 'uuid';
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'minicard3',
    props:['indice'],
    data:function(){
        const { vendedores } = this.$store.state
        return{
            modalId: v4(),
            vendedorSeleccionadoModal: null,
            vendedorSeleccionado: null,
            valorInput:'',
            indexVendedor:'',
            isactiveRadio:'',
            // index:'',
            indexZona:null,
            vendedores,
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
            this.indexVendedor = item.id;
            this.vendedorSeleccionadoModal = item.nombre; 
            console.log(this.zonasVendedor)    
        },
        cambiarVendedor:function(){
            this.vendedorSeleccionado = this.vendedorSeleccionadoModal;
            this.indexVendedor = this.isactive;
            this.$emit('vendedor', {valor:this.vendedorSeleccionado, indice:this.indice, chartData: this.chartData1})
        },
        zona(val){
            console.log(val)
        } 
    },
    computed:{
        arrayVendedores:function(){
            const vendedores = this.vendedores.filter((element,i) => {         
                const filtrado = element.nombre.toLowerCase();
                return filtrado.indexOf(this.valorInput.toLowerCase()) > -1;
            });
            return vendedores.length ? vendedores : this.vendedores
        }, 
        zonasVendedor:function(){
            if(this.indexZona!=null){
                return this.arrayVendedores.length? this.arrayVendedores[this.indexVendedor].zonas: '';
            }                
        },
        ...mapGetters({
            chartData1 : 'chartDataset',
            mesActual: 'mesActual',
            labels: 'labels'
        }),
    },
    mounted: function () {
        this.$nextTick(function () {
            $('.modal3').modal({
                dismissible: false
            });
        })
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
    .check{
        background-color: #768EA6!important;
        color: #ffffff!important;
    }
</style>
