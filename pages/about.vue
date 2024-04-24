<template>
    <div>
      <h1>About</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aut. Cum modi incidunt illum cumque. Numquam quia nobis fuga adipisci?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ea laudantium. Aspernatur inventore temporibus esse laudantium veniam necessitatibus laboriosam doloribus?</p>
    </div>

    <div>{{ data }}</div>
</template>

<script setup>
  const {data} = await useFetch('/api/currency/GBP')
  
</script>

<style scoped>

 h1{
    font-size: 20px;
    margin-bottom: 20px;
 }

 p {
  margin: 20px 0;
 }
</style>