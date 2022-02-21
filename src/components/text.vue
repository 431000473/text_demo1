<template>
<h2>{{store.helloWorld}}</h2>
<h2>{{helloWorld}}</h2>
<el-button @click="changeClick">改变</el-button>
<h1>uid:{{store.getUid}}</h1>
</template>
<script lang="ts" setup name="text">
import { mainStore } from '../store';
import { storeToRefs } from 'pinia';
import axios from '../utils/axios'
// 执行这个实例
const store = mainStore()
// 如果是解构 需要使用 storeToRefs 不然就会失去响应式
const { helloWorld } = storeToRefs(store)
const changeClick = function(){
  store.changeHello('飒飒')
}
axios.get('user').then(res=>{}).catch(err => console.error(err))
</script>
<style lang="scss">
h2{
  color: red;
}
</style>