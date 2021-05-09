<template>
    <section class="carousel">
        <div class="mySlides"  >
            <template v-for="(slide, idx) in slides">
                <div class="slider-block fade" :style="{background: slide.bgcolor}" v-if="slideIndex === idx" :key="idx">
                    <div class="details">
                        <h4>{{slide.heading}}</h4>
                        <p>{{slide.infoText}}</p>
                        <span>{{slide.price}}</span>
                        <button type="button">{{slide.actionButtonText}}</button>
                    </div>
                    <div class="image">

                    </div>
                </div>
            </template>
        </div>
       

        <a class="prev" @click="prevSlide()">&#10094;</a>
        <a class="next" @click="nextSlide()">&#10095;</a>
        
        <div style="text-align:center; margin-top: 5px;">
            <template v-for="(slide, idx) in slides">
                <span class="dot" :class="{' active': slideIndex===idx}"  @click="slideIndex = idx" :key="idx"></span> 
            </template>
        </div>
    </section>    
</template>

<script>
export default {
    name: 'AppSlider',
    props: {
        slides: {
            Type: Array,
            required: true
        }
    },
    data() {
        return {
            slideIndex: 0
        }
    },
    mounted() {
        console.log(this.slides);

        this.showSlide(this.slideIndex);
    },
    methods: {
        prevSlide() {
            if(this.slideIndex === 0) {
                this.slideIndex = this.slides.length -1;
            } else {
                this.slideIndex -= 1;
            }
        },

        nextSlide() {
            if(this.slideIndex === this.slides.length - 1) {
                this.slideIndex = 0;
            } else {
                this.slideIndex += 1;
            }
        },

        showSlide(n) {

            console.log('clicked', n);

            let i; 
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");

            if (n > slides.length) {
                this.slideIndex = 1
            }

            if (n < 1) {
                this.slideIndex = slides.length
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[this.slideIndex-1].style.display = "block";  
            dots[this.slideIndex-1].className += " active";
        }
    }
}
</script>