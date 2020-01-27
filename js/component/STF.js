const cpn = {
  template:"#sf",
  data(){
    return{
      categories:[
        {id:1,name:"A"},
        {id:2,name:"B"},
        {id:3,name:"C"},
        {id:4,name:"D"},
        {id:5,name:"E"},
      ]
    }
  },
  methods:{
      ibutton(item){
        this.$emit("btnclick",item)
        // console.log(item);
      }
    }
};

const app = new Vue({
  el:"#app",
  data:{
    message:"hello",
  },
  components:{
    cpn
  },
  methods:{
    cpnClick(item){
      console.log("click",item);
    }
  }
})