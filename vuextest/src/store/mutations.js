import {INCREMENT} from "./mutation-type";

export default {
  [INCREMENT](state){
    state.counter++;
  },
  decrement(state){
    state.counter--;
  },
  addCount(state,num){
    console.log(num);
    // 1. first commit way: transfer num
    // state.counter+=num;
    // 2. second commit way: transfer num as object to this methods
    state.counter+=num.num;
  },
  addStudent(state,student){
    state.students.push(student)
  },
  updateStudent(state){
    // state.info['address'] = "Los Angeles";
    Vue.set(state.info,"address","Los Angeles");
    // Vue.delete(state.info,"name");
  },
  updateActionStu(state){
    state.info.age = 12;
  },
}
