<template>
  <div>
    <client-only>
      <div ref="swiper" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="swiper-slide bg-cover bg-no-repeat bg-center"
            :style="{ backgroundImage: `url(${image})` }"
          ></div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 40,
        centeredSlides: true,
        keyboard: {
          enabled: true
        }
      },
      images: [
        '/img/room/5.jpg',
        '/img/room/4.jpg',
        '/img/room/2.jpg',
        '/img/room/1.jpg',
        '/img/room/3.jpg'
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiper.swiper
    }
  }
}
</script>

<style lang="scss">
.swiper-slide {
  height: 330px;
  @apply rounded-lg shadow-lg;
}
.swiper-container {
  @apply rounded;
}
</style>
