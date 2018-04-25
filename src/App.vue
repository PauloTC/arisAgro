<template lang='pug'>
  div(id="app")
    toolbar
    buttons
    card1
    card2
</template>

<script>
import toolbar from './components/toolbar'
import buttons from './components/buttons'
import card1 from './components/card1'
import card2 from './components/card2'
// import minicard from './components/minicard'
import moment from 'moment'

export default {
  name: 'App',
  components: {
      toolbar,buttons,card1,card2
  },
  data() {
    return {
      dataSelected: '',
    }
  },
  methods:{
    pasarData:function(val) {
      this.dataSelected = val;
    }
  },
  created() {
    this.$store.dispatch('fechaActual')
    this.$store.dispatch('agregardata')
    this.$store.dispatch('habilitar')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
body{
  /* background-color: #F1F5F9; */
}
</style>
