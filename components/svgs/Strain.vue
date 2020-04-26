<template>
  <svg
    viewBox="0 0 1319 1088"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <filter
        id="a"
        x="-4.5%"
        y="-4.9%"
        width="110.6%"
        height="113.3%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          radius=".5"
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset
          dx="11"
          dy="20"
          in="shadowSpreadOuter1"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          stdDeviation="22"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <path
        id="b"
        d="M122.21-58h1016.667c283.233 145.242 355.034 337.662 215.404 577.26-209.445 359.396-465.437 90.256-642.828 373.865-177.39 283.61-436.617 266.92-639.039-26.902C-62.534 670.342-45.935 362.268 122.211-58z"
      />
    </defs>
    <g transform="translate(-159 -72)" fill="none" fill-rule="evenodd">
      <use fill="#000" filter="url(#a)" xlink:href="#b" />
      <use stroke="#979797" fill="#FFF" xlink:href="#b" />
    </g>
  </svg>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
