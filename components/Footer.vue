<template>
  <footer class="footer w-full bg-bottom bg-contain bg-no-repeat mt-64">
    <h3 class="quote text-center font-medium text-5xl">Raum für Innovation</h3>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  height: 500px;
  background-image: url('/img/inspiration-mobile.svg');
}

.quote {
  margin-top: 10vw;
}

@media only screen and (min-width: 1024px) {
  .footer {
    background-image: url('/img/inspiration.svg');
  }
}
</style>
