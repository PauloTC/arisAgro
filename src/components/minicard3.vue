<template lang="pug">
    .mini-card
        .divleft
        span.ninguno {{ vendedorSeleccionado || 'NINGUNO'}}
        a.modal-trigger.cambiar(:href='"#" + modalId' @click='deshabilitar=true;quitarCheck()') cambiar
        div(:id='modalId').modal.modal-fixed-footer.modal3
            .modal-header
                h6 SELECCIONE VENDEDORES
            .modal-content
                input.buscar(placeholder='Buscar por nombres o apellidos' v-model='valorInput')
                a.waves-effect
                    i.material-icons.left search
                .col.s6(style='padding:0')
                    ul 
                        li(:id="'inputVend' + i" v-for='(item,i) in arrayVendedores' :key='item.id'  @click='mostrarZonas(item,i,$event)' :class='{ "activediv": item.id == indexVendedor }') {{ item.nombre }}
                .col.s6(style='padding:0')
                    .content-item(v-for='(zona, i) in zonasVendedor' v-bind:class='{ check: zona.checkActive }')
                        label.config-radio  
                            input(:id="'input' + i" class='zonas' type='checkbox' class="filled-in" name='group3' :key='i' @click='seleccionarZona(zona,i,$event.target)')
                            span
                            p(:class='{textwhite:zona.checkActive}') {{ zona.nombre }}
            .modal-footer
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!' ) Cancelar
                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='seleccionarVendedor(); agregardata3({vendedor, indice,zonasSeleccionadas})' :class='{ disabled: deshabilitar}') Aceptar
</template>
<script>
import { v4 } from 'uuid';
import { mapGetters, mapActions } from 'vuex'
import { forStatement } from 'babel-types';

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
            deshabilitar:true,
            eventVendedor:'',
            eventZonas:[],
            inputEvent:[]
        }
    },
    methods:{
        ...mapActions({
            agregardata3: 'agregardata3', //se lanza al aceptar
        }),
        mostrarZonas:function(item,i,event){  //Se lanza al click de un vendedor diferente

            this.zonasSeleccionadas=[];
            this.ventas =[];
            this.vendedor = item;
            this.indexVendedor = item.id;
            this.vendedorSeleccionadoModal = item.nombre;   
            this.indexZona= [];
            this.eventVendedor=event.target.id;

            $('.zonas').prop('checked', false)
                        
            for(let i = 0; i < this.zonasVendedor.length; i++ ){

                this.zonasVendedor[i].checkActive = false
            }

            if( this.vendedorSeleccionado !== this.vendedorSeleccionadoModal ){
                $('.zonas').prop('checked', false)
            }
        },
        seleccionarZona(zona,i,event){ //se lanza cuando seleciono otra zona
            
            this.deshabilitar = false // habilita el boton aceptar

            if(event.checked){
                this.zonasVendedor[i].checkActive = true
                this.zonasSeleccionadas.push(zona); // pusheo un objeto con parametro clienes , id , nombre de la zona
            }else{
                this.zonasVendedor[i].checkActive = false                
            }

            if(event.checked){ // Si el input esta checkeado
                this.indexZona.push(i); // pusheo al array vacio la posicion del elemento en el array padre ejem: 2 , 3 ,5
                if(this.eventZonas.indexOf(event.id)==-1)
                    this.eventZonas.push(event.id)            
            }else{
                let indexRemover=this.indexZona.indexOf(i);
                this.indexZona.splice(indexRemover,1);
                let zonaRemover=this.zonasSeleccionadas.indexOf(zona);
                this.zonasSeleccionadas.splice(zonaRemover,1);
            }
            if (this.zonasSeleccionadas.length  == 0){
                  this.deshabilitar = true
            }   
        }, 
        seleccionarVendedor:function(){    //Se ejecuta al aceptar

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
            if(this.zonasSeleccionadas.length!=0)
                this.inputEvent[this.indice]= {vendedor:this.eventVendedor,zona:this.eventZonas};
                this.vendedorSeleccionado = this.vendedorSeleccionadoModal;
                this.$emit('vendedor', {valor:this.vendedor, ventas: this.ventas, indice:this.indice, chartData: this.chartData3})
        },
        quitarCheck:function(){ 
            if( this.zonasSeleccionadas.length > 0){
               for( let i = 0; i < this.zonasSeleccionadas.length; i++ ){
                   $('#' + this.modalId).find(this.zonasSeleccionadas[i].nombre).closets('label').click();
               }

            }                
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
                // console.log(this.indexVendedor)
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
