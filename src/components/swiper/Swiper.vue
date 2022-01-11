<script setup>
import { Swiper } from "swiper/vue/swiper-vue";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);
</script>

<template>
  <Swiper v-bind="$attrs">
    <slot />
  </Swiper>
</template>

<style>
@import "~swiper/swiper-bundle.min.css";
</style>
