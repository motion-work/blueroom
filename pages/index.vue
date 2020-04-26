<template>
  <div>
    <div class="relative">
      <Navigation />
      <ContentAfterMap />
      <div class="relative z-10">
        <Intro />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import ContentAfterMap from '~/components/ContentAfterMap'
import Intro from '~/components/Intro'

export default {
  components: {
    Navigation,
    ContentAfterMap,
    Intro
  },
  head() {
    return {
      title: 'blueroom.'
    }
  }
}
</script>

<style></style>
