<template lang="pug">
    .mini-card
        span {{ (zonaSeleccionada || {}).nombre || 'NINGUNO' }}
        a.modal-trigger.cambiar(:href='"#" + modalId') cambiar
        div(:id='modalId').modal.modal-fixed-footer
            .modal-header
                h6 SELECCIONE ZONA
            .modal-content
                .col.s6(style = 'padding:0')
                    h6.subtitle territorio
                    ul 
                        li(v-for='(item , i) in territorios' @click='zonasTerritorio(item,i)' :class='{ "activediv": item.id === isactive }') {{ item.nombre }}
                            <i class="material-icons" :class='{ show: item.id == isactive }'>chevron_right</i>
                .col.s6(style = 'padding:0')
                    h6.subtitle Zonas
                    .content-item(v-for='(item,i) in zonaClientes')
                        label.config-radio 
                            input(type='radio' name='group2' :value='item' v-model='zonaSeleccionadaModal')
                            span
                            p {{ item.nombre }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarZona()') Aceptar
</template>
<script>
import { v4 } from 'uuid';
import index from 'vue';
// import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'minicard2',
    props:['index'],
    data:function(){
        const { territorios } = this.$store.state
        return{
            modalId: v4(),
            zonaSeleccionadaModal: null,
            zonaSeleccionada: null,
            territorios,
            zonaClientes:[],
            isactive: 0,
            indice: this.index
        }
    },
    methods:{
        zonasTerritorio:function(item,i){
            this.isactive = i;
            // this.indice = i;
            if(item.zonas!==undefined)
                this.zonaClientes = item.zonas.map(element => {
                    return element;
            }); 
        },
        cambiarZona:function(){
            this.zonaSeleccionada = this.zonaSeleccionadaModal
            console.log(this.zonaSeleccionada)
            this.$emit('zonas', {valor:this.zonaSeleccionada, indice:this.indice})
        }
    },  
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


