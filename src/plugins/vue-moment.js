import Vue from 'vue'
import VueMoment from 'vue-moment'
import moment from 'moment'
import { Store } from 'vuex'

Vue.use(VueMoment)

Store.prototype.$moment = moment