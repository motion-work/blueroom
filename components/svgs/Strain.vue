<template>
  <svg
    viewBox="0 0 1319 1088"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        id="6689"
        d="M122.210757,-58 L1138.87721,-58 C1422.11011,87.2420188 1493.91146,279.661898 1354.28125,519.259639 C1144.83594,878.65625 888.84375,609.515625 711.453125,893.125 C534.0625,1176.73438 274.835576,1160.04533 72.4140625,866.223327 C-62.5336135,670.341991 -45.9347153,362.267549 122.210757,-58 Z"
      ></path>
      <filter
        id="23423"
        x="-4.5%"
        y="-4.9%"
        width="110.6%"
        height="113.3%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          radius="0.5"
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        ></feMorphology>
        <feOffset
          dx="11"
          dy="20"
          in="shadowSpreadOuter1"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="22"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
          type="matrix"
          in="shadowBlurOuter1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Creative-Agency-Designs"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="04_Work">
        <g id="Background" transform="translate(-159.000000, -72.000000)">
          <g id="wave">
            <use
              fill="black"
              fill-opacity="1"
              filter="url(#23423)"
              xlink:href="#6689"
            ></use>
            <use
              stroke="#979797"
              stroke-width="1"
              fill="#FFFFFF"
              fill-rule="evenodd"
              xlink:href="#6689"
            ></use>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
