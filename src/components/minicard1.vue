<template lang="pug">
    .mini-card
        .divleft
        span.ninguno {{ (territorioSeleccionado || {}).nombre || 'NINGUNO' }}
        a.modal-trigger.cambiar(:href='"#" + modalId') cambiar
        div(:id='modalId').modal.modal-fixed-footer.modal1
            .modal-header
                h6 SELECCIONE TERRITORIO
            .modal-content
                h6.subtitle Territorio
                .col.s12(style='padding:0')
                    .content-item(v-for='(item, i) in territorios' :key='i')
                        label.config-radio
                            input(type='radio' name='group1' :value='item' v-model='territorioSeleccionadoModal')
                            span 
                            p {{ item.nombre }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarTerritorio(), agregardata({territorioSeleccionado,indice})') Aceptar
</template>
<script>
import { v4 } from 'uuid'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'minicard1',
    props:['indice'],
    data:function(){
        const { territorios } = this.$store.state
        return{
            modalId: v4(),
            territorioSeleccionadoModal: null,
            territorioSeleccionado: null,
            territorios,
        }
    },
    methods:{
        ...mapActions({
            agregardata: 'agregardata',
        }),
        cambiarTerritorio:function(){
            this.territorioSeleccionado = this.territorioSeleccionadoModal; 
            this.$emit('territorio', {valor:this.territorioSeleccionado, indice:this.indice, chartData: this.chartData1 })
        }
    },
    computed:{
        ...mapGetters({
            chartData1 : 'chartDataset'
        })
    },
    mounted: function () {
        this.$nextTick(function () {
            $('.modal1').modal({
                dismissible: false
            });
        })
    },    
}
</script>
<style>

</style>

