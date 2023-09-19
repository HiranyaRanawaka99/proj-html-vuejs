<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  data()  {
    return {}
  },


  // COMPONENTS
  components: {AppHeader, AppMain, AppFooter}
}
</script>




<template>
  <div class="wrapper">
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>




<style lang="scss" scoped>
@use './assets/styles/general.scss';



</style>
