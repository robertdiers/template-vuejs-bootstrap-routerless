import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import VueSessionStorage from 'vue-sessionstorage'
import App from './App.vue'
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(VueI18n)
Vue.use(VueSessionStorage)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

//register axios
Vue.prototype.$http = axios

// Create VueI18n instance
import { messages } from './messages.js'
const i18n = new VueI18n({
  locale: 'en', // set locale - you migth use browser reference here
  messages, // set locale messages
})

/*
Create Vue instance and make accessible for console. Example:
'console.log(window.App.$session.get('vueuser').username)'
Please use $session to store data and JS imports for reusable functions.
*/
window.App = new Vue({ 
  i18n,
  render: h => h(App),
  data: {
    vueuser: {}
  },
  mounted() {
    this.loadData();
  },
  methods: {
      changeLocale(lang) {
        //change language
        i18n.locale = lang;
      },
      loadData() {
          // load all of the required meta information from server
          //TODO
          
          // create required objects like POST headers and user objects
          this.vueuser = {
            username: 'VueUser'
          }

          // store in session to make it accessible for components
          this.$session.set('vueuser', this.vueuser)

          // store transferdata in session, used to handover required info from one component to another
          this.$session.set('transferdata', '')
      }
  }
}).$mount('#app')
