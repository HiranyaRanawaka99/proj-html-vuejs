<script>
import AppLoader from './components/AppLoader.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  data()  {
    return {
      isLoading: false,
    }
  },


  // COMPONENTS
  components: { AppLoader, AppHeader, AppMain, AppFooter}
}
</script>

<template>
  <div class="wrapper">
    <AppLoader
      v-if="isLoading"
      loadingText="Example loading text"
    ></AppLoader>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>




<style lang="scss" scoped>
@use './assets/styles/general.scss';



</style>
