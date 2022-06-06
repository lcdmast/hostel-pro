<template>
    <template v-for="menu in menuList" :key="menu.path">
<!-- 判断是否有下级菜单 -->
        <el-sub-menu v-if="menu.children &&  menu.children.length > 0" :index="menu.path">
            <template #title>
                <el-icon>
                    <!-- 动态组件 -->
                    <component :is="menu.meta.icon"></component>
                </el-icon>
                <span>{{menu.meta.title}}</span>
            </template>
            <!-- 递归算法 自己调用自己 -->
            <menu-item :menu-list="menu.children"></menu-item>
        </el-sub-menu> 
        <el-menu-item v-else :index="menu.path">
            <el-icon>
                <!-- 动态组件 -->
                <component :is="menu.meta.icon"></component></el-icon>
            <span>{{menu.meta.title}}</span>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
//接收父组传递的菜单数据
defineProps(['menuList'])
</script>

<style scoped>

</style>