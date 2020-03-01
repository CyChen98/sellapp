<template>
    <div id="eva-box">
         <Row >
            <i-col span="15" push="9" style="padding:1em">
                <p>服务态度
                   <Rate :value.sync="value1"></Rate>
                   <span>{{value1}}</span>
                </p>
                <p>服务态度
                   <Rate :value.sync="value2"></Rate>
                   <span>{{value2}}</span>
                </p>
                <p>配送时间
                </p>
            </i-col>
            <i-col span="9" pull="15" style="font-size:12px;text-align: center;border-right: 1px solid #ccc; padding: 0.5em;">
                <p style="font-size:30px;color:orange">3.9</p>
                <p style="font-weight:bold">综合评分</p>
                <p style="color:#aaa">高于周边商场69.2%</p>
         </i-col>
        </Row>
        <div class="block">
            <div class="block1">
                <p>全部<span>{{this.data.length}}</span></p>
                <p>满意</p>
                <p>不满意</p>
            </div>
            <div class="block2">
                <Icon type="ios-checkmark"></Icon>
                <span style="color:#aaa">只看有内容的评价</span>
            </div>
        </div>
        <ul v-for="(v1,i1) in this.data" :key="i1">
            <li class="listpad" style="display: flex">
                <div>
                    <img :src="v1.avatar" width="25em">
                </div>
                <div>
                    <div class="name-time"><p>{{v1.username}}</p> <p>{{v1.rateTime}}</p></div>
                    <p><Rate :value.sync="v1.score"></Rate>{{v1.deliveryTime}}分钟送达</p><!-- {{v1.score}} -->
                    <p>{{v1.text}}</p>
                    <p>{{v1.rateType}}<span class="v2-box" style="border:1px solid #ccc;padding:5px;" v-for="(v2,i2)  in v1.recommend" :key="i2">{{v2}}</span> </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { Ratings } from "../api/apis.js";
// import { getSeller } from "../api/apis.js";
export default {
  data() {
    return {
      data: [],
      value1: 3.9,
      value2: 4
    };
  },
  methods: {},
  created() {
    Ratings().then(res => {
      //    console.log(res.data.data)
      this.data = res.data.data;
      console.log(res.data.data);
      this.data.forEach(function(v) {
        function newtime(sjx) {
          var sj = new Date(sjx);
          var year = sj.getFullYear();
          var month = sj.getMonth() + 1;
          if (month < 10) {
            month = "0" + month;
          }
          var day = sj.getDate();
          if (day < 10) {
            day = "0" + day;
          }
          var hours = sj.getHours();
          if (hours < 10) {
            hours = "0" + hours;
          }
          var minutes = sj.getMinutes();
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          var seconds = sj.getSeconds();
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
          return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        }
        v.rateTime = newtime(v.rateTime);
      });
    });
  }
};
</script>
<style  lang="less" scoped>
#eva-box {
  margin-bottom: 50px;
  border-top: 1px #ccc solid;
  Row {
    background-color: #fff;
    margin-bottom: 1em;
  }
  .block {
    padding: 0 0.5em;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .block1 {
      display: flex;
      border-bottom: 1px solid #ddd;
      p {
        padding: 0.5em 1em;
        background-color: skyblue;
        margin: 1em;
        font-size: 12px;
        color: #fff;
      }
    }
    .block2 {
      margin: 0.5em;
    }
  }
  .listpad {
    padding: 1em;
  }
  .name-time {
    display: flex;
    justify-content: space-between;
  }
}
</style>
