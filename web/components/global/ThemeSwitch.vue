<template>
    <div class="theme-switch">
        <label class="switch">
            <input type="checkbox" v-model="darkMode"/>
            <span class="slider round"></span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "ThemeSwitch",
        data() {
            return {
                darkMode: true,
            };
        },
        watch: {
            darkMode() {
                // Add Remove class from html element
                const htmlElement = document.documentElement;
                if(this.darkMode) {
                    localStorage.setItem('theme', 'dark');
                    htmlElement.setAttribute('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                    htmlElement.setAttribute('theme', 'light');
                }
            },
        },    
        mounted() {
            // Check for Active theme
            const htmlElement = document.documentElement;
            const theme = localStorage.getItem('theme');

            if(theme === 'dark' || theme === 'undefined') {
                htmlElement.setAttribute('theme', 'dark');
                this.darkMode - true;
            } else {
                htmlElement.setAttribute('theme', 'light');
                this.darkMode = false;
            }
        },
    }
</script>