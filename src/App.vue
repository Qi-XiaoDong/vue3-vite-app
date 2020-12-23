<template>
<div class="action">
  <a href="#all" :class="{active: screenKeyRef === 'all'}">All</a>
  <a href="#complete" :class="{active: screenKeyRef === 'complete'}">Complete</a>
  <a href="#active" :class="{active: screenKeyRef === 'active'}">Active</a>
</div>
<div>
  <input type="text" v-model="NewTaskTitleRef">
  <button @click="addTaskToListFunc">点击</button>
</div>
<ul>
  <li :class="{complted: ele.completed}" v-for="ele in afterScreenKeyTaskList" :key="ele.uuid">
    <div>
      <input type="checkbox" v-model="ele.completed">
      {{ele.value}}
    </div>
  </li>
</ul>

</template>

<script>
import useToDoList from "./compositionApi/useToDoList";
import useAddTaskToList from "./compositionApi/useAddTaskToList";
import useScreenTask from "./compositionApi/useScreenTask";
export default {
  setup(){
    const {toDoListRef} = useToDoList()
    return {
      toDoListRef,
      ...useAddTaskToList(toDoListRef.value),
      ...useScreenTask(toDoListRef)
    }
  }
} 
</script>

<style scoped>
  .action {
    margin: 10px;
    color:#333;
  }
  .action a{
    color: inherit;
    display: inline-block;
    padding: 10px;
    text-decoration: none;
  }
  a.active{
    color:#008c8c;
  }
  .complted{
    color: #ccc;
  }
</style>
