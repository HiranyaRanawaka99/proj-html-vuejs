<script>

import NextPrevButtons from '../partials/NextPrevButtons.vue';
import BaseButtons from '../partials/BaseButtons.vue';

const sliderCoverImage = document.getElementById('info');
export default {
  data()  {
    return {
        slides: [
            {
                nothing: '',
            },
            {
                title: 'Title example 1',
                text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                img: '/src/assets/img/h-2-blog-img-2.jpg'
            },
            {
                title: 'Title example 2',
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
    readMore() {
        console.log('Apri pagina che contiene più informazioni')
    }
 },
    // COMPONENTS
    components: {NextPrevButtons, BaseButtons}
    }
    //     autoPlayFunction () {
        //         this.autoplay = setInterval (() => {
//             this.handleNext()
//         }, 3000);
//     },
    
//     stopAutoPlayFunction () {
//         clearInterval(this.autoplay)
//     },
// },


// @mouseover = "stopAutoPlayFunction"
// @mouseout = autoPlayFunction
</script>


<template>    
    <section class="slider-container">
        
        <!-- NEXT-PREV-BUTTONS -->
        <!-- from emits -->
        <NextPrevButtons
        @go-prev="handlePrev()"
        @goNext="handleNext()"
        ></NextPrevButtons>
        
        <!-- SLIDER COVER IMAGE -->
        <div  class="infos" id="infos" :class= "(activeSlide == 0) ? 'd-block': 'd-none'">
            <div class="structure d-flex m-1">
            <!-- Cover text -->
                <div class="infos-text col col-5 col-md-aut p-5">
                    <h1> Devotion that <br> never <em>ends</em></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero quaerat ratione molestias itaque. </p>
                    <!-- Button from emits -->
                    <BaseButtons
                        class="read-more-btn"
                        buttonText= "READ MORE"                
                        @click-me="readMore">
                    </BaseButtons>
                </div>
                <!-- Cover images  -->
                <div class="infos-images col col-7">
                    <div class="main-images">
                        <div><img class= img-woman src="../../assets/img/h-2-slider-img-15.png"> </div>
                        <div><img class= img-man src="../../assets/img/h-2-slider-img-16.png"> </div>
                    </div>
                    <!-- mini images -->
                    <div class="mini l-top"><img src="../../assets/img/short-slider-rev-1-img-2.png"></div>
                    <div class="mini l-middle"><img src="../../assets/img/h-2-slider-img-12.png"></div>
                    <div class="mini l-bottom"><img src="../../assets/img/h-2-slider-img-13.png"></div>
                    <div class="mini r-top"><img src="../../assets/img/h-2-slider-img-14.png"></div>  
                    <div class="mini  r-middle"><img src="../../assets/img/short-slider-rev-1-img-6.png"> </div>
                    <div class="mini  r-bottom"><img src="../../assets/img/h-2-slider-img-17.png"></div>
                </div>
            </div>
        </div>
        <!-- DINAMIC SLIDER -->
        <div class="carousel"  :class="(activeSlide == 0) ? 'd-none' : 'd-block'">
            <div class="carousel structure d-flex m-1">
                <!-- Slider text -->
                <div class="carousel-text col-5 p-3" >
                    <h1> {{ slides[activeSlide].title}}</h1>
                    <p> {{slides[activeSlide].text }}</p>
                </div>
                <!-- Slider images  -->
                <div class="carousel-images col-7 w-50">
                    <img :src="slides[activeSlide].img">
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use '../../assets/styles/general.scss' as *;
@use '../../assets/styles/Partial_scss/variable' as *;


.slider-container {
    position: relative;

    .read-more-btn {
        background-color: white;
        border: 2px solid $slider-btn;
        padding: 0.5rem 1rem;
        font-size: small;
    }

    .infos {
        .infos-images {
        position: relative;
        padding: 1rem;
        }
        .main-images {
            display: flex;
            justify-content: flex-end;
            align-content: center;
            
            width: 100%;
            height: 100%;

        }
        .mini {
            width: 30px;
            height: 30px;
            
            position: absolute;
        }
        
        .l-top {
            top: -3%;
            left: 5%;
        }
        
        .l-middle {
            bottom: 40%;
            left: -8%;
        }
        
        .l-bottom {
            left: 0;
            bottom: 10%;
        }

        .r-top {
            right: 12%;
            top: -5%;
            width: 35px;
            height: 35px;
        }
        
        .r-middle {
            right: 5%;
            top: 15%;
        }
        
        .r-bottom {
            right: -10%;
            bottom: 14%;
            width: 60px;
            height: 60px;
        }     
     }
}

.d-none {
    display: none;
}

.d-none {
    display: block;
}

@media screen and (max-width:768px) {
    .structure {
        display: block !important;
        width: 100%;
    
        
        .infos-text,
        .carousel-text {
            width: 100%;
            padding: 0 !important;
        }
        
        .infos-images,
        .carousel-images {
            margin: 0 auto;
            padding: 1rem !important;
            width: 100% !important
        }
    }
    .mini {
        display: none;
    }
    .carousel.structure {
        padding-bottom: 4.8rem !important;
    }
    
}

</style>

