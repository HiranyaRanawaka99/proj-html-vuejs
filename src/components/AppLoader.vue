<script>
  export default {
        props: {
            loadingText: String,
        }
    }


</script>


<template>
    <div class="layover"> 
        <font-awesome-icon icon="fa-solid fa-spinner" size="5x" spin/>
        {{ loadingText || 'Loading' }}  
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/styles/Partial_scss/variable' as *;
.layover {
    position: fixed;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $footer-bg;
    backdrop-filter: blur(10px);


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

