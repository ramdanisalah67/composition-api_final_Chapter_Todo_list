import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path:'/',name:'home',component: ()=> import ("@/components/HomePage")},
        {path:'/nav',name:'nav',component: ()=> import ("@/components/navBar")},
        {path:'/todos',name:'todos',component: ()=> import ("@/components/TodosPage")},
        {path:'/addTodo',name:'addTodo',component: ()=> import ("@/components/addTodos")},
        {path:'/editTodo/:id',name:'editTodo',component: ()=> import ("@/components/editTodo")}

    ]
})

export default router ;