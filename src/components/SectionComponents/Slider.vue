<script>

import NextPrevButtons from '../partials/NextPrevButtons.vue';

const sliderCoverImage = document.getElementById('info');
export default {
  data()  {
    return {
        slides: [
            {
                title: 'Title example 1',
                text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                img: '/src/assets/img/h-2-blog-img-1.jpg'
            },
            {
                title: 'Title example 2',
                text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                img: '/src/assets/img/h-2-blog-img-2.jpg'
            },
            {
                title: 'Title example 3',
                text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                img: '/src/assets/img/h-2-blog-img-3.jpg'
            }
        ],

        activeSlide: 0,
        autoPlay: '',
    }
  },

 //METHODS
 methods: {
    handleNext() {
        if (this.activeSlide == this.slides.length -1) {
            this.activeSlide = 0
        } else {
            this.activeSlide++
        }
    },

    handlePrev() {
        if (this.activeSlide == 0) {
            this.activeSlide = this.slides.length -1
        } else {
            this.activeSlide--
        }
    },
    autoPlayFunction () {
        this.autoplay = setInterval (() => {
            this.handleNext()
        }, 3000);
    },
    
    stopAutoPlayFunction () {
        clearInterval(this.autoplay)
    },
},

// COMPONENTS
components: {NextPrevButtons}
}




</script>


<template>    
    <section class="slider-container"
        @mouseover = "stopAutoPlayFunction"
        @mouseout = autoPlayFunction>
        
        <NextPrevButtons
        @go-prev="handlePrev()"
        @goNext="handleNext()"      
        ></NextPrevButtons>
        
        <div class="infos" id="infos">
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

    <div class="carousel">
        <div class="infos-text col-5 p-3">
            <h1> {{ slides[activeSlide].title}}</h1>
            <p> {{slides[activeSlide].text }}</p>
        </div>

        <div class="infos-images col-7">
            <img :src="slides[activeSlide].img">
        </div>
    </div>

    </section>
</template>


<style lang="scss" scoped>
@use '../../assets/styles/general.scss' as *;
@use '../../assets/styles/Partial_scss/variable' as *;


.slider-container {
    position: relative;

    .infos,
    .carousel {
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

.d-none {
    display: none;
}

.d-none {
    display: block;
}

</style>

