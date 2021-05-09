<template>
    <div class="home-image-container">
        <div class="row">
            <template v-for="(image, idx) in imageCollection">
                <div class="pic-container" :key="idx">
                <div class="parent">
                    <div class="wrapper" @click="toggleImage(image)" :class="{'open': image.selected}">
                        <div class="content">
                            <div class="img">
                                <img :src="image.imageUrl" alt="img"/>
                            </div>
                            <div class="text">
                                <div class="line title"></div>
                                <div class="line subtitle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </template>
        </div>
  </div>
</template>

<script>
export default {
    name: "HomeImageViewer",
    data() {
        return {
            imageCollection: []
        }
    },
    mounted() {
        this.init();
    },

    methods: {

        init() {

            for(let i=0; i<6; i++) {
                let imgObj = {
                    imageUrl: `https://picsum.photos/id/${i}/200/300`,
                    selected: false
                };
                this.imageCollection.push(imgObj)
            }
        },

        toggleImage(image) {
            image.selected = !image.selected;
        }
    }
}
</script>

<style lang="scss" scoped>
.home-image-container {
   margin-top: 10px;
}

.pic-container {
    display: inline-block;
}

.parent {
    position: relative;
    width: 109px;
    height: 109px;
    margin: 0 auto;
}

.wrapper {
    width: 109px;
    height: 109px;
    cursor: pointer;
    position: absolute;
    overflow: hidden;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
    transition: transform 375ms, width 275ms 100ms, height 375ms;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    z-index: 0;
}

.wrapper.open {
    width: 330px;
    height: 330px;
    transition: transform 375ms, width 375ms, height 275ms 100ms;
    z-index: 10;
}

.wrapper div.content {
    position: absolute;
    margin: auto;
    left: -9999px;
    right: -9999px;
    transform-origin: top;
    width: 330px;
    transform: scale(0.62);
    height: 330px;
    border-radius: 3px;
    background: #fff;
    overflow: hidden;
    transition: transform 375ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.wrapper.open .content {
    transform: scale(1);
}

.wrapper .img {
    height: 180px;
    background-size: cover;
    background-position: center;
}


.text {
    padding: 30px;
}

.text .line {
    height: 13px;
    background: #999;
    opacity: 0.7;
    margin-top: 20px;
}

.title {
    width: 80%;
}

.subtitle {
    width: 60%;
}
</style>