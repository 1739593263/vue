var app = new Vue({
    el:"#app",
    data:{
        message:"new vue?",
        i_tag:"tag?",
        info:"please input info",
        reverse:"-reverse note as you see+"
    },
    methods:{
        reverseMessage: function(){
            this.reverse=this.reverse.split('').reverse().join('')
        }
    }
});

var list = new Vue({
    el:"#list",
    data: {
        texts:["hehe","haha","xixi","sabi"]
    }
});

list.texts.push("nima")

var calculate = new Vue({
    el:"#calculate",
    data:{
        num:0
    },
    methods:{
        plus:function() {
            this.num+=1
        },
        minus:function () {
            if (this.num > 0) {
                this.num -= 1
            }
        }
    }
});

setTimeout(function () {
   const clo = new Vue({
       el:'#clo',
       data:{
           message:'hello'
       }
   })
}, 1000);

var bind = new Vue({
    el:"#bind",
    data:{
        baidu:"https://www.baidu.com/",
        b:"//i0.hdslb.com/bfs/archive/0a055bd8c3daba615796be08a6326ceb6deee7c4.png",
        isRed:true,
        isEm:false,
        isBlue:false,
        message:"show",
        size:100,
        color:'green',
        sizeL:{fontSize: "150px"},
        colorL:{color:'blue'}
    },
    methods:{
        changC:function(){
            this.isRed=!this.isRed;
            this.isBlue=!this.isBlue;
        },
        getClasses:function(){
            return  { RED:this.isRed, ALIGN:this.isEm, BLUE:this.isBlue };
        }
    },
});

