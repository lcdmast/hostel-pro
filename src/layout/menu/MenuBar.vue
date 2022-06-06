<template>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo">
        <menu-item :menuList="menuList"></menu-item>
      </el-menu>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import MenuItem from './MenuItem.vue'
let menuList = reactive([
  {
    path: "/system",
    component: "Layout",
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Setting",
      roles: ["sys:manage"],
    },
    children:[
      {
        path: "/userList",
        component: "system/User/UserList",
        name: "userList",
        meta: {
          title: "用户管理类",
          icon: "UserFilled",
          roles: ["sys:user"],
        },
      },
      {
        path: "/roleList",
        component: "system/Role/RoleList",
        name: "rolelist",
        meta: {
          title: "角色管理",
          icon: "wallet",
          roles: ["sys:role"],
        },
      },
    {
      path: "/menuList",
      component: "system/Menu/MenuList",
      name: "menulist",
      meta: {
        title: "菜单管理",
        icon: "Menu",
        roles: ["sys:menu"],
      },
    },
    ]
  },
  
   {
    path: "/goodsRoot",
    component: "Layout",
    name: "goodsRoot",
    meta: {
      title: "物资管理",
      icon: "Setting",
      roles: ["sys:goodsRoot"],
    },
    children:[
      {
        path: "/goodsType",
        component: "/goods/GoodsType",
        name: "goodsType",
        meta: {
          title: "物质类型",
          icon: "UserFilled",
          roles: ["sys:goodsType"],
        },
      },
      {
        path: "/goodsList",
        component: "/goods/GoodsList",
        name: "goodsList",
        meta: {
          title: "物质信息",
          icon: "wallet",
          roles: ["sys:goodsList"],
        },
      },
    ]
   },
]);

</script>


<style scoped>
</style>