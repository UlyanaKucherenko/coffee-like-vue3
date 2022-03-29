<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_694_33257" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_694_33257)">
      <path
          d="M10.0004 17.9995C9.73547 17.9995 9.48045 17.8945 9.29339 17.7066L4.29324 12.7064C3.90225 12.3154 3.90225 11.6834 4.29324 11.2924C4.68422 10.9014 5.31627 10.9014 5.70722 11.2924L9.96249 15.5477L18.2576 6.33056C18.6276 5.92152 19.2596 5.88658 19.6697 6.25656C20.0798 6.62555 20.1127 7.25759 19.7437 7.66866L10.7434 17.669C10.5604 17.873 10.3004 17.992 10.0264 18H10.0004L10.0004 17.9995Z"
          :fill="color" />
    </g>
  </svg>
</template>

<script>
export default {
  name: "IconCheck",
  props: {
    color: {
      type: String,
      default: '#1E70BB'
    }
  }
};
</script>

<style scoped>
</style>