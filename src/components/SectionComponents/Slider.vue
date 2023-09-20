<script>

import { store } from '../data/store';

export default {
  data()  {
    return {}
  }
}

</script>


<template>

<div class="slider-container">

    <button class="btn left">  <font-awesome-icon icon="fa-solid fa-angle-left" />  </button>
    <button class="btn right"> 	 <font-awesome-icon icon="fa-solid fa-angle-right" /> </button>

    <div class="infos">
        <div class="infos-text col-5 p-3">
            <h1> Devotion that <br> never <em>ends</em></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero quaerat ratione molestias itaque. </p>
        </div>
        <div class="infos-images col-7 ">
            
            <div class="main-images">
                <img class= img-woman src="../../assets/img/h-2-slider-img-15.png">
                <img class= img-man src="../../assets/img/h-2-slider-img-16.png">
            </div>
            <div class="mini-images">
                <div class="mini r-top"><img src="../../assets/img/short-slider-rev-1-img-2.png"></div>

                <div class="mini r-middle"><img src="../../assets/img/h-2-slider-img-12.png"></div>

                <div class="mini r-bottom"><img src="../../assets/img/h-2-slider-img-13.png"></div>

                <div class="mini l-top"><img src="../../assets/img/h-2-slider-img-14.png"></div>  

                <div class="mini l-middle"><img src="../../assets/img/short-slider-rev-1-img-6.png"> </div>

                <div class="mini l-bottom"><img src="../../assets/img/h-2-slider-img-17.png"></div>
            </div>
        </div>
    </div>
</div>

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
        left: 20px;
    }

    .btn.right {
        right: 20px;  
    }
    
    .infos {
        display: flex;
        margin: 1rem 7rem;
        
        h1 {
            font-size: 2.5rem;
        }
        
        .infos-images {
            position: relative;
        }
        .main-images {
            display: flex;
            
            width: 40%;
            height: 100%;
        }
        .mini {
            width:25px;
            height: 25x;
            
            position: absolute;
        }
        
        .r-top {
            top: 0;
        }
        
        .r-middle {
            top: 50%;
        }
        
        .r-bottom {
            bottom: 10%;
        }
        
        
        
    }
}

</style>

