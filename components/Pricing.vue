<template>
  <section class="container mt-32">
    <div class="flex flex-wrap -m-3">
      <div class="w-full sm:w-1/2 lg:w-1/3 p-3">
        <h3 class="text-4xl lg:text-6xl text-center mb-10">1 Stunde</h3>
        <div
          class="bg-indigo-600 rounded flex items-center justify-center text-white py-20 px-16"
        >
          <span class="font-medium text-6xl"
            >Fr. <span class="ml-2 text-price">120</span></span
          >
        </div>
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/3 p-3">
        <h3 class="text-4xl lg:text-6xl text-center mb-10">1 Halber Tag</h3>
        <div
          class="bg-indigo-600 rounded flex items-center justify-center text-white py-20 px-16"
        >
          <span class="font-medium text-6xl"
            >Fr. <span class="ml-2 text-price">280</span></span
          >
        </div>
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/3 p-3">
        <h3 class="text-4xl lg:text-6xl text-center mb-10">1 Tag</h3>
        <div
          class="bg-indigo-600 rounded flex items-center justify-center text-white py-20 px-16"
        >
          <span class="font-medium text-6xl"
            >Fr. <span class="ml-2 text-price">460</span></span
          >
        </div>
      </div>

      <div class="w-full mt-8 mb-6">
        <p class="text-3xl text-center">Für Non-Profit-Organisationen</p>
      </div>

      <div class="w-full sm:w-1/2 lg:w-1/3 p-3">
        <div
          class="bg-indigo-600 rounded flex items-center justify-center text-white py-6 px-16"
        >
          <span class="font-medium text-3xl"
            >Fr. <span class="ml-2 text-5xl">78</span></span
          >
        </div>
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/3 p-3">
        <div
          class="bg-indigo-600 rounded flex items-center justify-center text-white py-6 px-16"
        >
          <span class="font-medium text-3xl"
            >Fr. <span class="ml-2 text-5xl">182</span></span
          >
        </div>
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/3 p-3">
        <div
          class="bg-indigo-600 rounded flex items-center justify-center text-white py-6 px-16"
        >
          <span class="font-medium text-3xl"
            >Fr. <span class="ml-2 text-5xl">299</span></span
          >
        </div>
      </div>
    </div>
    <p class="max-w-2xl text-2xl mt-20">
      Im Pauschalpreis ist die Nutzung der gesamten Einrichtung mit Ausnahme der
      Kaffeemaschine inbegriffen. <br />Kaffee oder Tee: 2 Franken<br />
      Non-Profit-Organisationen (NPOs) erhalten
      <strong>35 Prozent Rabatt</strong>.
    </p>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@responsive {
  .text-price {
    font-size: 5.125rem;
  }
}
</style>
