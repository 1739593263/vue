// 1. create component contractor
const cpn = Vue.extend({
  template:"<div>" +
      "<h1>template</h1>" +
      "<h2>template</h2>" +
      "<h3>tt..template</h3>" +
      "</div>",
});

//2. register component
Vue.component("cpn",cpn);

const app = new Vue({
  el:"#app",
  data:{
    message:"aaa"
  }
});

const cpnL = Vue.extend({
  template:"<div>" +
      "<h1>hahaha</h1>" +
      "<button>OK</button>" +
      "</div>"
})

// Vue.component('cpn',cpnL);

const app1 = new Vue({
  el:"#app2",
  components:{
    cpn: cpnL
  }
});

// const app1 = new Vue({
//   el:"#app2",
//   components:{
//     cpn: {
//           template:"<div>" +
//           "<h1>hahaha</h1>" +
//           "<button>OK</button>" +
//           "</div>"
//     }
//   }
// });



