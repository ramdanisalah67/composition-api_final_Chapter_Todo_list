<template>
    <div class="body">
      <div>Welcome, to add Todos</div>
      <div>
          <p>Todo</p><input type="text" v-model="todo.title" class="form-control w-25">
          <p>from</p><input type="date" v-model="todo.from"  class="form-control w-25">
          <p>to</p><input type="date" v-model="todo.to"  class="form-control w-25">
          <p><button class="btn btn-light mt-4" @click="editTodo">edit</button></p>
  
      </div>
    </div>
  </template>
  <script setup>
  import router from "@/router";
import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";
  
 
  const route = useRoute()
  const todo = ref({})
onMounted(()=>{
    const id = route.params.id
    console.log(id)
    const todos = JSON.parse(localStorage.getItem("todos"))
    todo.value = todos.find(todo=>todo.id == id)
    console.log(todo.value)
    
})
const editTodo = ()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))
  const index = todos.findIndex(todo=>todo.id == route.params.id)
  todos[index] = todo.value
  localStorage.setItem("todos",JSON.stringify(todos))
  console.log(todo.value)
  router.push({name:'todos'})
}
  

  </script>