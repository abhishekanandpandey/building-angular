<template>
    <header class="nav-wrapper">
        <div class="grad-bar"></div>
        <nav class="navbar">
            <div class="logo">
                <div class="menu-toggle" id="mobile-menu" :class="{'is-active': isActive}" @click="toggleNav()">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <label>Pixiedust Arts</label>
            </div>

            <ul class="nav" :class="{'mobile-nav': hamburger, 'search': isSearch, 'no-search': !isSearch}">
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">About</a></li>
                <li class="nav-item"><a href="#">Product</a></li>
                <li class="nav-item"><a href="#">Contact</a></li>
                <i class="fas fa-search" id="search-icon" @click="toggleSearch()">ddd</i>
                <input class="search-input" type="text" placeholder="Search.." :class="{'search-active': isSearch}">
            </ul>

            <div class="user-block">
                <theme-switch></theme-switch>
            </div>
        </nav>
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
            isActive: false,
            isSearch: false
        }
    },
    methods: {
        send(path) {
            this.$router.push(`/${path}`);
        },
        toggleNav() {
            this.hamburger = !this.hamburger;
            this.isActive = !this.isActive;
        },
        toggleSearch() {
            this.isSearch = !this.isSearch;
        }
    }
}
</script>

