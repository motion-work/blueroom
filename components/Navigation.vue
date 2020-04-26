<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 transiton-fast pt-6 sm:pt-16 pb-6p',
      isOutOfView ? 'fade-to-bg-white' : 'fade-to-bg-transparent'
    ]"
  >
    <div class="container flex justify-between items-center">
      <transition name="slide" mode="out-in">
        <nuxt-link v-if="!reachedMapArea" key="logo" to="/">
          <img src="/img/logo.svg" alt="theroom." />
        </nuxt-link>

        <h2 v-else key="map" class="font-bold text-2xl flex">
          10 Minuten zu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="43"
            viewBox="0 0 26 43"
            class="mx-4 h-8"
          >
            <defs>
              <style>
                .323403 {
                  fill: #fff;
                }
              </style>
            </defs>
            <path
              class="323403"
              d="M27,9a4,4,0,1,0-4-4A4.012,4.012,0,0,0,27,9Zm-7.5,6.8L14,44h4.2l3.5-16L26,32V44h4V28.9l-4.1-4.1,1.2-6A13.956,13.956,0,0,0,38,24V20a10.253,10.253,0,0,1-8.7-4.9l-1.9-3.2A3.9,3.9,0,0,0,24,10a4.013,4.013,0,0,0-1.5.3L12,14.6V24h4V17.3l3.5-1.5"
              transform="translate(-12 -1)"
            /></svg
          >vom Bahnhof
        </h2>
      </transition>

      <ul>
        <li>
          <button
            v-scroll-to="'#rent'"
            class="text-2xl font-medium bg-white rounded-lg px-10 py-3 border-2 border-transparent focus:outline-none hidden sm:inline"
            :class="{
              'border-indigo-700': isOutOfView,
              'shadow-md': !isOutOfView
            }"
          >
            Jetzt reservieren
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOutOfView: false,
      reachedMapArea: false
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.scrollHandler)
    })
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
  },

  methods: {
    scrollHandler(event) {
      const newOffset = window.scrollY
      this.isOutOfView = newOffset > document.querySelector('nav').clientHeight
      this.reachedMapArea = newOffset > 700
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-to-bg-transparent {
  transition: all 0.2s;
  @apply bg-transparent;
}
.fade-to-bg-white {
  transition: all 0.3s;
  @apply bg-white py-6;
}

.slide-enter-active {
  transition: all 0.2s ease;
}
.slide-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
