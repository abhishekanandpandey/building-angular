<template>
    <nav id="sidebar" :class="{'active': active}" aria-label="App Drawer">
        <div class="sidebar-header">
            <h2>Sidebar</h2>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppSidebar',
    data() {
        return {
            active: true,
        }
    },
    mounted() {
        this.$root.$on("hamburger", this.invockSidebar)
    },
    beforeDestroy() {
        this.$root.$off('hamburger', this.invockSidebar)
    },
    methods: {
        invockSidebar(data) {
            this.active = data;
        } 
    }   
}
</script>