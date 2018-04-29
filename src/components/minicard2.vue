<template lang="pug">
    .mini-card
        span {{ (zonaSeleccionada || {}).nombre || 'NINGUNO' }}
        a.modal-trigger.cambiar(:href='"#" + modalId') cambiar
        div(:id='modalId').modal.modal-fixed-footer.modal2
            .modal-header
                h6 SELECCIONE ZONA
            .modal-content
                .col.s6(style = 'padding:0')
                    h6.subtitle territorio
                    ul 
                        li(v-for='(item , i) in territorios' @click='zonasTerritorio(item,i)' :class='{ "activediv": item.id == isactive }') {{ item.nombre }}
                            <i class="material-icons" :class='{ show: item.id == isactive }'>chevron_right</i>
                .col.s6(style = 'padding:0')
                    h6.subtitle Zonas
                    .content-item(v-for='(item,ind) in zonaClientes' :class='{ "classCheck": item.id == i }')
                        label.config-radio 
                            input(type='radio' name='group2' :value='item' v-model='zonaSeleccionadaModal' @click='background(ind)')
                            span
                            p {{ item.nombre }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarZona(), agregardata1({zonaSeleccionada, indice})') Aceptar
</template>
<script>
import { v4 } from 'uuid';
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'minicard2',
    props:['indice'],
    data:function(){
        const { territorios } = this.$store.state
        return{
            modalId: v4(),
            zonaSeleccionadaModal: null,
            zonaSeleccionada: null,
            territorios,
            zonaClientes:[],
            isactive: '',
            i: ''
        }
    },
    methods:{
        ...mapActions({
            agregardata1: 'agregardata1',
        }),
        zonasTerritorio:function(item,i){
            this.i='';
            this.isactive = i;
            if(item.zonas!==undefined)
                this.zonaClientes = item.zonas.map(element => {
                    return element;
            }); 
        },
        cambiarZona:function(){
            this.zonaSeleccionada = this.zonaSeleccionadaModal
            console.log(this.zonaSeleccionada)
            this.$emit('zonas', {valor:this.zonaSeleccionada, indice:this.indice, chartData: this.chartData1})
        },
        background(ind){
            this.i = ind;
        }
    },
    computed:{
        ...mapGetters({
            chartData1 : 'chartDataset'
        }),
    },
    mounted: function () {
        this.$nextTick(function () {
            $('.modal2').modal({
                dismissible: false
            });
        })
    } 
}
</script>
<style>
    .activediv{
        background-color: #E9EDF1!important;
    }
    .show{
        opacity: 1!important;
    }
    .classCheck{
        background-color: #CDD8E3!important;
    }
    .config-radio [type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:after {
        background-color: #768EA6;
    }
</style>


