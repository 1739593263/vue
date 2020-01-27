let define
const btns = document.getElementsByTagName("button");
for (let i=0; i<btns.length; i++){
  btns[i].addEventListener("click",function () {
    console.log("btn No."+i);
  })
};

//var define
// var btns1 = document.getElementsByTagName("button");
// for(var i=0; i<btns1.length; i++){
//   (function(i){
//       btns1[i].addEventListener("click",function(){
//         console.log("btn1 No."+i)
//       })
//     })(i)
//
// }


