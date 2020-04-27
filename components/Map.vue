<template>
  <div class="intro relative">
    <!-- Map -->
    <div class="absolute inset-0">
      <client-only>
        <MglMap
          :access-token="accessToken"
          :map-style="mapStyle"
          :scroll-zoom="false"
          :center="center"
          :zoom="zoom"
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
      <div
        class="absolute bottom-0 pb-10 lg:pb-20 mx-auto flex justify-center inset-x-0"
      >
        <a href="https://goo.gl/maps/RsrnwRqpcc5E2Xak7" target="blank">
          <div
            class="flex items-center flex-col bg-white rounded-full py-4 px-6 transition-transform transform duration-200 hover:scale-110 shadow-md"
          >
            <div class="flex items-center">
              <div class="overflow-hidden rounded-full mr-2">
                <img
                  src="~/assets/img/gmaps-icon.png"
                  alt="Google Maps"
                  class="h-6"
                />
              </div>

              In Google Maps öffnen
            </div>
          </div>
        </a>
      </div>
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
      zoom: 16,
      accessToken:
        'pk.eyJ1IjoibmF0dGhha2l0IiwiYSI6ImNqeXR3dWF0YTA4M20zbXByYnAwenQ0ODUifQ.fcbrMrNcT7igb3qFiE6VJg',
      mapStyle: 'mapbox://styles/natthakit/cjytwx7x20mje1cmspnsya991',
      center: [7.433453, 46.952595]
    }
  },

  computed: {
    roomCoords() {
      return [7.428753, 46.948811]
    },
    trainCoords() {
      return [7.436607, 46.948578]
    }
  },

  mounted() {
    if (window.innerWidth < 768) {
      this.center = [7.435725, 46.963184]
      this.zoom = 13.5
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  height: 155vh;
}

@screen 2xl {
  .intro {
    height: 190vh;
  }
}
</style>
