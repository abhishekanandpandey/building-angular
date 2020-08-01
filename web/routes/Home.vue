<template>
    <div>
        <pixie-carousel></pixie-carousel>
        <div class="container">
            <h2 class="block">
                <span class="subtitle">Welcome to pixiedust arts</span>            
            	<span class="maintitle" style="background-color:#ffffff;">
					 fuel for pixiedust              
                     
                </span>
            </h2>
        </div>
       
    </div>
</template>


<script>
    import PixieCarousel from '../component/PixieCarousel';
    export default{
        name: "Home",
        components: {
            PixieCarousel
        }
    }
</script>