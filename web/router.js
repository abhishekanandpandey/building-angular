import Vue from 'vue';
import Router from 'vue-router';
import Home from './routes/Home.vue';
import About from './routes/About.vue';
import Gallery from './routes/Gallery.vue';
import Contact from './routes/Contact.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: Gallery
        },{
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]

})