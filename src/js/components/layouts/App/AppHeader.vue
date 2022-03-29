<template>
  <div class="header">
    <div class="header__container" :class="{'container-lg': containerLg}">
       <span class="header__icon-menu" @click="toggleSidebar">
        <template v-if="menuIsOpen">
          <IconMenuClose/>
        </template>
        <template v-else>
          <IconMenuOpen/>
        </template>
      </span>
    </div>
  </div>
</template>
<script>

import IconMenuOpen from "@/js/components/icons/IconMenuOpen";
import IconMenuClose from "@/js/components/icons/IconMenuClose";

export default {
  name: "AppHeader",
  components: {IconMenuClose, IconMenuOpen},
  props: {
    menuIsOpen: Boolean,
  },
  data() {
    return {
      containerLg: false
    };
  },
  methods: {
    toggleSidebar() {
      this.containerLg = !this.containerLg;
      this.$emit('drawer');
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  color: var(--black-main);
  background-color: var(--white-main);
  box-shadow: 0 2px 6px 2px rgba(0, 42, 81, 0.1);
  z-index: 99;

  &__container {
    width: 100%;
    height: 100%;
    padding: 0 30px 0 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__icon-menu {
    cursor: pointer;
  }

  .container-lg {
    padding: 0 30px 0 330px;
    transition: all 0.3s ease-out;
  }
}

</style>