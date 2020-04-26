<template>
  <div>
    <Navigation />
    <Map />

    <div class="content">
      <EquipmentList />
      <Banner />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import EquipmentList from '~/components/EquipmentList'
import Banner from '~/components/Banner'
import Pricing from '~/components/Pricing'
import ContactForm from '~/components/ContactForm'
import Footer from '~/components/Footer'
import Map from '~/components/Map'

export default {
  components: {
    Navigation,
    Map,
    EquipmentList,
    Banner,
    Pricing,
    ContactForm,
    Footer
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
  },

  head() {
    return {
      title: 'blueroom.'
    }
  }
}
</script>

<style scoped></style>
