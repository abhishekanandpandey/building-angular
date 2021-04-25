<template>
    <div class="page-wrapper">
        <app-header></app-header>
         <div class="page-layout">
                <app-sidebar></app-sidebar>
                <slot></slot>
            </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from '@/layout/AppHeader';
import AppFooter from '@/layout/Appfooter';
import AppSidebar from '@/layout/AppSidebar'
export default {
    name: 'MainLayout',
    components: {
        AppHeader,
        AppFooter,
        AppSidebar,
    },
    data() {
        return {
            msg: 'Success'
        }
    }
}
</script>