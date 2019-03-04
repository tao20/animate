<template>
<!-- 轮播图 -->
<div class="index">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
          <img src="/img/1.jpg" alt="">
      </div>
      <div class="swiper-slide">
          <img src="/img/2.jpg" alt="">
      </div>
      <div class="swiper-slide">
          <img src="/img/3.jpg" alt="">
      </div>
      <div class="swiper-slide">
          <img src="/img/4.jpg" alt="">
      </div>
    </div>
  </div>
    <!-- nav 部分 -->
    <ul class= 'top-nav'>
      <li class="lists">
          <a href="#">
            <i></i>
            <span>分类</span>      
          </a>
     </li>
      <li class='rank'>
          <a href="#">
            <i></i>
            <span>排行</span>      
          </a>
      </li>
      <li class="run">
          <a href="#">
            <i></i>
            <span>追更</span>      
          </a>
     </li>
      <li class="his">
          <a href="#">
            <i></i>
            <span>历史</span>      
          </a>
      </li>  
    </ul>

    <!-- 推荐 -->
    <div class="Re">
        <div class="sub-title">
            <p class="logo"></p>
            <p class="more"></p>
        </div>
        <ul class="content">
            <li 
                v-for="list in result"
                :key = 'list.id'
            >
            
                <img :src="list.cover_url">
                <h5>{{ list.title }}</h5>
                <p>{{ list.short_desc }}</p>
                
            </li>
        </ul>
    </div>

    <!-- 每日一推 -->
   <div class= 'light-comic'>
         <div class="sub-title">
            <p class="logo"></p>
            <p class="more"></p>
        </div>
        <div class="light-comic-recommend">
            <img src="/img/susu.jpg" alt="">
            <div class="bot">
                <p class="tit">狐妖小红娘</p>
                <p class="writer">作者: 小新</p>
            </div>
        </div>
        <h3>
            <strong></strong>
        </h3>
        <ul class="signIn">
            <li>
                <a href="#">
                    <img src="https://dev-gtimg.ac.qq.com/h5/index/images/promotion-topics.jpg?v=d9efa09892ec222a" alt="">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="https://dev-gtimg.ac.qq.com/h5/index/images/promotion-vip.jpg?v=7fad2a6876ec2e8c" alt="">
                </a>
            </li>
        </ul>
    </div>

    <!-- 今日更新 -->
    <div class="day-update">
        <div class="sub-title">
            <p class="logo"></p>
            <p class="more"></p>
        </div>

        <div class="day-update-list">
          <aside></aside>
          <ul class="list-box">
            <li>
                <img src="https://manhua.qpic.cn/vertical/0/11_20_32_ef7228fde90da7b0bd241be70548aae2_1547209939466.jpg/210" alt="">
                <div class="mes">
                  <h4>风信花</h4>
                  <p>作者:麟琅工作室</p>
                  <span>更新到11话</span>
                  <ul>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li>9.9</li>
                  </ul>
                </div>
            </li>
            <li>
                <img src="https://manhua.qpic.cn/vertical/0/09_23_39_7de4f11f1bd3f964857692ee20ccc5b3_1528558793048.jpg/210" alt="">
                <div class="mes">
                  <h4>夺天阙</h4>
                  <p>作者:花香蘑菇</p>
                  <span>更新到52话</span>
                  <ul>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li>9.5</li>
                  </ul>
                </div>
            </li>
            <li>
                <img src="https://manhua.qpic.cn/vertical/0/14_20_01_34b45f98056a51683da62d3d475fad37_1531569679802.jpg/210" alt="">
                <div class="mes">
                  <h4>迷都奇点</h4>
                  <p>作者:厚脸</p>
                  <span>更新到17话</span>
                  <ul>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li>9.4</li>
                  </ul>
                </div>
            </li>
          </ul>
        </div>
    </div>

    <!-- 日漫经典 -->
    <div class="japan-animate">
      <div class="sub-title">
            <p class="logo"></p>
            <p class="more"></p>
        </div>

        <ul >
          <li>
            <img src="https://manhua.qpic.cn/vertical/0/21_17_10_9acdac5f4d7d66b11fb88b1afcb79b3d_1505985015380.jpg/210" alt="">
            <h4>寄宿学校的朱丽叶</h4>
            <p>校园 恋爱</p>
          </li>
          <li>
            <img src="https://manhua.qpic.cn/vertical/0/17_17_14_7bb9b6a79f7ee5446310cd5889b762a3.jpg/210" alt="">
            <h4>终结的炽天使</h4>
            <p>魔幻 格斗 战争</p>
          </li>
          <li>
            <img src="https://manhua.qpic.cn/vertical/0/17_17_18_823e276780204673f617b230ea54ee3d.jpg/210" alt="">
            <h4>野良神</h4>
            <p>恋爱 热血 玄幻</p>
          </li>
        </ul>
    </div>

    <!-- 新作上线 -->
    <div class="new-comic">
      <div class="sub-title">
        <p class="logo"></p>
        <p class="more"></p>
      </div>

      <ul class="new-comic-list">
        <li 
          v-for ="list in new_comic"
          :key ='list.id'
        >
          <img :src='list.cover_url' alt="">
          <h4>{{ list.title }}</h4>
        </li>
      </ul>
    </div>

    <!-- 底部 -->
    <footer>
      <i></i>
      <ul>
        <li>电脑版</li>
        <li>帮助</li>
        <li>意见反馈</li>
      </ul>
    </footer>

  <!-- 返回顶部 -->
    <div class="goUp">
      <goUp></goUp>
    </div>

  </div>

</template>

<script>
//引入使用
// import { Swiper, swiperSlide } from "vue-awesome-swiper";
import goUp from '../common/goUp'
import _index from 'assets/js/_index.js';

export default {
  //引入之后  需要解构赋值
  ..._index,
  components: {
    goUp
  }
}
</script>
  
  <style lang="stylus" scoped>
  @import '../../../node_modules/swiper/dist/css/swiper.min.css';
  @import '~assets/style/_base.styl'
  @import '~assets/style/_ellipsis.styl'
  @import '~assets/style/_index.styl'
  

  .goUp 
    position fixed
    right .15rem
    bottom .15rem
  </style>
  