<template lang="pug">
    .mini-card
        .divleft
        span.ninguno {{ (zonaSeleccionada || {}).nombre || 'NINGUNO' }}
        a.modal-trigger.cambiar(:href='"#" + modalId' @click='deshabilitar=true; quitarCheck2()') cambiar
        div(:id='modalId').modal.modal-fixed-footer.modal2
            .modal-header
                h6 SELECCIONE ZONA
            .modal-content
                .col.s6(style = 'padding:0')
                    h6.subtitle Territorio
                    ul 
                        li(:id="'inputIn'+i"  v-for='(item , i) in territorios' @click='zonasTerritorio(item,i,$event)' :class='{ "activediv": item.id == isactive }') {{ item.nombre }}
                            <i class="material-icons" :class='{ show: item.id == isactive }'>chevron_right</i>
                .col.s6(style = 'padding:0')
                    h6.subtitle Zonas
                    .content-item(v-for='(item,ind) in zonaClientes' :class='{ "classCheck": item.id == i }')
                        label.config-radio 
                            input(:id="'input' + ind" class='inputZonas' type='radio' name='group2' :value='item' v-model='zonaSeleccionadaModal' @click='background(ind,item,$event)')
                            span
                            p {{ item.nombre }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarZona(), agregardata2({zonaSeleccionada, indice})' :class='{ disabled: deshabilitar}') Aceptar
</template>
<script>
import { v4 } from 'uuid';
import { mapGetters, mapActions } from 'vuex'
import { debuggerStatement } from 'babel-types';

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
            i: '',
            deshabilitar: true,
            eventModal:'',
            eventTerritorio:'',
            eventZonasModal:'',
            eventZonas2:'',
            inputEvent2:[]
        }
    },
    methods:{
        ...mapActions({
            agregardata2: 'agregardata2',
        }),
        zonasTerritorio:function(item,i,event){  
            this.i='';
            this.isactive = i;
            if(item.zonas!==undefined){
                this.zonaClientes = item.zonas.map(element => {
                    return element;
                });
            }
            this.eventModal= event.target.id;  
            // $('.inputZonas').prop('checked', false)
            console.log(this.eventModal)
            // if(this.inputEvent2.length!=0 && this.eventModal == this.inputEvent2[this.indice].territorio){
            //     $('#' + this.modalId).find('#'+ this.inputEvent2[this.indice].territorio).click()
            //     $('#' + this.modalId).find('#'+ this.inputEvent2[this.indice].zona).click()
            // }    
        },
        background(ind,item,event){
            this.deshabilitar = false;
            this.i = ind;
            this.eventZonasModal = event.target.id;
            console.log(this.eventZonas2);
        },
        cambiarZona:function(){
            this.eventTerritorio = this.eventModal;
            this.eventZonas2 = this.eventZonasModal;
            if(this.eventTerritorio!='' && this.eventZonas2!=''){
                this.inputEvent2[this.indice]= { territorio: this.eventTerritorio, zona:this.eventZonas2 };
            }  
            // console.log(this.inputEvent2[this.indice].zona);
            console.log(this.inputEvent2);
            this.zonaSeleccionada = this.zonaSeleccionadaModal;
            this.$emit('zonas', {valor:this.zonaSeleccionada, indice:this.indice, chartData: this.chartData2});
        },
        quitarCheck2:function(){
            if(this.inputEvent2.length!=0  && this.inputEvent2[this.indice].territorio!=undefined){
                $('#' + this.modalId).find('#'+ this.inputEvent2[this.indice].territorio).slice().click();
                $('#' + this.modalId).find('#'+ this.inputEvent2[this.indice].zona).slice().click();
            }
        }
    },
    computed:{
        ...mapGetters({
            chartData2 : 'chartDataset2'
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
    .content-item.classCheck span:after{
        background-color: #768EA6 !important;
        transform: scale(1.02);
    }
    .config-radio [type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:after {
        background-color: #768EA6;
    }
</style>


