<template>
  <div class="home">
      <index></index>
  </div>
</template>

<script>
//引入 主页
import index from 'components/pages/index';

export default {
    components: {
      index
    }
  }
</script>

<style lang='stylus' scoped>
  .home 
    padding-top .5rem
</style>

