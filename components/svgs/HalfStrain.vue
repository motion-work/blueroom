<template>
  <svg
    width="269"
    height="728"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <filter
        id="a"
        x="-3.4%"
        y="-3.4%"
        width="108%"
        height="107.8%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dx="8" dy="6" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="15"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.150540865 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <path
        id="b"
        d="M1986.488 405.287h1124.925c62.826 242.083 94.238 518.253 94.238 828.51 0 465.388-319.983 527.123-525.998 320.545-137.344-137.718-368.399-121.871-693.165 47.541V405.287z"
      />
    </defs>
    <g transform="rotate(135 1837.287 308.206)" fill="none" fill-rule="evenodd">
      <use fill="#000" filter="url(#a)" xlink:href="#b" />
      <use fill="#4E5CDA" xlink:href="#b" />
    </g>
  </svg>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
