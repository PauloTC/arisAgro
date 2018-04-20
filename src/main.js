// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require('../node_modules/chart.js/dist/Chart.bundle.min.js')
import BarChart from './components/bar-chart'
// require('../node_modules/hchs-vue-charts/dist/vue-charts.js')

// Vue.use(VueCharts);
Vue.config.productionTip = false

Vue.component('bar-chart', BarChart)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
