<template lang="pug">
    .row.ambito2(style='padding:0 5rem')
        .card-cont.col.s12(style='padding:0')
            .col.s12
                ul.tabs
                    li.tab.col.s4
                        a.active(href='#test1') TERRITORIO
                    li.tab.col.s4
                        a(href='#test2' @click='mostrar1 = true, mostrar2 = true') ZONA
                    li.tab.col.s4
                        a(href='#test3' @click='mostrar1 = true, mostrar2 = true') VENDEDORES
            #test1.col.s12(style='margin-top:3rem')
                .col.s3
                    minicard1(v-for='(n,i) in 3' :key="i" @clicked='pasarItem')
                .col.s9
                    bar-chart(:chart-data="chartData.chart1" :width="970" :height="270")
                .col.s12.lista-clientes(style='border-top:1px solid #E9EDF1;')
                    topLista(v-for='(item,i) in items1' :key='i' :items='item')
                                      
            #test2.col.s12(style='margin-top:3rem')
                .col.s3
                    minicard2(v-for='(n,i) in 3' :key="i" @clicked='pasarZonas')
                .col.s9
                    bar-chart(:chart-data="chartData.chart1" :width="970" :height="270")
                .col.s12.lista-clientes
                    topLista(v-for='(item,i) in items2' :key='i' :items='item')
            #test3.col.s12(style='margin-top:3rem')
                .col.s3
                    minicard3(v-for='(n,i) in 3' :key="i")
                    //- .mini-card
                    //-     span {{ nombreVendedor2 }}
                    //-     a.modal-trigger.cambiar(href='#modal8') cambiar
                    //-     #modal8.modal.modal-fixed-footer
                    //-         .modal-header
                    //-             h6 SELECCIONE VENDEDORES
                    //-         .modal-content
                    //-             input.buscar(placeholder='Buscar por nombres o apellidos' v-model='valorInput')
                    //-             a.waves-effect
                    //-                 i.material-icons.left search
                    //-             .col.s6(style='padding:0')
                    //-                 ul 
                    //-                     li(v-for='(item,i) in arrayVendedores' @click='mostrarZonas(item)' :class='{ "activediv": item.id == isactive }') {{ item.nombre }}
                    //-             .col.s6(style='padding:0')
                    //-                 .content-item(v-for='(item, i) in zonasVendedor' :class='{ check: i == index }')
                    //-                     label.config-radio
                    //-                         input(type='checkbox' class="filled-in" @click='isChecked(i)')
                    //-                         span
                    //-                         p {{ item }}
                    //-         .modal-footer
                    //-             a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                    //-             a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarVendedor2()' :class='{ disabled: habilitar }') Aceptar
                    //- .mini-card
                        span {{ nombreVendedor3 }}
                        a.modal-trigger.cambiar(href='#modal9') cambiar
                        #modal9.modal.modal-fixed-footer
                            .modal-header
                                h6 SELECCIONE VENDEDORES
                            .modal-content
                                input.buscar(placeholder='Buscar por nombres o apellidos')
                                a.waves-effect
                                    i.material-icons.left search
                                .col.s6(style='padding: 0')
                                    ul 
                                        li(v-for='(item, i) in arrayVendedores' @click='mostrarZonas(item,i)' :class='{ "activediv": item.id == isactive }') {{ item.nombre }}
                                .col.s6(style='padding:0')
                                    .content-item(v-for='(item, i) in zonasVendedor' :class='{ check: i == index }')
                                        label.config-radio 
                                            input(type='checkbox' class="filled-in" @click='isChecked(i)')
                                            span
                                            p {{ item }}
                            .modal-footer
                                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-cancel(href='#!') Cancelar
                                a.modal-action.modal-close.waves-effect.waves-green.btn-flat.btn-aceptar(href='#!' @click='cambiarVendedor3()' :class='{ disabled: habilitar }') Aceptar
                .col.s9
                    bar-chart(:chart-data="chartData.chart1" :width="970" :height="270")
                .col.s12.lista-clientes
                    .listatop(v-for='item in items3')
                        .title
                            p TOP CLIENTES {{ item.nombre | upperCase }}
                        div
                            table.striped
                                tbody
                                    tr(v-for='(elem, i) in item.clientes')
                                        td {{ i + 1 }}
                                        td {{ elem.nombre }}
                                        td {{ elem.venta }}
</template>
<script>
    import minicard1 from './minicard1'
    import minicard2 from './minicard2'
    import minicard3 from './minicard3'
    import topLista from './topLista'
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name:'card2',
        components: {
            minicard1, minicard2, minicard3, topLista
         },
        data:function(){
            return{
                cliente:[],
                items1:[],
                items2:[],
                items3:[],
                zonaClientes: [],
                id: 0,
                index: '',
                falso: false,
                habilitar: true,
                valorCheckbox: false,
                valorInput:'',
                nombreVendedores:[],
                ventaTerritorio:'',
                /** data de charts */
                chartData: {
                    chart1: this.chartData1
                },
                indexTerrirorio: 0,
                checked: '',
            }
        },
        methods: {
            ...mapActions({
                agregardata: 'agregardata',
            }),
            pasarItem:function(val){
                console.log(val)
                
                    this.items1.splice(0,1,val);
                              
                console.log(this.items)
            },
            pasarZonas:function(val){
                console.log(val)
                
                    this.items2.splice(0,1,val);
                              
                console.log(this.items)
            },
            //tab zonas
            zonaDefecto:function(){
                this.zonaClientes = this.territorios[0].zonas;
            },
            //tab vendedores
            cambiarVendedor1:function(){
                this.mostrar = false;
                // this.mostrar1 = false;
                this.habilitar = true;
                if(this.nombre !==''){
                    this.nombreVendedor1 = this.nombre;
                }else{
                    this.nombreVendedor1 = this.vendedores[0].nombre.toUpperCase();
                }
                if(this.cliente.length!==0){
                    this.items3[0] = this.cliente;
                }else{
                    this.items3[0] = this.vendedores[0];
                }
            },
            cambiarVendedor2:function(){
                this.mostrar2 = false;
                this.habilitar = true;
                if(this.nombre !==''){ 
                    this.nombreVendedor2 = this.nombre;
                }else{
                    this.nombreVendedor2 = this.vendedores[0].nombre.toUpperCase();
                }
                if(this.cliente.length!==0){
                    this.items3[1] = this.cliente;
                }else{
                    this.items3[1] = this.vendedores[0];
                }     
            },
            cambiarVendedor3:function(){
                this.habilitar = true;
                if(this.nombre !==''){
                    this.nombreVendedor3 = this.nombre;
                }else{
                    this.nombreVendedor2 = this.vendedores[0].nombre.toUpperCase();
                }
                if(this.cliente.length!==0){
                    this.items3[2] = this.cliente;
                }else{
                    this.items3[2] = this.vendedores[0];
                }  
            },
            isChecked:function(i){
                this.habilitar = false;
                this.index = i;
            }
        },
        filters:{
            upperCase:function(value){
                if (!value) return ''
                    value = value.toString();
                    return value.toUpperCase();
            },
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString().toLowerCase();
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                $('.tabs').tabs();
            })
        },
        watch: {
            nombreTerritorio() {
                this.chartData.chart1 = this.chartData1
            },
            mesActual(){
                console.log('hola')
                this.chartData.chart1 = this.chartData1
            }
        },
        computed:{
            ...mapGetters({
               chartData1 : 'chartDataset',
               mesActual: 'mesActual',
               labels: 'labels'
            }),
            // arrayVendedores:function(){
            //     console.log(this.valorInput);
            //     const vendedores = this.vendedores.filter((element,i) => {         
            //         const filtrado = element.nombre.toLowerCase();
            //         console.log(filtrado)
            //         return filtrado.indexOf(this.valorInput.toLowerCase()) > -1;
            //     });
            //     // return vendedores.length ? vendedores : this.vendedores
            //     return vendedores
            //  },
            // zonasVendedor:function(){
            //     return this.arrayVendedores.length ? this.arrayVendedores[this.indexTerrirorio].zonas : ''
            // }
        }
    }
</script>
<style>
    .ambito2 .card-cont{
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        font-family: Roboto;
        font-size: 12px;	
        line-height: 2px;
        box-sizing: border-box;
    }
    /* tabs */
    .ambito2 .card-cont .tabs{
        background-color:transparent;
        box-shadow: 0 5px 4px 0 rgba(0,0,0,0.04);
    }
    .ambito2 .card-cont .tabs a{
        background-color:transparent;
        color: #BCCBDA;
    }
    .ambito2 .card-cont .tabs a.active{
        color: #49D7BB;
    }
    .ambito2 .card-cont .tab a:hover,
    .ambito2 .card-cont .tabs .tab a.active {
        background-color:transparent;
    }
    .ambito2 .card-cont .tabs .indicator{
        background-color: #49D7BB;
        margin: 0 auto;
        width: 30px;
    }
    .ambito2 .card-cont .mini-card{
        display: flex;
        justify-content: space-between;
        border: 1px solid #E9EDF1;	
        border-radius: 3px;
        box-sizing: border-box;
        padding: 1.3rem 1rem;
        margin: 0 0 1rem 1.5rem;
    }
    .ambito2 .card-cont .mini-card span{
        color: #768EA6;	
        font-size: 12px;	
        font-weight: bold;	
        letter-spacing: 0.1px;	
        line-height: 14px;
    }
    .ambito2 .card-cont .mini-card a.cambiar{
        color: #BCCBDA;
        font-size: 12px;	
        letter-spacing: 0.1px;	
        line-height: 14px;
        text-decoration: underline;
        cursor: pointer;
    }
    .ambito2 .card-cont .mini-card:nth-child(1){
        border-left: 4px solid #49D7BB;
    }
    .ambito2 .card-cont .mini-card:nth-child(2){
        border-left: 4px solid #768EA6;
    }
    .ambito2 .card-cont .mini-card:nth-child(3){
        border-left: 4px solid #BCCBDA;
    }
    /* modal */
    .ambito2 .card-cont .modal.open{
        overflow: hidden;
        border-radius: 10px;
        width: 35%;
        height: 540px;
        top:17%!important;
    }
    .ambito2 .card-cont .modal .modal-header{
        background-color: #49D7BB;
        padding: 1rem;
    }
    .ambito2 .card-cont .modal .modal-header h6{
        font-size: 14px;	
        font-weight: bold;	
        letter-spacing: -0.08px;	
        line-height: 16px;
        color: #FFFFFF;
    }
    .ambito2 .card-cont .modal-content{
        padding: 0;
    }
    .ambito2 .card-cont .modal-content .buscar {
        position: relative;
        color: #BCCBDA;
        height: 2rem;
        border: none;
        padding: 1rem;
        margin: 0;
        font-size: 12px;
        letter-spacing: -0.07px;
    }
    .ambito2 .card-cont .modal-content a{
        position: absolute;
        right: 0;
        color: #BCCBDA;
        font-size: 2rem;
        top: 18px;
    }
    .ambito2 .card-cont .modal-content i{
        font-size: 1.7rem;
    }
    .ambito2 .card-cont .modal input:focus {
        border-bottom: none;
        box-shadow: none;
    }
    .ambito2 .card-cont .modal ul{
        margin:0;
    }
    .ambito2 .card-cont .modal ul li{
        position: relative;
        color: #376075;
        font-size: 13px;	
        letter-spacing: -0.08px;	
        line-height: 15px;
        height: 3rem;
        background-color: #F1F5F9;
        padding: 1rem 2rem;
        box-shadow: 0 0 1px 0 rgba(118, 142, 166, 0.12);
    }
    .ambito2 .card-cont .modal ul li:hover{
        cursor: pointer;
    }
    .ambito2 .card-cont .modal-content .content-item{
        font-size: 13px;	
        letter-spacing: -0.08px;	
        line-height: 15px;
        height: 3rem;
        background-color: #F1F5F9;
        padding: 0.2rem 1rem;
        box-shadow: 0 0 1px 0 rgba(0,0,0,0.12);
        cursor: pointer;
        color: #376075;
    }
    .ambito2 .card-cont .modal-content .content-item .config-radio{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
    .ambito2 .config-radio [type="checkbox"].filled-in+span:not(.lever):after{
        border-radius: 50%;
        background-color: #FFFFFF;
        border: 2px solid #768EA6;
    }
    .ambito2 .config-radio [type="checkbox"].filled-in:checked+span:not(.lever):before{
        border-right: 2px solid #768EA6;
        border-bottom: 2px solid #768EA6;
    }
    .ambito2 .config-radio [type="radio"]:not(:checked)+span:before, [type="radio"]:not(:checked)+span:after {
        border: 2px solid #768EA6;
    }
    .ambito2 .config-radio [type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:before, [type="radio"].with-gap:checked+span:after{
        border: 2px solid #768EA6;
    }
    .ambito2 .config-radio [type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:after {
        background-color: #768EA6;
    }
    .ambito2 .config-radio [type="radio"]+span:before, [type="radio"]+span:after {
        font-family: 'Material Icons';
        content: 'check';
        color:#FFFFFF;
    }
    .ambito2 .card-cont #test2 .modal-content .content-item{
        background-color: #E9EDF1;
    }
    .ambito2 .card-cont #test2 .modal-content li i{
        position: absolute;
        opacity: 0;
        right: 0.5rem;
        color:  #768EA6;
        top: 9px;
    }
    .ambito2 .card-cont .modal-content .content-item label{
        color: #40677B;
        margin-left: 1rem;
        border-radius: 50%;
    }
    .ambito2 .card-cont .modal-footer .btn-aceptar{
        background-color: #49D7BB;
        color: #ffffff;
        border-radius: 100px;
        font-size: 12px;
        font-weight: 900;
        padding: 0 2rem;
    }
    .ambito2 .card-cont .modal-footer .btn-cancel{
        color: #BCCBDA;	
        font-size: 12px;	
        font-weight: 900;
    }
    .ambito2 .card-cont .modal-content .subtitle{
        color: #49D7BB;
        margin: 1rem 2.2rem;
        font-size: 12px;
    }
     /* lista clientes */
    .ambito2 .card-cont table{
        color:#768EA6;
        margin-left: 1rem;
        border-bottom: 2px solid #E9EDF1;
    }
    .ambito2 .card-cont table td{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .ambito2 .card-cont tr:nth-child(odd){
        background: #F1F5F9;
    }
    .ambito2 .card-cont .lista-clientes{
        display: flex;
        justify-content: space-around;
        border-top: 1px solid #E9EDF1;
        font-size: 13px;	
        font-weight: 500;	
        letter-spacing: 0.13px;
    }
    .ambito2 .card-cont .lista-clientes .title{
        font-size: 13px;	
        letter-spacing: 0.13px;	
        padding: 0.2px;
        margin-bottom: 1rem;
        border-radius: 3px;
    }
    .ambito2 .card-cont .lista-clientes .title,
    .ambito2 .card-cont .lista-clientes .title p{
        margin-left: 1rem;
    }
    .ambito2 .card-cont .lista-clientes .listatop:nth-child(1) .title{
        color: #49D7BB;
        border-left: 6px solid #49D7BB;
    }
    .ambito2 .card-cont .lista-clientes .listatop:nth-child(2) .title{
        color: #768EA6;
        border-left: 6px solid #768EA6;
    }
    .ambito2 .card-cont .lista-clientes .listatop:nth-child(3) .title{
        color: #BCCBDA;	
        border-left: 6px solid #BCCBDA;
    }
    .ambito2 .card-cont .lista-clientes tr:nth-child(-n+3){
        color: #376075;
        font-weight: bold;
    }
    .ambito2 .card-cont .lista-clientes .listatop{
       width: 70%;
       padding: 2rem 0;
       margin-right: 1.7rem;
    }
    /* clases dinámicas */
   
    .activeZona{
        background-color: #E9EDF1!important;
    }
    .disabled{
        pointer-events: none!important;
        cursor: default!important;
        text-decoration: none!important;
    }
    .ocultar{
        display:none;
    }
    
    .check{
        background-color: #768EA6!important;
        color: #ffffff!important;
    }
    .white{
        color: #ffffff!important;
    }
</style>
