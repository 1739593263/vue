var store = new Vue({
  el:"#store",
  data:{
    books:[
      {
        id:1,
        name:"The Great Gatsby",
        date:"2019-1-1",
        price:50,
        number:60
      },
      {
        id:2,
        name:"Harry Potter",
        date:"2019-5-3",
        price:40,
        number:60
      },
      {
        id:3,
        name:"deep dark fantasy",
        date:"2019-1-1",
        price:100,
        number:10
      },
      {
        id:4,
        name:"Educated",
        date:"2019-12-1",
        price:20,
        number:80
      },
    ]
  },
  computed:{
    FullPrice(){
      let Fullnum=0;
      // 1.
      // for(let i=0;i<this.books.length;i++){
      //     Fullnum+=this.books[i].price*this.books[i].number;
      // }

      //2.
      // for(let i in this.books){
      //   Fullnum+=this.books[i].price*this.books[i].number;
      // }

      //3.
      // for(let itemitem of this.books){
      //   Fullnum+=item.price*item.number;
      // }
      // return Fullnum;

      //4.reduce
      Fullnum = this.books.reduce(function (pre,n) {
        return pre+n.price;
      },0)
      return Fullnum;
    }
  },
  methods:{
    plus(index){
      // console.log(index);
      this.books[index].number++;
    },
    minus(index){
      // console.log(index);
      this.books[index].number--;
    },
    remove(index){
      this.books.splice(index,1)
    }
  },
  filters:{
    showPrice(price){
      return '$'+price.toFixed(2);
    }
  }
});


// high-class function:filter/map/reduce
const list = [11,47,45,23,76,9,82,12,3,5];
console.log(list);
//1.filter:
// if return value is true, inject it to newList. else filter
const newList = list.filter(function (n) {
  return n>30
});
console.log(newList);
//2.map:
const newList1 = newList.map(function (n) {
  return n*2
});
console.log(newList1);
//3.reduce:
// 0           newList[0]
// returnValue newList[1]
// returnValue newList[2]
// returnValue newList[3]
// returnValue newList[4]
// ...
// newList2(final returnValue)
const newList2 = newList1.reduce(function (preValue,n) {
  return preValue+n;
},0);
console.log(newList2);

const result = list.filter(n => n>30).map(n => n*2).reduce((preValue,n) => preValue+n);
console.log("result:"+result);
// const func = new Vue({
//   el:"#func",
//   data:{
//     list:[11,47,45,23,76,9,82,12,3,5],
//     result:0,
//   },
//   methods:{
//     //1. filter
//
//   }
// });