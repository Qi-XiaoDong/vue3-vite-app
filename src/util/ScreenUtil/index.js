/**
 * 通过关键字筛选
 * @param {*} taskList 任务列表
 * @param {*} screenKey 筛选关键字
 */
export function screenTask (taskList, screenKey) {
  if (screenKey === "all") {
    return taskList
  }else if(screenKey === "complete") {
    return taskList.filter(ele => ele.completed);
  }else if (screenKey === "active") {
    return taskList.filter(ele => !ele.completed);
  }
}

export const secreen =   {
  screenTask
}