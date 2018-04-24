import Vue from 'vue'
import BarChart from '../components/bar-chart'
require('chart.js/dist/Chart.bundle.min.js')

Vue.use({
    install(vue, options) {
        vue.component('bar-chart', BarChart)
    }
})