Vue.component("model",{
  template:"#cpn",
  data(){
    return {
      counter:0,
    }
  },
  methods:{
    plus(){
      this.counter++;
    },
    minus(){
      this.counter--;
    }
  }
});

const cal = new Vue({
  el:"#cal",
  data:{
    message:"aaa"
  },
});

