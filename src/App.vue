<template>
  <div id="app">
    <Header></Header>
    <Home></Home>
  </div>
</template>

<script>
// 引入头部
import Header from 'components/common/Header.vue';
//引入Home
import Home from './views/Home';
export default {
  components: {
    name: 'App',
    Header,
    Home
  }
}
</script>

<style>
@import url('assets/style/_reset.styl');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
