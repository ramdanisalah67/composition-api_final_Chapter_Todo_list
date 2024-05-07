<template>
  <div class="body">

    <div>Welcome, this is todos page </div>
    <div class="add-parent-icon">
        <i class="fa-solid fa-square-plus text-white" @click="goToAddTodo"></i>
    
    </div>
    <table class="table">
    
        <thead><tr><td>title</td><td>from</td><td>to</td><td>Actions</td></tr></thead>
        <tbody>
            <tr v-for="todo in todos" :key="todo.title"><td> {{ todo.title }} </td> <td> {{ todo.from }} </td>
                <td> {{ todo.to }} </td>
                <td>
                    <i class="fa-solid fa-pen-to-square" @click="toEditPage(todo.id)"></i>
                    <i class="fa-solid fa-delete-left" @click="deleteTodo(todo.id)"></i>
                </td>
        </tr></tbody>
        <div class="alert alert-info" v-if="emptyData">No data present !!</div>
    </table>
   
  </div>
</template>


<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router"

const todos = ref([])
const emptyData = ref(false)
onMounted(()=>{
     todos.value = JSON.parse(localStorage.getItem("todos"))
    if(todos.value == null || todos.value.length == 0) emptyData.value = true
})

const router = useRouter();
const goToAddTodo = ()=>{
    router.push({name: 'addTodo'})
}

const toEditPage = (myId)=>{
    router.push({ name: 'editTodo', params: { id: myId } });
}
const deleteTodo = (myId)=>{
    const todosList = JSON.parse(localStorage.getItem("todos"))
    const index = todosList.indexOf(e=>e.id == myId)
    todos.value.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(todos.value))
}
</script>
<style lang="scss" scoped>
.add-parent-icon {
    position: relative;
    left: 600px;
    margin-bottom: 30px;
}
.table {
    width: 70%;
    margin:auto;
    text-align: center;
    border-radius: 200px !important;
}
thead {
    font-weight: bolder;
    
}
.fa-square-plus {
  
    font-size: 50px;
    color: blue;
    cursor: pointer;
    border-radius: 100%;
}
.fa-pen-to-square {
   
    font-size: 25px;
    cursor: pointer;
    color: black;
}
.alert{
    position: relative;
    left: 260px;
    top: 100px;
}
.fa-delete-left {
    margin: 3px;    
    font-size: 25px;
    cursor: pointer;
    color: rgba(255, 0, 0, 0.753);
}

</style>