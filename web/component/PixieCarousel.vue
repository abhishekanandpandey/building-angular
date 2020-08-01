<template>
    <div id="carouselExampleIndicators" class="carousel slide pixie-carousel" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="src/assets/images/slider/ci-1.jpg" height="450" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="src/assets/images/slider/ci-2.jpg" height="450" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="src/assets/images/slider/ci-3.jpg" height="450" alt="Third slide">
            </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="src/assets/images/slider/ci-4.jpg" height="450" alt="forth slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'PixieCarousel'
    }
</script>

<style lang="scss">
    .pixie-carousel {
        width: 100%;
        display: block;
    }
</style>