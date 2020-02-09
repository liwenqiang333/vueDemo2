<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,html,#app{
  height:100%;
  display: flex;
  flex-direction: column;
}
</style>
