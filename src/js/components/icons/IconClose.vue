<template>
  <svg class="icon-close" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_169_9709" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" :fill="color"/>
    </mask>
    <g mask="url(#mask0_169_9709)">
      <path
          d="M18.8118 5.18816C18.561 4.93728 18.1544 4.93728 17.9035 5.18816L12 11.0917L6.09648 5.18816C5.8456 4.93728 5.43904 4.93728 5.18816 5.18816C4.93728 5.43904 4.93728 5.8456 5.18816 6.09648L11.0917 12L5.18816 17.9035C4.93728 18.1544 4.93728 18.561 5.18816 18.8118C5.43904 19.0627 5.8456 19.0627 6.09648 18.8118L12 12.9083L17.9035 18.8118C18.1544 19.0627 18.561 19.0627 18.8118 18.8118C19.0627 18.561 19.0627 18.1544 18.8118 17.9035L12.9083 12L18.8118 6.09648C19.0627 5.8456 19.0627 5.43904 18.8118 5.18816Z"
          :fill="color"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: "IconClose",
  props: {
    color: {
      type: String,
      default: '#767586'
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-close {
  cursor: pointer;

  &:hover path{
    fill: #767586;
  }
}

</style>