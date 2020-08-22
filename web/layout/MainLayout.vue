<template>
    <div id="app-main">
        <app-header></app-header>
        <div class="container">
            <div class="page-wrapper">
               <app-sidebar></app-sidebar>
            </div>
            <div class="page-layout">
                <slot></slot>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from '@/layout/AppHeader';
import AppSidebar from '@/layout/AppSidebar';
import AppFooter from '@/layout/Appfooter';

export default {
    name: 'MainLayout',
    components: {
        AppHeader,
        AppSidebar,
        AppFooter
    },
    data() {
        return {
            msg: 'Success'
        }
    }
}
</script>