import { createStore } from 'vuex'
// import { mutations } from './mutations'
// import { actions } from './actions'
// import axios from 'axios'

export default createStore(
  {
    state: {
      name: '看破',
      Adata: null,
      Bdata: {}
    },
    mutations: {
      name: (state, newValue) => {
        state.name = newValue
      },
      // 参数一：state，参数二：新值
      getname (state, newValue) {
        state.name = newValue
      },
      getAData (state, newValue) {
        state.Adata = newValue
      },
      getBData (state, newValue) {
        state.Bdata = newValue
      }
    },

    getters: {
      getId (state) {
        return state.typeId
      },
      getUser (state) {
        return state.user
      }
    },
    actions: {
      // 参数一：自带属性，参数二：新值
      setName (context, value) {
        // 修改getname的值
        context.commit('getname', value)
        // context.commit('name', value)
      }
      // getA (context) {
      //   // 返回一个Promise函数
      //   return new Promise((reslove, reject) => {
      //     // 请求
      //     axios.get('https://api.apiopen.top/recommendPoetry').then(res => {
      //       // 修改getAData的值
      //       context.commit('getAData', res)
      //       reslove(res)
      //     }).catch(res => { reject(res) })
      //   })
      // },

      // getB (context) {
      //   return new Promise((reslove, reject) => {
      //     axios.get('https://api.apiopen.top/recommendPoetry').then(res => {
      //       context.commit('getBData', res)
      //       reslove(res)
      //     }).catch(res => { reject(res) })
      //   })
      // }
    }
    // mutations,
    // actions
  }
  //   name为我们根据业务逻辑来定义的一个状态值
  // setName为我们在页面中调用的一个操作函数名称
  // mutations中的函数为变更状态的逻辑
)
