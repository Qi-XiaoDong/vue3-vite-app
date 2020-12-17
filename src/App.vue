<template>
 <p>
   {{countRef}}
   <button @click="increase">点击</button>
 </p>
</template>

<script>
import { ref } from "vue"
export default {
  name: 'App',
  setup(){
    let countRef = ref(0);
    console.log(countRef);
    const increase = () => {
      console.log("执行了");
      countRef.value ++;
    }
    return{
      countRef,
      increase
    }
  },
  created () {
    console.log("实例初始化");
  }
}
</script>
31