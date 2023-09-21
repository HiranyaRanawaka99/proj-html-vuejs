<script>
import {store} from '../components/data/store';
export default {
  data()  {
    return {
      store,
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
        }
      ]
    }
  },
}
</script>



<template>

  <div class="header-container">
    <div v-for="logo in store.logoInfo" class="logo">
      <img :src="logo.logoImage" :alt="store.logoInfo.alt">
    </div>
    <div class="navbar">
      <ul class="links">
        <li v-for="link in links"> <a :href= link.url>{{ link.text.toUpperCase() }} </a> </li>
      </ul>
      <img src="../assets/svg/svg-1.svg" class="navbar-menu" alt="navbar-menu">
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
    gap:1.5rem;

    li:hover {
      background: linear-gradient(to bottom, transparent 50%, $highlighter 40%, );
    }

  }

  img {
    align-self: start;
    width: 20px;
  }
}

// RESPONSIVE

@media screen and (max-width:768px) {
  .navbar > .links {
    display: none;
  }
}
  


</style>
