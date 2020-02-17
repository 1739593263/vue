import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

axios({
  url: "https://127.0.0.1:80/START_war/employee/testInVue",
  // method:"post"
}).then(res => {
  console.log(res);
});

axios.create()
