var comp = new Vue({
  el:"#comp",
  data:{
    firstName: "lover",
    lastName: "fucker"
  },
  computed:{
    set: function(){
      console.log("computed.get")
    },
    // get:function(){
    //   return this.firstName+' '+this.lastName
    //   console.log("computed.get")
    // },
    fullName: function(){
      console.log("fullName");
      return this.firstName+' '+this.lastName
    }
  },
  methods:{
    getFullName:function(){
      console.log("getFullName");
      return this.firstName+' '+this.lastName
    }
  }

});