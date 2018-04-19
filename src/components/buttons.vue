<template lang="pug">
    .row
        div(class='s10 offset-s1 group-btn')
            a(class='waves-effect waves-light btn dolar') DÓLARES AMERICANOS
            a(class='waves-effect waves-light btn soles') NUEVOS SOLES
</template>
<script>
    export default {
        name:'buttons'
    }
</script>
<style scoped>
    .group-btn{
        text-align: left;
        font-family: 'Roboto', sans-serif;
        margin: 2rem 5rem;
    }
    .group-btn .dolar{
        border-radius: 3px;	
        background-color: #49D7BB;
        box-shadow: 0 3px 9px 0 rgba(0,0,0,0.12);	
        font-weight: 500;	
        color: #FFFFFF;
        margin-right: 1rem;
        width: 15rem;
    }
    .group-btn .soles{
        border: 1px solid #E9EDF1;	
        border-radius: 3px;	background-color: #FFFFFF;	
        box-shadow: 0 3px 9px 0 rgba(0,0,0,0.12);
        color: #BCCBDA;	
        font-weight: 500;
        width: 15rem;
    }
</style>

