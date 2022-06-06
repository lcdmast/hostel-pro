<template>
  <el-container class="layout">
      <el-aside width="200px" class="asside">
          <MenuBar></MenuBar>
      </el-aside>
      <el-container>
        <el-header class="header">
            <Header></Header>
        </el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Header from '@/layout/header/Header.vue';
import MenuBar from '@/layout/menu/MenuBar.vue';
</script>

<style scoped lang="scss">
    .layout{
        height: 100%;
        .asside{
            background-color: blueviolet;
        }
        .header{
            background-color: chocolate;
        }
        .main{
            background-color: darkcyan;
        }
    }
</style>