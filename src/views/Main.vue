<template>
    <div>
        <div class="top" :style="{backgroundImage: 'url('+data.avatar+')'}">
            <div class="top-div">
                <div class="left-div"><img :src="this.data.avatar"></div>
                <div class="right-div">
                    <p><span style="color:#ddd;background:red;font-size:12px;padding:2px;margin-right:4px">品牌</span>{{this.data.name}}</p>
                    <p>{{this.data.description}}</p>
                    <p>{{this.data.supprts ? data.s[0] : '' }}</p>
                </div>
            </div>
        <p class="p-text"><span>公告</span>{{this.data.bulletin}}</p>
      </div>
        <div class="router-link-div" style=" line-height: 3em;">
            <router-link  to='/goods'>商品</router-link>
            <router-link  to='/evaluate'>评价</router-link>
            <router-link  to='/business'>商家</router-link>
        </div>
        <router-view></router-view>
        <transition name="slide-fade">
          <div v-show="shopcarShow" class="shop-car">

          </div>
        </transition>
        <div @click="shopcarShow = !shopcarShow" class="shop-div">
             <div class="left">
                 <img src="../assets/shopcar.png">
                 <p>￥0 | 另需配送费￥{{this.data.deliveryPrice}}元</p>
             </div>
             <div class="right">
                 <p> ￥{{this.data.minPrice}}起送 </p>
             </div>
        </div>
    </div>
</template>

<script>
import { getSeller } from "../api/apis.js";

export default {
  data() {
    return {
      data: {},
      curLab: "商品",
      shopcarShow: false
    };
  },
  computed: {
    // filter
  },
  created() {
    // goodslist().then(res => {
    //   this.$store.commit("initGoodsList", res.data.data);
    //   for (let i = 0; i < res.data.data.length; i++) {
    //     for (let l = 0; l < res.data.data.foods.length; l++) {

    //     }
    //   }
    // });
    getSeller().then(res => {
      this.data = res.data.data;
      console.log(this.data.pics[2]);
    });
  }
};
</script>

<style lang="less" scoped>
.top {
  background-color: pink;
  .top-div {
    display: flex;

    padding: 1em;
    padding-bottom: 0;
    background-color: rgba(83, 69, 53, 0.8);
    background-repeat: no-repeat;
    .left-div {
      img {
        width: 70px;
        margin-right: 1em;
      }
    }
    .right-div {
      p {
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .p-text {
    height: 30px;
    line-height: 30px;
    color: rgb(230, 220, 220);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: rgba(0, 0, 0, 0.5);
    span {
      background-color: #fff;
      padding: 0.5em;
      margin: 0.5em;
      font-size: 12px;
      border-radius: 5px;
      font-weight: bold;
      color: rgb(37, 21, 21);
    }
  }
}
.router-link-div {
  display: flex;
  justify-content: space-around;
}
.shop-div {
  width: 100%;
  height: 50px;
  //   background: pink;
  bottom: 0;
  position: fixed;
  display: flex;
  .left {
    width: 70%;
    height: 50px;
    background-color: #222222;

    img {
      width: 15%;
      position: fixed;
      left: 30px;
      bottom: 15px;
    }
    p {
      margin-left: 7em;
      line-height: 50px;
    }
  }
  .right {
    width: 30%;
    height: 50px;
    background-color: #55585c;
    p {
      color: #aaa;
      text-align: center;
      line-height: 50px;
    }
  }
}
.shop-car {
  position: fixed;
  height: 200px;
  width: 100%;
  bottom: 50px;
  background-color: pink;
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.7, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(200px);
  opacity: 0;
}
</style>