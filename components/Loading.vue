<template>
  <transition
    name="fade"
    appear
    appear-enter-class="fade-enter-active"
    leave-active-class="fade-leave-active"
  >
    <div v-if="loading" class="fixed inset-0 bg-white z-top flex-center">
      <Logo />
    </div>
  </transition>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo,
  },

  data() {
    return {
      loading: true,
    }
  },

  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },

  head() {
    return {
      bodyAttrs: {
        class: this.loading ? 'overflow-hidden' : '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  animation: fade 0s;
}
.fade-leave-active {
  animation: fade 0.3s reverse ease-in;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
