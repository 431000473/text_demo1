import { defineStore } from "pinia";
// defineStore() 定义一个仓库。

// defineStore( )方法的第一个参数：相当于为容器起一个名字。注意：这里的名字必须唯一，不能重复。这个是官方特别说明的一个事情。
// defineStore( )方法的第二个参数：可以简单理解为一个配置对象，里边是对容器仓库的配置说明。当然这种说明是以对象的形式。

export const mainStore = defineStore('main', {
  state: () => {     // 存储全局的状态
    return {
      helloWorld: 'hello world!',
      uid:122233208
    }
  },
  getters: {
    getUid(state){
      return state.uid
    }
  }, //用来监视或者说是计算状态的变化的，有缓存的功能。
  actions: {
    changeHello(msg: string){
      try{
        this.helloWorld = msg
      } catch(err){}
    },
    changeUid(num: number){
      try {
        this.uid = num
      } catch(err){}
    }
  } //对 state 里数据变化的业务逻辑，需求不同，编写逻辑不同
})

// composition API 写法
// export const mainStore = defineStore('main', () => {
//   const helloWorld = ref('hello world!')
//   return {helloWorld}
// })