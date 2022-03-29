<template>
  <div class="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from "@/js/components/layouts/MainLayout";
import AuthLayout from "@/js/components/layouts/AuthLayout";
export default {
  name: 'App',
  components: { MainLayout, AuthLayout},
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  }
}
</script>
