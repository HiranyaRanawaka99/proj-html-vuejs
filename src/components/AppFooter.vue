<script>
import { store } from './data/store';

export default {
  data()  {
    return {
    store,
    footerInfo: [
        {
          logoImage: '/src/assets/img/logo-sidearea-1.png',
          logoCaption: 'Let\'s get Creative',
          email: 'maree.qode@gmail.com',
          phoneNum: '+44645321789',
          adress: 'Avenue d\'Auderghem 10',
          postalCode: '1040 Brussels, Belgium',
        }
      ]
    }
  }
}

</script>


<template>
  <div class="footer">
    <section 
      v-for="info in footerInfo" 
      class="Infos">
      <div v-for="logo in store.logoInfo">
        <img :src="logo.logoImage">
        <p> <b> {{ logo.logoText }} </b></p>
      </div>
      <div class="contacts">
        <p> {{ info.email }}</p>
        <p> {{ info.phoneNum }}</p>
      </div>
      <div class="adress">
        <p> {{ info.adress }}</p>
        <p> {{ info.postalCode }}</p>
      </div>
      <div class="socials">
        <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" />
   </a>     <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest-p" /></a>
        <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" />
</a>        <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
      </div>  
    </section>
  </div>


</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss'; 
@use '../assets/styles/Partial_scss/variable' as *;

.footer {
  background-color: $footer-bg;
  padding:  2rem;

  .Infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .socials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
}

@media screen and (max-width:768px) {

  .footer {
  padding: 1rem;
  .Infos {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    font-size: small;
  }
}
}

</style>
