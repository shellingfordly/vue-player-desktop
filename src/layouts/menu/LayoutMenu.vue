<script setup>
import { useRouter } from "vue-router";
import { useMenuData } from "./useMenuData";

const { baseMenu, mySongList, createSongList, collectSongList } = useMenuData();
const router = useRouter();

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};

const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

function onClick(menu) {
  router.push({ name: menu.name });
}
</script>

<template>
  <el-menu
    default-active="2"
    class="layout-menu"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item
      :index="i"
      v-for="(menu, i) in baseMenu"
      :key="i"
      @click="onClick(menu)"
    >
      <span>{{ menu.value }}</span>
    </el-menu-item>
    <el-menu-item-group title="我的音乐">
      <el-menu-item
        :index="menu.name"
        v-for="menu in mySongList"
        :key="menu.name"
        @click="onClick(menu)"
      >
        <SvgIcon :name="menu.icon" />
        <span style="margin-left: 5px">{{ menu.value }}</span>
      </el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="创建的歌单">
      <el-menu-item
        :index="menu.name"
        v-for="menu in createSongList"
        :key="menu.name"
        @click="onClick(menu)"
      >
        <span>{{ menu.value }}</span>
      </el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="收藏的歌单">
      <el-menu-item
        :index="menu.name"
        v-for="menu in collectSongList"
        :key="menu.name"
        @click="onClick(menu)"
      >
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
