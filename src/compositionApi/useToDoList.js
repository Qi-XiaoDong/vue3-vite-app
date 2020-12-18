/**
 * 1. 产生一个响应数据toDoListRef
 * 2. toDoListRef数据的来源为 localStorage(模拟数据请求);
 * 3. 使用watchEffect监听toDoListRef数据的变化
 * 4. toDoListRef数据变化后保存到localStorage(模拟数据提交);
 */
import { ref, watchEffect} from "vue"
import {GetAndSaveToDoList} from "../util"
export default function useToDoList () {
  // 需要一个任务列表
  let toDoListRef = ref(GetAndSaveToDoList.GetToDoListFromLocal());
  // 测试
  window.toDoListRef = toDoListRef
  // 监控任务列表的改变
  watchEffect(() => {
    GetAndSaveToDoList.SaveToDoListToLocal(toDoListRef.value);
  })
  return {
      toDoListRef
  }
}