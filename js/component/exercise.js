const count = {
  template:"#count",
  data(){
    return{
      count:10
    }
  },
  methods:{
    plus(count){
      this.count++;
      this.$emit("p",count);
    },
    minus(count){
      this.count--;
      this.$emit("m",count);
    }
  }
};

const cc = new Vue({
  el:"#app",
  components:{
    count
  },
  methods:{
    pluclick(count){
      console.log(count);
    },
    minclick(count){
      console.log(count);
    }
  }
});