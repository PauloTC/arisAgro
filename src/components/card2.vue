<template lang="pug">
    .row.ambito2(style='padding:0 5rem')
        .card-cont.col.s12(style='padding:0')
            .col.s12(style='padding:0')
                ul.tabs
                    li.tab.col.s4
                        a.active(href='#test1') TERRITORIO
                    li.tab.col.s4
                        a(href='#test2') ZONA
                    li.tab.col.s4
                        a(href='#test3') VENDEDORES
            #test1.col.s12(style='margin-top:3rem')
                .col.s3
                    minicard1(v-for='(n,i) in 3' :key='i' @territorio='pasarItem' :indice='i')
                .col.s9
                    div(:class='{barchart:mostrarTerritorio}')
                        bar-chart(:chart-data="chartData.chart1" :width="970" :height="370")
                        p.text(:class='{ocultar:ocultar}') SELECCIONE UN TERRITORIO
                        div(:class='{capa:mostrarTerritorio}')
                .col.s12.lista-clientes(style='border-top:1px solid #E9EDF1;')
                    .listatop
                        .title
                            div 
                            p  TOP CLIENTES {{ (items1[0] || {}).nombre  || 'NINGUNO' }}
                        topLista(:items='items1[0]' :key="0")
                    .listatop
                        .title 
                            div
                            p  TOP CLIENTES {{ (items1[1] || {}).nombre  || 'NINGUNO' }}  
                        topLista(:items='items1[1]' :key="1")
                    .listatop
                        .title 
                            div
                            p  TOP CLIENTES {{ (items1[2] || {}).nombre  || 'NINGUNO' }}
                        topLista(:items='items1[2]' :key="2")
            #test2.col.s12(style='margin-top:3rem')
                .col.s3
                    minicard2(v-for='(n,i) in 3' :key="i" @zonas='pasarZonas' :indice='i')
                .col.s9
                    div(:class='{barchart:mostrarZona}')
                        bar-chart(:chart-data="chartData.chart2" :width="970" :height="370")
                        p.text(:class='{ocultar:ocultar}') SELECCIONE UN TERRITORIO
                        div(:class='{capa:mostrarZona}')
                .col.s12.lista-clientes
                    .listatop
                        .title
                            div 
                            p  TOP CLIENTES {{ (items2[0] || {}).nombre  || 'NINGUNO' }}
                        topLista(:items='items2[0]' :key="4")
                    .listatop
                        .title
                            div
                            p  TOP CLIENTES {{ (items2[1] || {}).nombre  || 'NINGUNO' }}  
                        topLista(:items='items2[1]' :key="5")
                    .listatop
                        .title
                            div 
                            p  TOP CLIENTES {{ (items2[2] || {}).nombre  || 'NINGUNO' }}
                        topLista(:items='items2[2]' :key="6")
            #test3.col.s12(style='margin-top:3rem')
                    .col.s3
                        minicard3(v-for='(n,i) in 3' :key="i" @vendedor='pasarVendedor' :indice='i')
                    .col.s9
                        div(:class='{barchart:mostrarVendedor}')
                            bar-chart(:chart-data="chartData.chart3" :width="970" :height="370")
                            p.text(:class='{ocultar:ocultar}') SELECCIONE UN TERRITORIO
                            div(:class='{capa:mostrarVendedor}')
                    .col.s12.lista-clientes
                        .listatop
                            .title
                                div 
                                p  TOP CLIENTES {{ (items3[0] || {}).nombre  || 'NINGUNO' }}
                            topLista(:items='items3[0]' :key="7")
                        .listatop
                            .title
                                div 
                                p  TOP CLIENTES {{ (items3[1] || {}).nombre  || 'NINGUNO' }}  
                            topLista(:items='items3[1]' :key="8")
                        .listatop
                            .title
                                div 
                                p  TOP CLIENTES {{ (items3[2] || {}).nombre  || 'NINGUNO' }}
                            topLista(:items='items3[2]' :key="9")
</template>
<script>
    import minicard1 from './minicard1'
    import minicard2 from './minicard2'
    import minicard3 from './minicard3'
    import topLista from './topLista'

    import { mapGetters } from 'vuex'

    export default {
        name:'card2',
        components: {
            minicard1, minicard2, minicard3, topLista
         },
        data:function(){
            return{
                cliente:[],
                items1:[null,null,null],
                items2:[null,null,null],
                items3:[null,null,null],
                mostrarTerritorio: true,
                mostrarZona: true,
                mostrarVendedor: true,
                ocultar: false,
                /** data de charts */
                chartData: {
                    chart1: {},
                    chart2: {},
                    chart3: {}
                }
            }
        },
        methods: {
            pasarItem:function(val){
                console.log(val) 
                if(val.valor!=null){
                    this.items1.splice(val.indice,1,val.valor);
                    console.log(this.items1)
                    this.chartData.chart1 = val.chartData;
                    this.mostrarTerritorio = false;
                    this.ocultar = true;
                    // console.log(this.chartData.chart1)
                }   
            },
            pasarZonas:function(val){
                if(val.valor!=null){
                    this.items2.splice(val.indice,1,val.valor);
                    this.chartData.chart2 = val.chartData;
                    this.mostrarZona= false;
                    this.ocultar = true;
                }
            },
            pasarVendedor:function(val){
                if(val.valor!=null){
                    this.items3.splice(val.indice,1,val.valor);
                    this.chartData.chart3 = val.chartData;
                    this.mostrarVendedor = false;
                    this.ocultar = true;
                }
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
                // $('.modal').modal({
                //     dismissible: false
                // });
            })
        },
        watch: {
            labels(){
                this.chartData.chart1 = this.chartDatos1;
                this.chartData.chart2 = this.chartDatos2;
                this.chartData.chart3 = this.chartDatos3;
            }
        },
        computed:{
            ...mapGetters({
                chartDatos1 : 'chartDataset1',
                chartDatos2 : 'chartDataset2',
                chartDatos3 : 'chartDataset3',
                labels: 'labels'
            })
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
        background: #ffffff;
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
    /* minicards */
    .ambito2 .card-cont .mini-card{
        display: flex;
        align-items: center;
        height: 2.5rem;
        border: 1px solid #E9EDF1;	
        border-radius: 3px;
        box-sizing: border-box;
        margin: 0 0 1rem 1.5rem;
    }
    .ambito2 .card-cont .mini-card .ninguno{
        flex-grow: 1;
        margin-left: 1rem;
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
        margin-right: 1rem;
    }
    .ambito2 .card-cont .mini-card .divleft{
        width: 5px;
        height: 34px;
        border-radius: 27%;
    }
    .ambito2 .card-cont .mini-card:nth-child(1) .divleft{
        background-color: #49D7BB;
    }
    .ambito2 .card-cont .mini-card:nth-child(2) .divleft{
        background-color: #768EA6;
    }
    .ambito2 .card-cont .mini-card:nth-child(3) .divleft {
        background-color:  #BCCBDA;
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
    .ambito2 .config-radio [type="checkbox"].filled-in+span:not(.lever)::after{
        border-radius: 50%;
        background-color: #FFFFFF;
        border: 2px solid #768EA6;
    }
    .ambito2 .config-radio [type="checkbox"].filled-in:checked+span:not(.lever)::before{
        border-right: 2px solid #768EA6;
        border-bottom: 2px solid #768EA6;
    }
    .ambito2 .config-radio [type="radio"]:not(:checked)+span::before, [type="radio"]:not(:checked)+span:after {
        border: 2px solid #768EA6;
    }
    .ambito2 .config-radio [type="radio"]:checked+span::after, [type="radio"].with-gap:checked+span:before, [type="radio"].with-gap:checked+span:after{
        border: 2px solid #768EA6;
    }
    .ambito2 .config-radio [type="radio"]:checked+span::after, [type="radio"].with-gap:checked+span::after {
        background-color: #768EA6;
    }
    .ambito2 .config-radio [type="radio"]+span::before, [type="radio"]+span::after {
        font-family: 'Material Icons';
        content: 'check';
        color:#FFFFFF;
        line-height: 1.3;
        font-size: 15px;
        box-sizing: content-box;
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
        margin-top: 2rem;
    }
    .ambito2 .card-cont .lista-clientes .title{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 13px;	
        letter-spacing: 0.13px;
        margin-bottom: 1rem;	
    }
    .ambito2 .lista-clientes .title div{
        width: 6px;
        height: 16px;
        border-radius: 33%;
    }
    .ambito2 .card-cont .lista-clientes .title,
    .ambito2 .card-cont .lista-clientes .title p{
        margin-left: 1rem;
    }
    .ambito2 .listatop{
       width: 70%;
       padding: 2rem 0;
       margin-right: 1.7rem;
    }
    .ambito2 .listatop:nth-child(1) .title{
        color: #49D7BB;
    }
    .ambito2 .listatop:nth-child(1) .title div{
        background-color: #49D7BB;
    }
    .ambito2 .listatop:nth-child(2) .title{
        color: #768EA6;
    }
    .ambito2 .listatop:nth-child(2) .title div{
        background-color: #768EA6;
    }
    .ambito2  .listatop:nth-child(3) .title{
        color: #BCCBDA;	
    }
    .ambito2 .listatop:nth-child(3) .title div{
        background-color: #BCCBDA;
    }
    .ambito2 .card-cont .lista-clientes tr:nth-child(-n+3){
        color: #376075;
        font-weight: bold;
    }
    
    /* clases dinámicas */
   
    .activeZona{
        background-color: #E9EDF1!important;
    }
    .ocultar{
        display:none;
    }  
    .white{
        color: #ffffff!important;
    }
    .barchart{
        position: relative;
    }
    .capa{
        position: absolute; 
        background-color: #F1F5F9;
        top: 0;
        height: 95%;
        width: 100%;
    }
    .text{
        position: absolute;
        color: #768EA6;
        font-size: 13px;
        font-weight: 500;
        line-height: 11px;
        top: 40%;
        left: 37%;
        z-index: 100;
    } 
</style>
