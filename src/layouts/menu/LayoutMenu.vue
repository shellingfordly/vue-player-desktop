<script setup>
import { Menu as IconMenu } from "@element-plus/icons-vue";
import { useMenuData } from "./useMenuData";

const { baseMenu, createSongList, collectSongList } = useMenuData();

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};

const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<template>
  <el-menu
    default-active="2"
    class="layout-menu"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item :index="i" v-for="(menu, i) in baseMenu" :key="i">
      <el-icon><icon-menu /></el-icon>
      <span>{{ menu.value }}</span>
    </el-menu-item>
    <el-menu-item-group title="创建的歌单">
      <el-menu-item :index="i" v-for="(menu, i) in createSongList" :key="i">
        <el-icon><icon-menu /></el-icon>
        <span>{{ menu.value }}</span>
      </el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="收藏的歌单">
      <el-menu-item :index="i" v-for="(menu, i) in collectSongList" :key="i">
        <el-icon><icon-menu /></el-icon>
        <span>{{ menu.value }}</span>
      </el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<style lang="less">
.layout-menu {
  min-height: 100%;
}
</style>
