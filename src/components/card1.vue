<template lang="pug">
    .row.ambito1(style='padding:0 5rem;margin-bottom:3rem')
        .card-cont.col.s12(style='padding:0')
            .col.s12.meses
                a.waves-effect(@click='cambiarMes(false)')
                    i.material-icons.right chevron_left
                a.waves-effect(@click='cambiarMes(true)')
                    i.material-icons.right chevron_right
                span {{ mesActual }}
                span 
            .col.s12.m4.productos(style='padding:0')
                    h3 TOP PRODUCTOS
                    table
                        tbody
                            tr(v-for='(producto,i) in productos' :key="i")
                                td {{ i + 1 }}
                                td {{ producto.nombre }}
                                td {{ producto.precio }}
            .col.s12.m8.progres
                h3 MONTO TOTAL VENDIDO
                .prog-bar
                    .circle1
                        vue-circle(ref="progress1" :progress='40', :size='200', :reverse='true', line-cap='round', :fill='fill1', empty-fill='rgba(0, 0, 0, .1)', :animation-start-value='0.0', :start-angle='4.7', insert-mode='append', :thickness= '14', :show-percent='true', @vue-circle-progress='progress', @vue-circle-end='progress_end')
                            span.pos-mes1 2018
                        table.striped
                            body
                                tr
                                    td Monto
                                    td.strong USD 1 363.00
                                tr
                                    td Meta
                                    td USd 6 000.00
                    .circle2
                        vue-circle(ref="progress2" :progress='60', :size='200', :reverse='true', line-cap='round', :fill='fill2', empty-fill='rgba(0, 0, 0, .1)', :animation-start-value='0.0', :start-angle='4.7', insert-mode='append', :thickness= '14', :show-percent='true', @vue-circle-progress='progress', @vue-circle-end='progress_end')
                            span.pos-mes2 2017
                        table.striped
                            body
                                tr
                                    td Monto
                                    td.strong USD 1 363.00
                                tr
                                    td Meta
                                    td USd 6 000.00
</template>
<script>
    import { mapGetters, mapActions, mapState } from 'vuex'

    export default {
        name:'card1',
        data(){
            return{
                fill1: { color: '#49D7BB' },
                fill2: { color: '#768EA6' },
                index: 0,
            }
        },
        methods:{
            ...mapActions({
                cambiarMes: 'cambiarMes',
            }),
            progress(event,progress,stepValue){
                // console.log(stepValue);
            },
            progress_end(event){
                // console.log("Circle progress end");
            }        
        },
        computed:{
            ...mapState({
                productos: state => state.productos
            }),
            ...mapGetters({
               mesActual: 'mesActual' 
            })
        },
        watch:{
            mesActual(){
                this.$refs.progress1.updateProgress(Math.floor(Math.random() * (100 - 0)) + 0);
                this.$refs.progress2.updateProgress(Math.floor(Math.random() * (100 - 0)) + 0);
            }
        }
    }
</script>

<style>
    .ambito1 .card-cont{
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        font-family: Roboto;
        font-size: 12px;	
        line-height: 2px;
        box-sizing: border-box;
        background-color: #ffffff;
    }
    .ambito1 .card-cont .meses{
        box-shadow: 0 3px 9px 0 rgba(0,0,0,0.12);
        padding: 1rem 0;
        margin: 0;
    }
    .ambito1 .card-cont .meses span{
        font-size: 20px;	
        font-weight: 500;	
        letter-spacing: 0.82px;	
        line-height: 21px;
        color: #BCCBDA;
        margin-left: 1rem;
        vertical-align: middle;
    }
    .ambito1 .card-cont .meses a i{
        font-size: 2rem;
        color: #768EA6!important;
    }
    .ambito1 .productos h3,
    .ambito1 .progres h3{
        color: #49D7BB;	
        font-size: 14px;	
        font-weight: bold;	
        line-height: 15px;
        text-align: left;
        margin-left: 2rem;
    }
    .ambito1 .productos table{
        color:#768EA6;
    }
    .ambito1 .productos table td:nth-child(1) {
        text-align: center;
    }
    .ambito1 .productos tr:nth-child(odd){
        background: #F1F5F9;
    }
    .ambito1 .productos tr:nth-child(-n+3){
        color: #376075;
        font-weight: bold;
    }
    .ambito1 .productos{
        border-right: 1px solid #E9EDF1;
    }
    .ambito1 .progres .prog-bar{
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
        margin-top: 3rem;
    }
    .ambito1 .prog-bar .circle1,
    .ambito1 .prog-bar .circle2{
        display: flex;
        flex-direction: column;
    }
    .ambito1 .prog-bar table{
        margin-top: 1rem;
        font-size: 12px;
        letter-spacing: 0.12px;	
        line-height: 14px;  
    }
    .ambito1 .prog-bar table body{
        background-color: #ffffff; 
    }
    .ambito1 .prog-bar .circle1 table{
         color: #49D7BB;
    }
    .ambito1 .prog-bar .circle2 table{
        color: #768EA6;
    }
    .ambito1 .prog-bar table tr:nth-child(2){
        color: #BCCBDA;		
        font-size: 12px;	
        text-align: right;
    }
    .ambito1 .prog-bar table td{
        text-align: right;
    }
    .ambito1 .prog-bar table tr{
        line-height: 0;
    }
    .ambito1 .prog-bar table td:nth-child(1){
        text-align: left;
    }	
    .ambito1 .prog-bar table td.strong{	
        height: 18px;
        width: 100%;
        font-size: 15px;
        font-weight: 900;
        letter-spacing: 0.15px;
        line-height: 18px;
    }
    .ambito1 .circle .pos-mes1,
    .ambito1 .circle .pos-mes2{
        position:absolute;
        bottom: 2rem;		
        font-size: 13px;
        font-weight: 900;	
        letter-spacing: 0.6px;	
        line-height: 15px;
    }
    .ambito1 .circle .pos-mes1,
    .ambito1 .circle1 span.percent-text{
        color: #49D7BB;
    }
    .ambito1 .circle .pos-mes2,
    .ambito1 .circle2 span.percent-text{
        color: #768EA6;
    }
</style>
