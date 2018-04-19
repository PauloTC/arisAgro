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

export default {
  name: 'App',
  components: {
      toolbar,buttons,card1,card2
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
</style>
