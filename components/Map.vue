<template>
  <div class="intro relative">
    <!-- Map -->
    <div class="map">
      <client-only>
        <MglMap
          :access-token="accessToken"
          :map-style="mapStyle"
          :scroll-zoom="false"
          :center="center"
          :zoom="16"
        >
          <MglMarker :coordinates="roomCoords" :offset="[0, -35]">
            <template slot="marker">
              <Pin />
            </template>
          </MglMarker>
          <MglMarker :coordinates="trainCoords" :offset="[30, 0]">
            <template slot="marker">
              <TrainStationLabel />
            </template>
          </MglMarker>
        </MglMap>
      </client-only>
      <HalfPipe class="absolute bottom-0 w-full z-10 pointer-events-none" />
    </div>
    <!-- END Map -->
    <Intro />
  </div>
</template>

<script>
import HalfPipe from '~/components/svgs/HalfPipe'
import Pin from '~/components/svgs/Pin'
import TrainStationLabel from '~/components/svgs/TrainStationLabel'
import Intro from '~/components/Intro'

export default {
  components: {
    HalfPipe,
    Pin,
    TrainStationLabel,
    Intro
  },

  data() {
    return {
      accessToken:
        'pk.eyJ1IjoibmF0dGhha2l0IiwiYSI6ImNqeXR3dWF0YTA4M20zbXByYnAwenQ0ODUifQ.fcbrMrNcT7igb3qFiE6VJg',
      mapStyle: 'mapbox://styles/natthakit/cjytwx7x20mje1cmspnsya991',
      center: [7.433447, 46.95154]
    }
  },

  computed: {
    roomCoords() {
      return [7.428753, 46.948811]
    },
    trainCoords() {
      return [7.436607, 46.948578]
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  height: 200vh;
}

.map {
  @apply absolute inset-0 w-full;
}
</style>
