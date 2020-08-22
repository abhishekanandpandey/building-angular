<template>
    <header>
        <nav class="navbar app-header">
            <div class="logo-container">
                <div class="hamburger">
                    <a href="javascript:void(0)" @click="sideNavEvent()">dddd
                        <i class="fa fa-bars" area-hidden="true" :class="{'rotate': hamburger}"></i>
                    </a>
                </div>
                <div class="logo">
                    <a href="javascript:void(0)" class="app-logo" @click.prevent="send('dashboard')"></a>
                </div>
                <div class="app-nav">
                    <span>Put all navigation links here</span>
                </div>

                <div class="app-user-block">
                    <span>User icons will come here</span>
                </div>
                <theme-switch></theme-switch>
            </div>
        </nav>
        <h2> Welcome to Application Header</h2>
    </header>
</template>

<script>
import ThemeSwitch from "@/components/global/ThemeSwitch";

export default {
    name: 'AppHeader',
    components: {
        ThemeSwitch
    },
    data() {
        return {
            hamburger: false,
        }
    },
    methods: {
        send(path) {
            this.$router.push(`/${path}`);
        },
        sideNavEvent() {
            this.hamburger = !this.hamburger;
            this.$root.$emit("hamburger", this.hamburger);
        }
    }
}
</script>