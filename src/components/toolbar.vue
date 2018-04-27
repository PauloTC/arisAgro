<template lang="pug">
    nav
        .nav-wrapper
            .icon-span
                a.brand-logo(href='#!')
                    i.material-icons dehaze 
                span TABLERO GENERAL
            ul.right.hide-on-med-and-down.datos
                li.name Eduardo Salas
                li.cargo Admin
            //- img(src:'./assets/')
</template>

<script>
    export default {
        name:'toolbar'
    }
</script>

<style scoped>

nav{
    color: #1D456B;	
    line-height: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: white;
    padding: 0 2rem;
}
nav .nav-wrapper a{
    color: #1D456B;
}
nav .nav-wrapper .icon-span {
    position: relative;
}
nav .nav-wrapper .icon-span span{
    position:absolute;
    left: 3rem;
    top: 1.5rem;    
    font-size: 1.3rem;	
    line-height: 16px;
}
nav hr{
    height: 3rem;
}
nav .datos {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    
}
nav .name{
    color: #1D456B;
    margin: 0;
}
nav .cargo{
    color: #49D7BB;		
    font-size: 11px;	
    line-height: 13px;	
    text-align: right;
}
</style>
