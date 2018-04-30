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
                        li(v-for='(item,i) in arrayVendedores' :key='item.id'  @click='mostrarZonas(item,i)' :class='{ "activediv": item.id == indexVendedor }') {{ item.nombre }}
                .col.s6(style='padding:0')
                    .content-item(v-for='(zona, i) in zonasVendedor' :class='{ check: zona.id == indexZona && valor }')
                        label.config-radio  
                            input(type='checkbox'  class="filled-in" name='group3' :key='i' @click='selecionarZona(zona,i)')
                            span
                            p {{ zona.nombre }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarVendedor(); agregardata3({vendedor, indice})') Aceptar
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
            indexVendedor:null,
            indexZona:'',
            indexZona:null,
            vendedores,
            vendedor:[],
            valor:false,
        }
    },
    methods:{
        ...mapActions({
            agregardata3: 'agregardata3',
        }),
        mostrarZonas:function(item,i){
            this.vendedor = item;
            this.indexVendedor = item.id;
            this.vendedorSeleccionadoModal = item.nombre; 
            console.log('Zonas:' + this.zonasVendedor)    
        },
        cambiarVendedor:function(){
            console.log(this.vendedor)
            this.vendedorSeleccionado = this.vendedorSeleccionadoModal;
            console.log(this.vendedorSeleccionado)
            this.$emit('vendedor', {valor:this.vendedorSeleccionado, indice:this.indice, chartData: this.chartData3})
        },
        selecionarZona(zona,i){
            this.indexZona = i;
            console.log("zona id =" + zona.id)
            console.log("indice zona =" + i)
            if(!this.indexZona){
                this.valor = true;
            }
            console.log(this.valor)
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
            if(this.indexVendedor!=null){
                console.log(this.arrayVendedores)
                return this.arrayVendedores.length? this.arrayVendedores[this.indexVendedor].zonas: '';
            }                
        },
        ...mapGetters({
            chartData3 : 'chartDataset3',
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
