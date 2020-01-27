const app = new Vue({
  el:"#app",
  data:{
    point:90,
    isShow:true
  }
});

const example = new Vue({
  el:"#example",
  data:{
    user:true
  },
  methods:{
    change:function(){
      this.user=!this.user;
    }
  }
})