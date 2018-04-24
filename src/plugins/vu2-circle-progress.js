import Vue from 'vue'
import VueCircle from 'vue2-circle-progress'

Vue.use({
    install(vue, options) {
        vue.component('vue-circle', VueCircle)
    }
})