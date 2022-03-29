<template>
  <div class="home">
    <div class="home__image-wrapper">
      <img src="@/assets/img/home/background-home.png" class="home__image">
    </div>
    <h1 class="home__title">
      YOUR<br> <span>PERSONALIZED</span><br> COFFEE
    </h1>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style lang="scss" scoped>
.home {

  &__title {
    font-family: Montserrat;
    text-align: left;
    font-size: 48px;

    span {
      background-color: #C7A17A;
      color: white;
      padding: 0 10px;
    }
  }

  &__image-wrapper {
    position: absolute;
    height: 100%;
    width: 50%;
    right: 0;
    top: 0;
    background-color: #24181885;
    border-radius: 16% 0 0 8%;
  }

  &__image {
    border-radius: 16% 0 0 8%;
    width: 100%;
    height: 100%;
  }

}
</style>