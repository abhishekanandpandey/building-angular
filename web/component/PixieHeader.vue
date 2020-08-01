<template>
    <nav class="navbar navbar-expand-lg p-0">
        <div class="pixie-header tranz" v-on:scroll.native="handleScroll" :class="{'scrolled': scrolled}">
            <div class="pixie-header-inn shadow p-3 bg-white">
                <a class="navbar-brand" href="index.html" @click.prevent="testClass()">
                    Pixiedust Arts
                </a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/gallery" class="nav-link">Gallery</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link">Contact</router-link>
                    </li>x
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'PixieHeader',
        data() {
            return {
                scrolled: false
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll(ev) {
                console.log('you scrolled', ev);
            },
            testClass() {
                this.scrolled = !this.scrolled;
            }
        }
    }
</script>

<style lang="scss">
    .pixie-header {
        width: 100%;
        padding: 0;
        overflow: visible;
        margin: 0 0 0 0;
        position: fixed;
        top: 50px;
        left: 0;
        z-index: 9;
        text-align: center;
    }

    .pixie-header-inn {
        width: 60%;
        padding: 0;
        overflow: visible;
        margin: 0 auto;
        position: relative;
        float: none;
        display: inline-flex;
        min-height: 55px ;
    }

    .tranz {
        -webkit-transition: all .5s ease;
        -moz-transition: all .5s ease;
        transition: all .5s ease;
    }

    .scrolled {
        top: 0;
        .pixie-header-inn {
            width: 100% !important;
        }
    }

</style>