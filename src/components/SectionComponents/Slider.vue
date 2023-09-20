<script>

import { store } from '../data/store';

export default {
  data()  {
    return {}
  }
}

</script>


<template>

<section class="slider-container">
    <button class="btn left">  <font-awesome-icon icon="fa-solid fa-angle-left" />  </button>
    <button class="btn right"> 	 <font-awesome-icon icon="fa-solid fa-angle-right" /> </button>


    <div class="infos">
        <div class="infos-text col-5 p-3">
            <h1> Devotion that <br> never <em>ends</em></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero quaerat ratione molestias itaque. </p>
        </div>
        <div class="infos-images col-7">
            
            <div class="main-images">
                <img class= img-woman src="../../assets/img/h-2-slider-img-15.png">
                <img class= img-man src="../../assets/img/h-2-slider-img-16.png">
            </div>
            
                <div class="mini r-top"><img src="../../assets/img/short-slider-rev-1-img-2.png"></div>

                <div class="mini r-middle"><img src="../../assets/img/h-2-slider-img-12.png"></div>

                <div class="mini r-bottom"><img src="../../assets/img/h-2-slider-img-13.png"></div>

                <div class="mini l-top"><img src="../../assets/img/h-2-slider-img-14.png"></div>  

                <div class="mini l-middle"><img src="../../assets/img/short-slider-rev-1-img-6.png"> </div>

                <div class="mini l-bottom"><img src="../../assets/img/h-2-slider-img-17.png"></div>
        </div>
    </div>
</section>

</template>


<style lang="scss" scoped>
@use '../../assets/styles/general.scss' as *;
@use '../../assets/styles/Partial_scss/variable' as *;


.slider-container {
    position: relative;
    .btn {
        border: none;
        border-radius: 50%;
        background-color: $next-prev;
        color: white;
        font-size: smaller;

        width: 25px;
        height: 25px;

        display: flex;
        justify-content: center;

        position: absolute;
        top: 50%;

    }
    .btn.left {
        left: 0px;
    }

    .btn.right {
        right: 0px;  
    }
    
    .infos {
        display: flex;
        justify-content: space-between;

        margin: 1rem;
        
        h1 {
            font-size: 2.5rem;
        }
        
        .infos-images {
            position: relative;
            padding: 1rem;
        }
        .main-images {
            display: flex;
            align-content: center;
            
            width: 70%;
            height: 100%;

            position: absolute;
            left: 20%
        }
            
        .mini {
            width:25px;
            height: 25px;
            
            position: absolute;
        }
        
        .r-top {
            top: 0;
            left: 20%;
        }
        
        .r-middle {
            top: 50%;
        }
        
        .r-bottom {
            bottom: 10%;
        }

        .l-top {
            right: 35%;
            top: 0;
        }
        
        .l-middle {
            right: 40%;
            top: 0%;
        }
        
        .l-bottom {
            right: 35%;
            bottom: 10%;
        }
        
        
        
        
    }
}

</style>

