<template>
    <div class="block">
        <div class="block1" style="padding: 0.5em 1em">
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
        <div class="block2" style="padding: 0.5em 1em">
            <p style=" font-size: 16px">公告与活动</p>
            <div>
            <p style="color:red">{{this.data.bulletin}}</p>
            </div>
            <div>
                <div v-for="item in this.data.supports" :key="item.id">
                    <p style="padding:0.5em 0em">      
                        <img v-show=" item.type ==  0" src="../assets/img/discount_1@2x.png" style="width:20px">
                        <img v-show=" item.type ==  1" src="../assets/img/decrease_1@2x.png" style="width:20px">
                        <img v-show=" item.type ==  2" src="../assets/img/invoice_1@2x.png" style="width:20px">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
      
        <div class="block3" >
            <p>商品实景</p>
            <p class="p-box" v-for="(v,i) in this.data.pics" :key="i"><img :src="v" style="width: 10em;"></p>
        </div>
        <div class="block4">
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
    height: 200px;
    white-space: nowrap; /*文字不换行*/
    text-overflow: ellipsis;
    overflow: hidden;
    img {
      float: left;
    }
  }
  .block4 {
    div {
      p {
        padding: 1em 0.5em;
      }
    }
  }
}
</style>


