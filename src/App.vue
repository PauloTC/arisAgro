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
import moment from 'moment'

export default {
  name: 'App',
  components: {
      toolbar,buttons,card1,card2
  },
  created() {
    this.$store.dispatch('fechaActual')
    this.$store.dispatch('agregardata')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
body{
  /* background-color: #F1F5F9; */
  /* z-index: ; */
}
</style>
