<template lang="pug">
    nav
        .nav-wrapper
            .icon-span
                a.brand-logo(href='#!')
                    i.material-icons dehaze 
                span TABLERO GENERAL
            .right.hide-on-med-and-down.datos
                .borde
                .detalles
                    span.name Eduardo Salas
                    span.cargo Admin
                .imagen
                    //- img(src='../assets/images.png')
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
nav .datos {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem 1.5rem;
    width: 17rem;
}
nav .datos .borde{
    height: 37px;
    width: 2px;
    background-color: rgba(212, 216, 220, 0.7);
}
nav .detalles{
    display: flex;
    flex-direction: column;
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
.imagen{
    background-image: url('http://img4.wikia.nocookie.net/__cb20110819022447/simpsons/images/5/53/Bart-simpson-prank-phone-call.jpg');
    background-size: cover;
    height: 3rem;
    border-radius: 50%;
    width: 4rem;
    margin-left: 10px;
}
</style>
