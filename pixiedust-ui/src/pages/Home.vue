<template>
    <main-layout>
        <div class="view-container">
            <app-slider :slides="slides"></app-slider>
            
            <section>
                <h4>Featured Categories</h4>
                 <card-expand></card-expand>
            </section>

            <section>
                <h4>Order Customized Handmade Items</h4>
                <div class="custom-orders">
                    <ul>
                        <li>01 Share your requirements with us</li>
                        <li>02 Get customization options and ideas from us</li>
                        <li>03 Pre book if time and cost works for you</li>
                        <li>04 Get it shipped</li>
                    </ul>
                </div>
            </section>

            <section>
                <h4>Recent Collection</h4>
                <home-image-viewer></home-image-viewer>
            </section>

            <section>
                <h4>Client Testimonials</h4>
                <card-scroller></card-scroller>
            </section>
            
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '@/layout/MainLayout';
    import AppSlider from '@/components/AppSlider';
    import CardScroller from '@/components/ui/CardScroller';
    import CardExpand from '@/components/ui/Cardexpand';
    import HomeImageViewer from '@/components/ui/HomeImageViewer';
   
    import slides from '@/testData/slider.json';
    export default{
        name: "Home",
        components: {
            MainLayout,
            AppSlider,
            CardScroller,
            CardExpand,
            HomeImageViewer
        },
        data() {
            return {
                slides: slides
            }
        }
    }
</script>