<script setup>
import { onMounted, reactive } from "vue";
import { API } from "../../api";
import { Swiper, SwiperSlide } from "../../components/swiper";

const banners = reactive([]);

onMounted(async () => {
  const data = await API.GetBanner();
  data.banners.forEach((v) => banners.push(v));
});
</script>

<template>
  <div class="banner-container">
    <Swiper
      :loop="true"
      :autoplay="true"
      :pagination="true"
      :spaceBetween="20"
      class="swiper-container"
    >
      <SwiperSlide v-for="banner in banners" :key="banner.targetId">
        <img class="banner" :src="banner.imageUrl" :alt="banner.typeTitle" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="less">
.banner-container {
  .swiper-container {
    width: 600px;
    height: 270px;

    .banner {
      width: 600px;
      height: 222px;
      border-radius: 10px;
    }
  }
}
</style>
