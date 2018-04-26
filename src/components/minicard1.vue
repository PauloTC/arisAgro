<template lang="pug">
    .mini-card
        span {{ (territorioSeleccionado || {}).nombre || 'NINGUNO' }}
        a.modal-trigger.cambiar(:href='"#" + modalId') cambiar
        div(:id='modalId').modal.modal-fixed-footer
            .modal-header
                h6 SELECCIONE TERRITORIO
            .modal-content
                h6.subtitle Territorio
                .col.s12(style='padding:0')
                    .content-item(v-for='(item, i) in territorios')
                        label.config-radio
                            input(type='radio' name='group1' :value='item' v-model='territorioSeleccionadoModal')
                            span 
                            p {{ item.nombre }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarTerritorio()') Aceptar
</template>
<script>
import { v4 } from 'uuid'
// import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'minicard1',
    data:function(){
        const { territorios } = this.$store.state
        return{
            modalId: v4(),
            territorioSeleccionadoModal: null,
            territorioSeleccionado: null,
            territorios
        }
    },
    // watch:  {
    //     nombreTerritorio() {
    //         this.chartData.chart1 = this.chartData1
    //     },
    // },
    methods:{
        cambiarTerritorio:function(){
            this.territorioSeleccionado = this.territorioSeleccionadoModal;
            this.$emit('clicked', this.territorioSeleccionado)
    },
    // computed:{
    //     ...mapGetters({
    //         chartData1 : 'chartDataset',
    //         mesActual: 'mesActual',
    //         labels: 'labels'
    //     }),
    // }      
  },
  mounted: function () {
        this.$nextTick(function () {
                $('.modal').modal({
                    dismissible: false
            });
        })
    },
}
</script>
<style>

</style>

