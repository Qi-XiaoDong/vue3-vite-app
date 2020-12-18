<template>
<input type="text" v-model="NewTaskTitleRef">
<button @click="addTaskToListFunc">点击</button>
</template>

<script>
import useToDoList from "./compositionApi/useToDoList";
import useAddTaskToList from "./compositionApi/useAddTaskToList";
export default {
  setup(){
    const {toDoListRef} = useToDoList()
    return {
      toDoListRef,
      ...useAddTaskToList(toDoListRef.value)
    }
  }
} 
</script>
