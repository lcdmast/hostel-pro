<template>
  <div>hello world</div>
  <el-button type="primary" size="default" @click="addBtn">新增</el-button>
   <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <el-icon :size="20">
    <Edit />
  </el-icon>
  <el-icon color="#409EFC" class="no-inherit">
    <Share />
  </el-icon>
  <el-icon>
    <Delete />
  </el-icon>
  <el-icon class="is-loading">
    <Loading />
  </el-icon>
  <el-button type="primary">
    <el-icon style="vertical-align: middle">
      <Search />
    </el-icon>
    <span style="vertical-align: middle"> Search </span>
  </el-button>
  <div>{{count}}</div>
</template>
<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {testStore} from '@/store/test/index'
//获取store
const store = testStore()

//获取store 里面的count
const {count} = storeToRefs(store);

const addBtn = () => { 
  store.count ++
}
</script>
<style scoped>

</style>
