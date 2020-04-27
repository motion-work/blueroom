<template>
  <section class="min-h-screen flex flex-col relative z-20">
    <img
      src="~/assets/img/mobile-bg.svg"
      alt=""
      class="md:hidden absolute w-full"
    />
    <Strain class="absolute top-0 inset-x-0 strain hidden md:block" />
    <MiniStrain class="mini-strain hidden sm:inline" />
    <HalfStrain class="half-strain" />
    <OrangeMiniStrain class="orange-mini-strain" />

    <div
      class="container relative z-10 pt-32 md:pt-56 flex-1 flex flex-col items-start"
    >
      <p class="inline-block max-w-lg font-medium text-2xl">
        Sie wollen im Herzen Berns eine Sitzung, eine Versammlung oder ein Fest
        durchführen? Sie suchen einen lichtdurchfluteten, modern eingerichteten
        und zentral gelegenen Konferenzraum?
      </p>

      <div
        v-scroll-to="'#equipment'"
        class="btn-learn-more inline-flex items-center mt-16 cursor-pointer"
      >
        <button class="text-2xl font-medium text-black mr-4 focus:outline-none">
          Mehr erfahren
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26.622"
          height="19.004"
          viewBox="0 0 26.622 19.004"
          class="transition transform duration-300 hover:rotate-90 arrow-right"
        >
          <path
            d="M250.362,718.167l-8.874-8.874-1.255,1.255,7.359,7.36H224v1.775h23.592l-7.359,7.36,1.255,1.255,8.874-8.874A.888.888,0,0,0,250.362,718.167Z"
            transform="translate(-224 -709.293)"
          />
        </svg>
      </div>
    </div>

    <ImageSlider class="mb-10" />
  </section>
</template>

<script>
import Strain from '~/components/svgs/Strain'
import MiniStrain from '~/components/svgs/MiniStrain'
import HalfStrain from '~/components/svgs/HalfStrain'
import OrangeMiniStrain from '~/components/svgs/OrangeMiniStrain'
import ImageSlider from '~/components/ImageSlider'

export default {
  components: {
    Strain,
    MiniStrain,
    HalfStrain,
    OrangeMiniStrain,
    ImageSlider
  }
}
</script>

<style lang="scss" scoped>
.strain {
  top: 0;
  left: -200px;
  width: 100%;
}

@screen 2xl {
  .strain {
    width: 90vw;
  }
}

@screen 3xl {
  .strain {
    width: 70vw;
  }
}

.mini-strain {
  @apply absolute;
  top: 350px;
  right: 40px;
}

.orange-mini-strain {
  @apply absolute;
  top: 400px;
  right: 5px;
  transform: scale(0.6);

  @screen md {
    top: initial;
    bottom: -150px;
    transform: scale(1);
  }
}

.half-strain {
  @apply absolute;
  top: 400px;
  right: 0;
  transform-origin: top right;
  transform: scale(0.7);

  @screen md {
    top: 500px;
    transform: scale(1);
  }
}

.btn-learn-more:hover .arrow-right {
  transform: rotate(90deg);
}
</style>
