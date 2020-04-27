<template>
  <div>
    <client-only>
      <div v-swiper:mySwiper="swiperOption" class="-mb-16 md:mb-0">
        <div class="swiper-wrapper mx-4">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="swiper-slide bg-cover bg-no-repeat bg-center pointer-resize rounded-lg shadow-md"
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

  mounted() {
    this.adjustSlider()
  },

  methods: {
    adjustSlider() {
      if (window.innerWidth < 768) {
        this.swiperOption.slidesPerView = 1.5
        this.swiperOption.spaceBetween = 20
        this.swiperOption.centeredSlides = false
      }
    }
  }
}
</script>

<style lang="scss">
.swiper-slide {
  height: 250px !important;
}

@screen md {
  .swiper-slide {
    height: 330px !important;
  }
}

.swiper-container {
  @apply rounded;
}

.pointer-resize {
  cursor: ew-resize;
}
</style>
