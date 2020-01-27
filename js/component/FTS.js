//Father to Son
const cpn = {
  template:"#fts",
  //transfer info from father to son, use props save info.
  //1.
  // props:["tmessage","tmovies"],
  //2.data prove in prop
  // props:{
  //   tmovies: Array,
  //   tmessage: String
  // },
  //3.
  props:{
    tmessage:{
      type:String,
      default:"This is a String",
      required:true
    },
    tmovies:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{}
  },
  methods:{}
};

const fts = new Vue({
  el:"#app",
  data:{
    message:"Hello",
    movies:["Aquaman","Superman","Wonder woman"]
  },
  components:{
    // when tag name equity with const name, we can use intensify write.
    // cpn:cpn => cpn
    cpn
  }
});

const cp = {
  template: "#cpnCam",
  props:{
    cmm:{
      type:String,
      default:"null"
    },
    cff:{
      type:Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return{}
  },
  methods: {}
};

const camel = new Vue({
  el:"#camel",
  data:{
    mm:"the camel mm",
    ff:["haha","hehe","xixi","kaka"]
  },
  components:{
    cp
  }
});
