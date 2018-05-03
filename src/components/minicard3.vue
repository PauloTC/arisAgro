<template lang="pug">
    .mini-card
        .divleft
        span.ninguno {{ vendedorSeleccionado || 'NINGUNO'}}
        a.modal-trigger.cambiar(:href='"#" + modalId' @click='deshabilitar=true') cambiar
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
                    .content-item(v-for='(zona, i) in zonasVendedor' :class='{ check: indexZona.indexOf(zona.id)>-1 }')
                        label.config-radio  
                            input(:id='inputId' class='zonas' type='checkbox' class="filled-in" name='group3' :key='i' @click='seleccionarZona(zona,i,$event.target)')
                            span
                            p(:class='{ textwhite: indexZona.indexOf(zona.id)>-1 }') {{ zona.nombre }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='seleccionarVendedor(); agregardata3({vendedor, indice,zonasSeleccionadas})' :class='{ disabled: deshabilitar}') Aceptar
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
            inputId: v4(),
            vendedorSeleccionadoModal: null,
            vendedorSeleccionado: null,
            valorInput:'',
            indexVendedor:null,
            indexZona:[],
            vendedores,
            vendedor:[],
            zonasSeleccionadas:[],
            ventas:[],
            deshabilitar:true
        }
    },
    methods:{
        ...mapActions({
            agregardata3: 'agregardata3',
        }),
        mostrarZonas:function(item,i){
            this.zonasSeleccionadas=[];
            this.ventas =[];
            this.vendedor = item;
            this.indexVendedor = item.id;
            this.vendedorSeleccionadoModal = item.nombre;   
            this.indexZona= [];
            $('#' + this.modalId).find(".zonas").prop("checked", false); 
        },
        seleccionarZona(zona,i,event){
            this.deshabilitar = false
            if(event.checked){
                this.indexZona.push(i);
                this.zonasSeleccionadas.push(zona);
            }else{
                let indexRemover=this.indexZona.indexOf(i);
                this.indexZona.splice(indexRemover,1);
                let zonaRemover=this.zonasSeleccionadas.indexOf(zona);
                this.zonasSeleccionadas.splice(zonaRemover,1);
            }
        }, 
        seleccionarVendedor:function(){
            
            let clientes = this.zonasSeleccionadas.map(element => {
                return element.clientes                      
            });
            clientes.forEach(elemento => elemento.map((elem)=> this.ventas.push(elem))) 
            
            this.ventas = this.ventas.sort(function(a,b){
                let x = (a.venta),
                    y = (b.venta);

                return ((x > y)? -1:((x < y)? 1: 0))
            })
            if (this.ventas.length > 10){
                this.ventas = this.ventas.slice(0,10);
            }
            console.log(this.zonasSeleccionadas)
            if(this.zonasSeleccionadas.length!=0)
                this.vendedorSeleccionado = this.vendedorSeleccionadoModal;
            this.$emit('vendedor', {valor:this.vendedor, ventas: this.ventas, indice:this.indice, chartData: this.chartData3})
        }
    },
    computed:{
        arrayVendedores:function(){
            const vendedores = this.vendedores.filter((element,i) => {         
                const filtrado = element.nombre.toLowerCase();
                return filtrado.indexOf(this.valorInput.toLowerCase()) > -1;
            });
            return vendedores.length ? vendedores : '';
        }, 
        zonasVendedor:function(){
            if(this.indexVendedor!=null){
                console.log(this.indexVendedor)
                return this.arrayVendedores.length? this.vendedores[this.indexVendedor].zonas: '';
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
    }
    .textwhite{
        color: #ffffff!important;
    }
</style>
