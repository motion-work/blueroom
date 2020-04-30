<template>
  <Map>
    <EquipmentList />
    <Banner />
    <Pricing />
    <ContactForm />
    <Footer />
  </Map>
</template>

<script>
import Map from '~/components/Map'
import EquipmentList from '~/components/EquipmentList'
import Banner from '~/components/Banner'
import Pricing from '~/components/Pricing'
import ContactForm from '~/components/ContactForm'
import Footer from '~/components/Footer'

export default {
  components: {
    Map,
    EquipmentList,
    Banner,
    Pricing,
    ContactForm,
    Footer,
  },
}
</script>

<style lang="scss" scoped></style>
