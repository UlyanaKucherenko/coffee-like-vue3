<template>
  <div
    class="app-sidebar"
    :class="{'app-sidebar__open': drawer}"
  >
    <span  class="app-sidebar__logo logo">
      COFFEE
    </span>
    <div class="app-sidebar__list">
      <div class="app-sidebar__item-list">
        <router-link
          to="/"
          exact
          active-class="_active"
          class="app-sidebar__item-link"
        >
          <span class="app-sidebar__link-icon">
            <IconDashboard />
          </span>
          <span class="app-sidebar__link-text">Home</span>
        </router-link>
      </div>
        <div class="app-sidebar__item-list">
          <router-link
              to="/coffee"
              active-class="_active"
              class="app-sidebar__item-link"
          >
          <span class="app-sidebar__link-icon">
            <IconOffers />
          </span>
            <span class="app-sidebar__link-text">Coffee</span>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>

import IconDashboard from "@/js/components/icons/IconDashboard";
import IconOffers from "@/js/components/icons/IconOffers";
export default {
  name: "AppSidebar",
  components: {IconOffers, IconDashboard},
  props: {
    drawer: Boolean
  },
  data() {
    return {
      menuIsOpen: false
    };
  },
};
</script>

<style lang="scss" scoped>
.app-sidebar {
  width: 100%;
  max-width: var(--sidebar-width);
  height: 100vh;
  background-color: #3b3c3d;
  color: var(--white-main);
  padding: 20px 0;
  left: 0;
  top: 0;
  transition: all 0.3s ease-out;
  position: fixed;
  z-index: 100;

  &__open {
    max-width: 300px;

    .app-sidebar__link-text {
      display: block;
      font-size: 16px;
    }

    .app-sidebar__link-icon {
      margin-right: 20px;
    }
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 56px;
    color: orange;
  }

  &__item-list {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__item-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--white-main);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.1s ease-out;
    border-left: 4px solid transparent;
    padding: 8px 20px 8px 24px;

    &:hover {
      color: var(--orange-main);
      border-left: 4px solid var(--orange-main);

      .app-sidebar__link-icon {
        fill: var(--orange-main);
      }
    }

    &:active {
      color: var(--orange-main);

      .app-sidebar__link-icon {
        fill: var(--orange-main);
      }
    }

    &._active {
      color: var(--orange-main);
      border-left: 4px solid var(--orange-main);

      .app-sidebar__link-icon {
        fill: var(--orange-main);
      }
    }
  }

  &__link-text {
    display: none;
    width: 100%;
    white-space: nowrap;
  }

  &__link-icon {
    margin-right: 0;
    fill: var(--white-main);
  }

}
</style>