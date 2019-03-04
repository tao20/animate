<template>
  <div class="header-box">
    <h1 class="logo">
        <p></p>
    </h1>
    <div class="fun">
      <p class="search"></p>
      <p class="menu"></p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
    .header-box
      display flex
      position fixed
      background #fff
      z-index 100
      width 100%
      height .5rem
      justify-content space-between
      align-items center
      .logo
        p   
          width 1.2rem
          height .5rem
          background url('/img/sc_img_default.png') no-repeat 0 -0.51rem
          background-size 2.96rem 1.4rem
      .fun
        display flex
        margin-right  .025rem
        .search,.menu
          width .27rem
          height .27rem
          margin .076rem
          background url('/img/sc_img_default.png') no-repeat -1.42rem -1.06rem
          background-size 2.96rem 1.4rem
        .menu 
          background-position-x -1.1rem
</style>