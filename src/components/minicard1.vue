<template lang="pug">
    .mini-card
        .divleft
        span.ninguno {{ (territorioSeleccionado || {}).nombre || 'NINGUNO' }}
        a.modal-trigger.cambiar(:href='"#" + modalId' @click='deshabilitar=true') cambiar
        div(:id='modalId').modal.modal-fixed-footer.modal1
            .modal-header
                h6 SELECCIONE TERRITORIO
            .modal-content
                h6.subtitle Territorio
                .col.s12(style='padding:0')
                    .content-item(v-for='(item, i) in territorios' :key='i')
                            label.config-radio
                                input(:id="'inputId'+ i" class='inputTerritorio' :key='i' type='radio' name='group1' :value='item' v-model='territorioSeleccionadoModal' @click='seleccionarZonas($event)')
                                span 
                                p {{ item.nombre }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!' @click='quitarCheck()') Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarTerritorio(), agregardata1({territorioSeleccionado,indice})' :class='{disabled: deshabilitar}') Aceptar
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
            inputId: v4(),
            territorioSeleccionadoModal: null,
            territorioSeleccionado: null,
            territorios,
            deshabilitar:true,
            index: '',
            evento:'',
            eventoId: []

        }
    },
    methods:{
        ...mapActions({
            agregardata1: 'agregardata1',
        }),
        seleccionarZonas:function(event){
            this.deshabilitar= false;
            this.evento = event.target.id;
            console.log(this.evento)
        },
        cambiarTerritorio:function(){
            console.log(this.indice)
            this.eventoId[this.indice] = this.evento;
            this.territorioSeleccionado = this.territorioSeleccionadoModal; 
            this.$emit('territorio', {valor:this.territorioSeleccionado, indice:this.indice, chartData: this.chartData1 })
        },
        quitarCheck:function(){
            $('.inputTerritorio').prop('checked', false )
            $('#' + this.modalId).find('#'+ this.eventoId[this.indice]).click()
        }      
    },
    computed:{
        ...mapGetters({
            chartData1 : 'chartDataset1'
        })
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

