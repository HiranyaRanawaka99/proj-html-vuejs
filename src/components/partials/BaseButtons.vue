<script>

export default {
  data()  {
    return {}
  },

  props: {
     buttonText: String,
   },

  emits: ['click-me'],
}

</script>


<template>
  <button @click="$emit('click-me')"> {{ buttonText }}</button>

</template>


<style lang="scss" scoped>


</style>
