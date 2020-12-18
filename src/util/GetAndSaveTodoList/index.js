const LocalKey = "local-key"
/**
 *  从本地缓存中得到任务列表
 */
export function GetToDoListFromLocal () {
  let toDoList = localStorage.getItem(LocalKey);
  if (toDoList) {
    return JSON.parse(toDoList);
  }
  return []
}

/**
 * 保存任务列表到本地
 * @param {*} toDoList toDoList 要保存的任务列表
 */
export function SaveToDoListToLocal(toDoList) {
  toDoList = JSON.stringify(toDoList);
  localStorage.setItem(LocalKey,toDoList)
}

export const  GetAndSaveToDoList = {
  SaveToDoListToLocal,
  GetToDoListFromLocal
}