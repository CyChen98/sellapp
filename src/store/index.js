import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //存放所有交互数据
    state:{
        name:'谢广坤',
        goodslist:[],
    },
    //改变state的唯一方式
    mutations:{
        changeName(state){
            state.name = "蔡虚琨"
        },
        initGoodsList(state,newArr){
            state.goodslist = newArr
        },
        addBtn(state,v){
            state.goodslist[v.ir].foods[v.ir2].num +=1
        },
        subBtn(state,v){
            state.goodslist[v.ir].foods[v.ir2].num -=1
        }
    },
})//仓库对象实例

//store.commit('changeName')//触发一个mutation

// console.log(store)