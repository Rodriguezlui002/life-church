<template>
    <div class="relative">
        <header class="bg-life-dark text-gray-100 px-10 py-6">
            <nav class="flex justify-between items-center">
                <div v-on:click="menuHandler">
                    <NuxtLink to="/" class="text-2xl uppercase tracking-wide">Life Church</NuxtLink>
                </div>

                <div class="cursor-pointer sm:hidden" v-on:click="clickHandler">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

                <div class="hidden sm:block">
                    <ul class="flex text-gray-100 space-x-6 text-xl">
                        <li v-on:click="menuHandler"><NuxtLink to="/" :class="[$nuxt.$route.path === '/' ? ['bg-life', 'py-1', 'px-2', 'rounded'] : '']">Home</NuxtLink></li>
                        <li v-on:click="menuHandler"><NuxtLink to="/locations" :class="[$nuxt.$route.path === '/locations' ? ['bg-life', 'py-1', 'px-2', 'rounded'] : '']">Locations</NuxtLink></li>
                        <li v-on:click="menuHandler"><NuxtLink to="/about" :class="[$nuxt.$route.path === '/about' ? ['bg-life', 'py-1', 'px-2', 'rounded'] : '']">About</NuxtLink></li>
                        <li v-on:click="menuHandler"><NuxtLink to="/contact" :class="[$nuxt.$route.path === '/contact' ? ['bg-life', 'py-1', 'px-2', 'rounded'] : '']">Contact</NuxtLink></li>
                    </ul>
                </div>
            </nav>
        </header>
        <div class="sm:hidden fixed flex inset-x-0 top-28 py-6 mx-auto w-8/12 h-auto text-center bg-life-dark rounded"  :class="[ clicked ? 'opacity-100' : 'opacity-0' ]">
                <ul class="m-auto space-y-10 text-xl text-gray-100">
                    <li v-on:click="clickHandler"><NuxtLink to="/" :class="[$nuxt.$route.path === '/' ? ['bg-life', 'py-1', 'px-2', 'rounded'] : '']">Home</NuxtLink></li>
                    <li v-on:click="clickHandler"><NuxtLink to="/locations" :class="[$nuxt.$route.path === '/locations' ? ['bg-life', 'py-1', 'px-2', 'rounded'] : '']">Locations</NuxtLink></li>
                    <li v-on:click="clickHandler"><NuxtLink to="/about" :class="[$nuxt.$route.path === '/about' ? ['bg-life', 'py-1', 'px-2', 'rounded'] : '']">About</NuxtLink></li>
                    <li v-on:click="clickHandler"><NuxtLink to="/contact" :class="[$nuxt.$route.path === '/contact' ? ['bg-life', 'py-1', 'px-2', 'rounded'] : '']">Contact</NuxtLink></li>
                </ul>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clicked: false
        }
    },
    methods: {
        clickHandler() {
            if (this.clicked) {
                this.clicked = false
            } else {
                this.clicked = true
            }
        },
        menuHandler() {
            if (this.clicked) {
                this.clicked = false
            }
        }
    }
}
</script>