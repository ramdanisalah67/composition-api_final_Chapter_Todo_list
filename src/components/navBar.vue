<template>
  <div class="body">
    <div>
      <ul>
        <li><router-link :to="{name: 'home'}"> Home</router-link></li>
        <li><router-link :to="{name: 'todos'}"> View Todos</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script setup>

</script>

<style scoped lang="scss">

ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  width: 50%;
  position: relative;
  margin: auto;
  top: 30px;
  background: rgb(113, 129, 56);
  height: 40px;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
    font-size: 22px;
  }
}

</style>