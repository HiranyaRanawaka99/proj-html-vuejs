<script>
export default {
  data()  { 
    return {
      workingProcess: [
        {
          title: 'First there\'s and idea',
          text: 'Lorem ipsum dolor sic, adipisc sed be et ore aliqua pleasure itself'
        },
        {
          title: 'First there\'s and idea',
          text: 'Lorem ipsum dolor sic, adipisc sed be et ore aliqua pleasure itself'
        },
        {
          title: 'First there\'s and idea',
          text: 'lorem ipsum dolor sic, adipisc sed be et ore aliqua pleasure itself'
        },
        {
          title: 'First there\'s and idea',
          text: 'lorem ipsum dolor sic, adipisc sed be et ore aliqua pleasure itself'
        }
      ]
    }
  },
    
   
  }

</script>


<template>
  <section class="working-process">
    <h2> Working <em>process</em></h2>
    <div class="process-icons">
      <div><font-awesome-icon icon="fa-solid fa-lightbulb" /></div>
      <div><font-awesome-icon icon="fa-regular fa-comment" /></div>
      <div><font-awesome-icon icon="fa-solid fa-cloud" /></div>   <div><font-awesome-icon icon="fa-solid fa-pen-clip" /></div>    
    </div>
    <div class="process-paragraph">
      <div class="process-text" v-for="step in workingProcess">
        <h6> {{ step.title }}</h6>
        <p> {{ step.text }}</p>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../../assets/styles/general.scss'; 
@use '../../assets/styles/Partial_scss/variable' as *;

.working-process {
  text-align: center;
  .process-icons, .process-paragraph {
    display: flex;
    justify-content: center;
    
  }

  .process-icons {
    gap: 10.5rem;
    padding: 1rem;

    background-image: url('../../assets/svg/svg-3.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 55rem;

    > * {
      font-size: 2rem;;
    }

    > div {
      background-color: $bg-icon;
      padding: 1.5rem 2rem;
      border-radius: 50%;

    }

    .fa-lightbulb
    {
      color: $bulb-icon;
    }

    .fa-cloud {
       color: $cloud-icon;

    }
    .fa-pen-clip {
       color: $pens-icon;

    }

    .fa-comment{
       color: $balloon-icon;
       fill: $balloon-icon;
    }
  }

  .process-paragraph {
    gap: 1rem;
  }
  p {
    color: $text-darkgrey;
  }

}



</style>
