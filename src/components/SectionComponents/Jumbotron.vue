<script>

export default {
  data()  {
    return {
      jumboImages: [
        {
          image: 'src/assets/img/h-2-port-img-1.jpg',
          alt: "Fe",
          active: false,
        },
        {
          image: 'src/assets/img/h-2-port-img-2.jpg',
          alt: "Fe",
          active: false,
        },
        {
          image: 'src/assets/img/h-2-port-img-3.jpg',
          alt: "Fe",
          active: false,
        },
        {
          image: 'src/assets/img/h-2-port-img-4.jpg',
          alt: "Fe",
          active: false,
        },
        {
          image: 'src/assets/img/h-2-port-img-5.jpg',
          alt: "Fe",
          active: false,
        },
        {
          image: 'src/assets/img/h-2-port-img-6.jpg',
          alt: "Fe",
          active: false,
        },
      ],
    }
  },
}

</script>


<template>

<div class="jumbotron g-0 row row-cols-2 row-cols-md-3 row-cols-lg-3">
  <div v-for="jumboImage in jumboImages">
    <img :src="jumboImage.image">
  </div>

</div>


</template>


<style lang="scss" scoped>
@use '../../assets/styles/general.scss';


</style>
