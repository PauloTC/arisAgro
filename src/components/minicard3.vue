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
                        li(v-for='(item,i) in arrayVendedores' @click='mostrarZonas(item)' :class='{ "activediv": item.id == isactive }') {{ item.nombre }}
                .col.s6(style='padding:0')
                    .content-item(v-for='(item, i) in zonasVendedor')
                        label.config-radio  
                            input(type='checkbox' class="filled-in")
                            span
                            p {{ item }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarVendedor()') Aceptar
</template>
<script>
import { v4 } from 'uuid';
export default {
    name: 'minicard3',
    data:function(){
        const { vendedores } = this.$store.state
        return{
            modalId: v4(),
            vendedorSeleccionadoModal: null,
            vendedorSeleccionado: null,
            valorInput:'',
            isactive:0,
            indexTerrirorio:0,
            vendedores
        }
    },
    methods:{
        mostrarZonas:function(item){
            this.isactive = item.id;
            this.vendedorSeleccionadoModal = item.nombre;
            
        },
        cambiarVendedor:function(){
            this.vendedorSeleccionado = this.vendedorSeleccionadoModal;
            this.indexTerrirorio = this.vendedorSeleccionado.id;
        }, 
    },
    computed:{
        arrayVendedores:function(){
            console.log(this.valorInput);
            const vendedores = this.vendedores.filter((element,i) => {         
                const filtrado = element.nombre.toLowerCase();
                console.log(filtrado)
                return filtrado.indexOf(this.valorInput.toLowerCase()) > -1;
            });
            // return vendedores.length ? vendedores : this.vendedores
                return vendedores
        }, 
        zonasVendedor:function(){
            return this.arrayVendedores.length ? this.arrayVendedores[this.indexTerrirorio].zonas : ''  
        }
    },
    mounted: function () {
            this.$nextTick(function () {
                    $('.modal').modal();
            })
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
