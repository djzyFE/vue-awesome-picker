/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import AwesomePicker from '../dist/vue-awesome-picker'
import 'reset-css'

Vue.use(AwesomePicker)
new Vue({
  el: '#app',
  render: h => h(App)
})
