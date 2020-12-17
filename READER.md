# vue3

## 搭建项目

- cli

- vite

## vue2 和 vue3 的区别

> 1.vue3 仍然可以使用vue2的方式编写代码
> 2.开发复杂项目的时候推荐使用vue3的编写方式

- 使用**createApp**创建实例

```js
// vue3 不存在构造函数Vue
createApp("根组件").mount("#app");
// vue2
new Vue(options).$mount("#app");
```

- 使用插件

```js
// vue3 Vue实例
const app = createApp("根组件").mount("#app");
app.use("插件")
// vue2 构造函数Vue
Vue.use("插件名");
```

- **this**指向

```js
// vue3 指向的是代理对象

// vue2 指向的是组件实例对象
```

- **可以有多个根节点存在**

### 重大改变 **composition Api**

- vue2 为 option Api (配置式)

> 复杂组件中功能比较分散，所以大项目不方便维护

#### composition Api

1. **setup**: 所有生命周期钩子函数执行前调用**this为undefined**
2. 可以有返回值，返回的值会附着再组件实例上
3. vue实例无法对setup中的值做**响应式处理**

> 使用**ref**对setup中的数据做处理```let countRef = ref(0)```这样就可以完成响应式
> 使用**ref**后**count会变为一个代理对象**，实例中的count实际为 **count.vulue**
> 在**setup**中count仍然是一个对象，所以如果要操作count应该写成**count.value**
> **官方小技巧**：凡是在setup中创建的响应数据都加上**Ref后缀**

```js
setup () {
  let countRef = ref(0); // 包装后的代理对象 
  const increase = () => {
    countRef.value ++;
  }
  return{   // count 和 increase 会附着再组件实例上
    countRef,
    increase
  }
}
```

4.可以将setup中的代码提到单独的文件*可以减少组件中的代码*

```js
function useCount () {
  let countRef = ref(0);  
  const increase = () => {
    countRef.value ++;
  }
  return{   
    countRef,
    increase
  }
}

setup () {
  return {
    ...useCount();
  }
}
```
