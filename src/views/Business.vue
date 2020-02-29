<template>
    <div class="block">
        <div class="block1">
            <div class="top-box" style="display: flex;justify-content:space-between">
                <div>
                    <p>{{this.data.name}}</p>
                    <p> {{this.data.sellCount}}</p>
                </div>
                <!-- <div>
                    <p><Icon type="heart"></Icon></p>
                    <p>已收藏</p>
                </div> -->
            </div>
            <div style="display: flex;justify-content: space-around;">
                <div><p>起送费</p><p>{{this.data.minPrice}}</p></div>
                <div><p>商品配送</p><p>{{this.data.deliveryPrice}}</p></div>
                <div><p>平均配送时间</p><p>{{this.data.deliveryTime}}</p></div>
            </div>
        </div>
        <div class="block2">
            <div><p>公告与活动</p>
            <p style="color:red">{{this.data.bulletin}}</p>
            </div>
        </div>
        <div class="block3">
            <p><img src="../assets/img/decrease_3@2x.png">{{this.data.supports[0].description}}</p>
            <p><img src="../assets/img/discount_1@2x.png">{{this.data.supports[2].description}}</p>
            <p><img src="../assets/img/discount_1@2x.png">{{this.data.supports[1].description}}</p>
        </div>
        <div class="block4">
            <p>商品实景</p>
            <p class="p-box" v-for="(v,i) in this.data.pics" :key="i"><img :src="v" style="width: 10em;"></p>
        </div>
        <div class="block5">
            <p>商家信息</p>
            <div v-for="(v,i) in this.data.infos" :key="i">
                <p>{{v}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { getSeller } from "../api/apis.js";
export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    getSeller().then(res => {
      //console.log(res.data.data)
      this.data = res.data.data;
      console.log(this.data);
    });
  }
};
</script>

 <style lang="less" scoped>
.block {
    margin-bottom: 50px;
  .block3 {
    margin: 20px 0;
    border-top: 1px solid #ccc;
    p {
      padding: 0.5em;
      border-bottom: 1px solid #ccc;
    }
  }
  .block4 {
  }
  .block5 {
      div{
          p{
              padding: 1em 0.5em;
          }
      }
  }
}
</style>


