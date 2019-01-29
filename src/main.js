import Vue from 'vue'
import App from './App.vue'

Vue.filter('replace', function (value) {
  return new Array(value.length).fill('*').join('')
})

Vue.filter('hello', function (value) {
  return 'hello'
})

export default new Vue({
  el: '#app',
  render: h => h(App)
})
