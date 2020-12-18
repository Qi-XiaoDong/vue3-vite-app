/**
 * 生成一个唯一编号
 */
export function createid () {
  return Date.now() + Math.random().toString(16).substr(2, 5);
}