import {ref, computed, onMounted, onUnmounted } from "vue"
import {screenTask} from "../util"
/**
 * 筛选任务
 * @param {*} toDoListRef 任务列表
 */
export default function (toDoListRef){
  let screenKeyRef = ref("all");  // 筛选的关键字
  const hashList = ["all", "complete", 'active']
  function hashFunc () {
    let hash = window.location.hash;
    hash = hash.replace(/^#\/?/,"");
    if (!hashList.includes(hash)) {
      hash = "all"
    };
    screenKeyRef.value = hash;
    location.hash = "#" + hash;
  }
  onMounted(() => {
    location.hash = "#" + screenKeyRef.value;
    window.addEventListener("hashchange", hashFunc,false);
  });
  onUnmounted(() => {
    window.removeEventListener("hashchange", hashFunc,false);
  });
  /**
   * 根据任务列表和hash计算筛选后的值
   */
  const afterScreenKeyTaskList = computed(() => {
    console.log(toDoListRef.value, screenKeyRef.value);
    return screenTask(toDoListRef.value, screenKeyRef.value)

  });
  return {
    screenKeyRef,
    afterScreenKeyTaskList
  }
}