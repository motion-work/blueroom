<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="158.144" height="166.41">
    <defs>
      <filter
        id="svg-min-strain"
        x="0"
        y="0"
        width="158.144"
        height="166.41"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="7.5" result="b" />
        <feFlood flood-opacity=".063" />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#svg-min-strain)">
      <path
        d="M79.14 19.5c31.2 0 56.5 24.848 56.5 55.5s-54.379 65.91-85.583 65.91S22.64 105.652 22.64 75s25.3-55.5 56.5-55.5z"
        fill="#4e58e2"
      />
    </g>
  </svg>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
