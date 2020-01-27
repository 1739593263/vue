const {sum,multi,haha} = require("./export.js");

console.log(sum(20, 30));
console.log(multi(100, 25));
console.log(haha);

document.writeln("<h1>hello, it's me</h1>");

import Vue from "vue"

const app = new Vue({
  el:"#app",
  data:{
    message:"webpack creat vue"
  }
});

new Vue({
  el:"#app1",
  template:"" +
      "<div>" +
      " <h1>{{hh}}</h1>" +
      " <button @click='btnClick'>Btn</button>" +
      " <h1>{{hhh}}</h1>" +
      "</div>",
  data:{
    hh:"this this first h1",
    hhh:"this is second h1"
  },
  methods:{
    btnClick() {
      console.log("click button");
    }
  }
});

// const App = {
//
// };
import App from "./vue/app.js"
new Vue({
  el:"#vuef",
  template:"<App/>",
  components:{
    App
  }
});
