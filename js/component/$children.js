const app = new Vue({
  el:"#app",
  data:{
    name:"hello, I'm #app, the root div",
  },
  methods:{
    ccbtn(){
      console.log(this.$children);
      // this.$children[0].showMessage()
      // this.$children.map(function (n) {
      //   console.log(n.name);
      //   console.log(n.age);
      //   n.showMessage()
      // });
      console.log(this.$refs);
      console.log(this.$refs.aaa.name);
    }
  },
  components:{
    cpn:{
      template:"#children",
      data(){
        return{
          name:"son",
          age:15
        }
      },
      methods: {
        showMessage() {
          console.log("showMessage");
        }
      }
    },
    mycpn:{
      template:"<div>" +
          "<h2>my-cpn</h2>" +
          "</div>"
    },
    fcpn:{
      template:"#children1",
      data(){
        return{
          name:"fcpn"
        }
      },
      methods:{
        childbtn() {
          console.log(this.$parent.name);
        }
      },
      components:{
        ccpn:{
          template:"#children2",
          methods:{
            getRoot(){
              console.log(this.$root.name);
              console.log(this.$parent.name);
            }
          }
        }
      }
    }
  }
});