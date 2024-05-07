<template>
  <div class="body">
    <div>Welcome, to add Todos</div>
    <div>
        <p>Todo</p><input type="text" v-model="todo.title" class="form-control w-25">
        <p>from</p><input type="date" v-model="todo.from"  class="form-control w-25">
        <p>to</p><input type="date" v-model="todo.to"  class="form-control w-25">
        <p><button class="btn btn-light mt-4" @click="addTodo">add</button></p>

    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const todo = ref({
    id:"",
    title:"",
    from:"",
    to:""
})
todo.value.id =  Math.floor(Math.random() * (10000 - 1)) + 1;

const addTodo = ()=> {
    const todos = JSON.parse(localStorage.getItem("todos"))
    console.log(todos)
    if(todos !=null )   {
        todos.push(todo.value)
        localStorage.setItem("todos", JSON.stringify(todos) )
        console.log("vide")
    }
    else {
        console.log("none vide")
        const newTodos = ref([])
        newTodos.value.push(todo.value) 
        localStorage.setItem("todos", JSON.stringify(newTodos.value) )
        
    }
    gotToTodos()
}


const router = useRouter()

const gotToTodos = ()=>{
    router.push({name:'todos'})
}
</script>