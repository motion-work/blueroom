<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="158.145"
    height="166.41"
    viewBox="0 0 158.145 166.41"
  >
    <defs>
      <style>
        .a {
          fill: #4e58e2;
        }
        .b {
          filter: url(#a);
        }
      </style>
      <filter
        id="a"
        x="0"
        y="0"
        width="158.145"
        height="166.41"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="7.5" result="b" />
        <feFlood flood-opacity="0.063" />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g class="b" transform="matrix(1, 0, 0, 1, 0, 0)">
      <path
        class="a"
        d="M56.5,0C87.7,0,113,24.848,113,55.5s-54.379,65.91-85.583,65.91S0,86.152,0,55.5,25.3,0,56.5,0Z"
        transform="translate(22.64 19.5)"
      />
    </g>
  </svg>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
