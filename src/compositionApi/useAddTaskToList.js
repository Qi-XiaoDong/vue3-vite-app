/**
 * 1. 产生一个响应的数据NewTaskTitleRef，
 * 2. 产生一个将新增的数据
 */
import { ref } from "vue";
import {createid} from "../util"
/**
 * 新增一个任务，并且加入到任务列表中
 * @param {*} toDoList 任务列表
 */
export default function useAddTaskToList (toDoList) {
  // 新增的任务名称
  let NewTaskTitleRef = ref(""); 
  // 新增任务的方法
  let addTaskToListFunc = () => { 
    let title = NewTaskTitleRef.value && NewTaskTitleRef.value.trim();
    if (!title) {
      return;
    }
    // 产生一个新增的任务
    let task = {
      value: title,
      uuid: createid(),
      completed: false,
    }
    toDoList.push(task)
  } 
  return {
    NewTaskTitleRef, 
    addTaskToListFunc, 
  }
}