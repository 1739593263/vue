const father = new Vue({
  el:"#father",
  data:{
    num:0
  },
  methods:{
    receivenum(dnumber){
      this.num=parseInt(dnumber)
    }
  },
  components:{
    cpn:{
      template:"#son",
      props:{
        snumber:{
          type:Number,
          default:0
        }
      },
      data(){
        return{
          dnumber:this.snumber,
        }
      },
      methods:{
        numInput(event){
          this.dnumber=event.target.value;
          this.$emit("tofathernum",this.dnumber)
        }
      }
    }
  }
});



// const Fa = new Vue({
//   el:"#Fa",
//   data:{
//     num1:0,
//   },
//   methods:{
//     numm(dnumber){
//       this.num1=dnumber*1
//     }
//   },
//   components:{
//     cpn:{
//       template:"#son",
//       props:{
//         number:{
//           type: Number,
//           default: 0
//         }
//       },
//       data(){
//         return{
//           dnumber:this.number
//         }
//       },
//       methods:{
//         numInput(event){
//           this.dnumber=event.target.value;
//           this.$emit("numtofa",this.dnumber)
//         }
//       }
//     }
//   }
// });