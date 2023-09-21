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
  <section class="working-process-title">
    <h2> Working <em><b>process</b></em></h2>
    <div class="working-process">
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
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../../assets/styles/general.scss'; 
@use '../../assets/styles/Partial_scss/variable' as *;

.working-process-title {
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

@media screen and (max-width:768px) {

  .working-process-title {
    padding: 0 2rem;
    margin: 2rem 4rem;
     > h2 {
       margin-bottom: 2rem;
     }
     .working-process {
       display: flex;
       align-items: center;
       gap: 2rem; 
      }
      .process-icons {
        background-image: none;
        display: block !important;
        > * {
          margin-bottom: 1rem;
        }
      }
      .process-paragraph {
        display: block !important;
        > * {
          margin-bottom: 2rem;
        }
      }
    }
}
  


</style>
