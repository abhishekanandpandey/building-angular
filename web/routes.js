
import Home from '@/pages/Home';
import About from '@/pages/About';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';

const routes = [{
        path: '/',
        name: 'root',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery,
        meta: {
            requiresAuth: false
        }
    },{
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: {
            requiresAuth: false
        }
    
}]

export default routes;