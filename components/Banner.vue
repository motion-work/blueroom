<template>
  <div class="bg-purple-300 relative banner">
    <div
      class="container flex flex-col-reverse lg:flex-row flex-wrap h-full items-center"
    >
      <div class="w-full lg:w-1/3">
        <img
          src="~/assets/img/waiter.svg"
          alt=""
          class="absolute bottom-0 positioning mr-6"
        />
      </div>
      <div class="w-full lg:w-2/3 text-white text-padding pt-6 lg:pt-0">
        <h2 class="text-6xl font-bold">Catering</h2>
        <p class="max-w-md text-xl mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  min-height: 500px;
}

@screen sm {
  .banner {
    min-height: 480px;
  }
}

@screen md {
  .banner {
    min-height: 450px;
  }
}

@screen lg {
  .banner {
    min-height: auto;
    @apply h-56;
  }
}

@screen lg {
  .text-padding {
    padding-left: 11rem;
  }
}
@screen xl {
  .text-padding {
    padding-left: 8rem;
  }
}

.positioning {
  right: 0;
}

@screen lg {
  .positioning {
    right: auto;
  }
}
</style>
