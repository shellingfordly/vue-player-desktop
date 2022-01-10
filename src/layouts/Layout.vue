<script setup>
import LayoutMenu from "./menu/LayoutMenu.vue";
import LayoutContent from "./content/LayoutContent.vue";
import LatoutFooter from "./footer/LatoutFooter.vue";
</script>

<template>
  <el-container>
    <el-container>
      <el-aside width="200px">
        <LayoutMenu />
      </el-aside>
      <el-container>
        <el-main>
          <LayoutContent />
        </el-main>
      </el-container>
    </el-container>
    <el-footer>
      <LatoutFooter />
    </el-footer>
  </el-container>
</template>

<style lang="less">
.el-container {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .el-aside::-webkit-scrollbar {
    display: none;
  }

  .el-footer {
    padding: 0;
  }
}
</style>
