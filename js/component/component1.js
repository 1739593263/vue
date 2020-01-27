const cpnS = Vue.extend({
  template:"<div>" +
      "<h2>son component</h2>" +
      "</div>"
});

const cpnF = Vue.extend({
  template:"<div>" +
      "<h1>Father component</h1>" +
      "<cpnS></cpnS>" +
      "</div>",
  components:{
    cpnS: cpnS
  }
});

// Vue.component("cpnF",cpnF);

const FS = new Vue({
  el:"#fs",
  components:{
    cpn: cpnF
  }
});
//
// Vue.component("cpn1",{
//   template:"#cpn1"
// });
// const tem = new Vue({
//   el:"#tem",
//   data:{
//
//   }
// });