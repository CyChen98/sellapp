<template>
    <div class="block">
        <div class="left-box">
          <ul class="content">
            <div @click="clickLeftBtn(i)" :class="{selected:i == curSelected ? true : false} " v-for="(v,i) in goodslist" :key="i">
              <img v-show=" v.type ==  1" src="../assets/img/discount_1@2x.png" style="width:20px">
              <img v-show=" v.type ==  2" src="../assets/img/decrease_1@2x.png" style="width:20px">
              <img v-show=" v.type ==  3" src="../assets/img/invoice_1@2x.png" style="width:20px">
              <img v-show=" v.type ==  4" src="../assets/img/guarantee_1@2x.png" style="width:20px">
            
              {{v.name}}
            </div>
          </ul>
        </div>
        <div class="right-box">
            <ul  class="content">
              <ul :id="ir" v-for="(vr,ir) in goodslist" :key="ir">
                <li style="padding:0.1em 0.5em;background-color: #ccc;font-size:14px">{{vr.name}}</li>
                <li v-for="(vr1,ir2) in vr.foods" :key="ir2" style="display:flex;padding:1em;border-bottom: 1px solid #ccc">
                    <img width="100em" :src="vr1.icon">
                    <div style="margin-left:1em">
                        <p>{{vr1.name}}</p>
                        <p>{{vr1.description}}</p>
                        <p><span>月销售总数:{{vr1.sellCount}}份</span><span>好评率{{vr1.rating}}%</span></p>
                        <p><span style="color:red;font-weight:bold">￥{{vr1.price}}</span>
                            <span style="color:#ccc;font-weight:bold;font-size:12px;text-decoration: line-through">{{vr1.oldPrice ? `￥`+vr1.oldPrice:''  }}
                            </span>
                             <span style="float: right;">
                               <span v-show=" vr1.num <= 0 ?  false:true ">
                                <button @click="subBtn(ir,ir2)">-</button>
                                {{vr1.num}}
                               </span>
                             <button @click="addBtn(ir,ir2)">+</button></span>
                        </p>
                    </div>
                </li>
            </ul>
            </ul>
        </div>
    </div>
</template>

<script>
import { getGoods } from "../api/apis.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      // data: [],
      curSelected: 0 //当前选项卡的索引
    };
  },

  methods: {
    clickLeftBtn(i) {
      this.curSelected = i;
      // console.log(i)
      this.rightDvi.scrollToElement(document.getElementById(i), 500);
    },
    addBtn(ir, ir2) {
      this.$store.commit("addBtn", { ir, ir2 });
    },
    subBtn(ir, ir2) {
      this.$store.commit("subBtn", { ir, ir2 });
    }
  },
  created() {
    getGoods().then(res => {
      this.$store.commit("initGoodsList", res.data.data);
      // this.data = res.data.data;
      console.log(res.data.data);
    });
  },
  mounted() {
    new BScroll(document.querySelector(".left-box"), {
      click: true
    });
    this.rightDvi = new BScroll(document.querySelector(".right-box"), {
      click: true,
      probeType: 3
    });
    this.rightDvi.on("scroll", ({ y }) => {
      let Y = Math.abs(y);
      if (Y > this.getDivMath.min && Y < this.divHeight.max) {
        // this.curSelected= this.divHeight.index
        this.curSelected = this.divHeight.index;
        return;
      }
    });
  },
  computed: {
    getDivMath() {
      let arr = [];
      let a = 0;
      for (let i = 0; i < this.data.length; i++) {
        //当前高度
        let divHeight = document.getElementById(i).offsetHeight;
        arr.push({ min: a, max: a + divHeight, index: i });
        a += divHeight;
      }
      return arr;
    },
    goodslist() {
      return this.$store.state.goodslist;
    }
  }
};
</script>

<style lang="less" scoped>
.selected {
  background: #fff;
}
.block {
  display: flex;
  height: 500px;
  .left-box {
    width: 80px;
    height: 300px;
    background-color: #f4f5f7;
    overflow: hidden;
    div {
      padding: 15px 0;
      text-align: center;
    }
  }
  .right-box {
    height: 300px;
    overflow: hidden;
    flex: 1;
    ul {
      // display: f
      li {
        list-style: none;
      }
    }
  }
}
button {
  width: 1.5em;
  border: 1px solid pink;
  background: rgba(255, 192, 206, 0.3);
}
</style>