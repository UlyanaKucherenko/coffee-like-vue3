<template>
  <div class="main-layout">
    <div class="main-layout__container">
      <AppSidebar
        :drawer="drawer"
        @setDrawer="drawer = $event"
      />
      <AppHeader
        :menuIsOpen="drawer"
        @drawer="drawer = !drawer" />
    </div>
    <div class="main-layout__content">
      <router-view />
    </div>

  </div>
</template>

<script>
import AppHeader from "@/js/components/layouts/App/AppHeader";
import AppSidebar from "@/js/components/layouts/App/AppSidebar";

export default {
  name: "MainLayout",
  components: {
    AppHeader,
    AppSidebar,
  },
  data() {
    return {
      drawer: false
    };
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
  }

  &__content {
    width: calc(100vw - var(--sidebar-width) - var(--scrollbar-width));
    height: 100%;
    margin-left: var(--sidebar-width);
    margin-top: var(--header-height);
    padding: 24px 32px;

    @include media("max", "xl") {
      padding: 16px;
    }
  }

  &__mask {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    z-index: 20;
  }
}
</style>