<script>

export default {
  data()  {
    return {
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
    <section v-for="info in footerInfo" class="footer-info">
      <div class="logo">
        <img :src="info.logoImage">
        <p> {{ info.logoCaption }}</p>
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

  .footer-info {
    display: flex;
    justify-content: space-between;
    justify-content: center;
  }
}


</style>
