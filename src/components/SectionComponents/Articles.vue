<script>

export default {
  data()  {
    return {
      articles: [
        {
          image: "/src/assets/img/h-2-blog-img-1.jpg",
          title: 'This way, loves: a detailed guide through new design',
          author: 'By Emily Fields',
          dateNumber: '07',
          dateMonth: 'May \'19',
          url: '#',
        },
        {
          image: "/src/assets/img/h-2-blog-img-2.jpg",
          title: 'I try to give people a different way of looking art',
          author: 'By Emily Fields',
          dateNumber: '07',
          dateMonth: 'May \'19',
          url: '#',
        },
        {
          image: "/src/assets/img/h-2-blog-img-3.jpg",
          title: 'Introduce Richard Laperrière of those amazing features',
          author: 'By Emily Fields',
          dateNumber: '07',
          dateMonth: 'May \'19',
          url: '#',
        },
      ]
    }
  }
}

</script>


<template>
  <section class="articles">
    <div v-for="article in articles" class="article-card">
      <a :href=article.url>
        <div class="date">
          <div class="date-number"> <em>{{ article.dateNumber }} </em></div>
          <div class="date-month"> {{ article.dateMonth.toUpperCase() }}</div>
        </div>
      <div class="card-top">
        <img :src="article.image">
      </div>
        <div class="card-bottom">
          <h4> {{ article.title }}</h4>
          <p><em> {{ article.author }} </em></p>
        </div>
       </a>
      </div>
  </section>


</template>


<style lang="scss" scoped>
@use '../../assets/styles/general.scss'; 
@use '../../assets/styles/Partial_scss/variable' as *;

.articles {
  display: flex;
  gap: 2rem;

  .article-card {
    position: relative;
    .date > div {
      font-weight: bold;
      position: absolute;
      left: 10px;
  
    }
    .date-number {
      background-color: $article-day;
      top: -15px;

      font-size: 1.5rem;
      padding: 0.1rem 1.38rem;
      
    }
    .date-month {
      background-color: $article-month;
      top:20px;
      padding: 0.5rem 0.3rem
    }  
  }
}

@media screen and (max-width:768px) {
  .articles {
  display: block;

  .article-card {
    margin-bottom: 2.5rem;
  }
}


}



</style>
