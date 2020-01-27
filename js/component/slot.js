const slot = new Vue({
  el:"#slot",
  components:{
    cpn:{
      template:"#navi",
    },
    scpn:{
      template:"#multisolt",
    },
    dcpn:{
      template:"#domain",
      data(){
        return{
          languages:["Germany","Latin","Chinese","Pig Latin","Spanish"]
        }
      }
    }
  }
});