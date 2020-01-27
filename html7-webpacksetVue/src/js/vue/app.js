
export default {
  template:"" +
      "<div>" +
      " <h1>{{hh}}</h1>" +
      " <button @click='btnClick'>VBtn</button>" +
      " <h1>{{hhh}}</h1>" +
      "</div>",
  data(){
    return{
      hh:"this this first h1 vue",
      hhh:"this is second h1 vue"
    }
  },
  methods:{
    btnClick() {
      console.log("click button vue");
    }
  }
}