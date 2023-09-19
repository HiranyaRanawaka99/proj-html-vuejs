<script>

export default {
  data()  {
    return {
      links: [
        {
            text: 'Home',
            url: '#',
        },
        {
            text: 'Pages',
            url: '#',
        },
        {
            text: 'Portfolio',
            url: '#',
        },
        {
            text: 'Blog',
            url: '#',
        },
        {
            text: 'Shop',
            url: '#',
        },
        {
            text: 'Elements',
            url: '#',
        },
        ],
    }
  },

}
</script>



<template>

  <div class="header-container">
    <div class="logo">
      <img src="../assets/img/logo-sidearea-1.png" alt="Marée-logo">
     </div>
     <div class="navbar">
      <ul class="links">
        <li v-for="link in links"> <a :href= link.url>{{ link.text.toUpperCase() }} </a> </li>
      </ul>
      <img src="../assets/svg/svg-1.svg">
    </div>
    </div>


</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as*;
@use '../assets/styles/Partial_scss/variable' as *;

.header-container {
  padding: 2rem;
  display:flex;
  
  justify-content: space-between;
  align-content: center;
}

.navbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  .links {
    display: flex;
    align-items: center;
    gap:.5rem;

    li:hover {
      background: linear-gradient(to bottom, transparent 50%, $highlighter 40%, );
    }

  }

  img {
    align-self: start;
  }
}
  


</style>
