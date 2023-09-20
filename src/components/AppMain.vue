<script>
import Slider from './SectionComponents/Slider.vue';
import Jumbotron from './SectionComponents/Jumbotron.vue';
import WorkingProcess from './SectionComponents/WorkingProcess.vue';
import WorkWithUs from './SectionComponents/WorkWithUs.vue';
import Articles from './SectionComponents/Articles.vue';

export default {
  data()  {
    return {}
  },

  components: { Slider,Jumbotron, WorkingProcess, WorkWithUs, Articles }
}

</script>


<template>

  <Slider></Slider>
  <Jumbotron></Jumbotron>
  <WorkingProcess></WorkingProcess>
  <WorkWithUs></WorkWithUs>
  <Articles></Articles>


</template>


<style lang="scss" scoped>


</style>
