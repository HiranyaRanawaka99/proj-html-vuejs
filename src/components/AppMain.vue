<script>
import Slider from './SectionComponents/Slider.vue';
import Jumbotron from './SectionComponents/Jumbotron.vue';
import WorkingProcess from './SectionComponents/WorkingProcess.vue';

export default {
  data()  {
    return {}
  },

  components: { Slider,Jumbotron, WorkingProcess }
}

</script>


<template>

  <Slider></Slider>
  <Jumbotron></Jumbotron>
  <WorkingProcess></WorkingProcess>


</template>


<style lang="scss" scoped>


</style>
