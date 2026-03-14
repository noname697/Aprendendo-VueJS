<template>
    <header class="header">Header</header>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('resize', this.resize)
    },
    beforeUnmount() {
        console.log('beforeUnmount');
        window.removeEventListener('resize', this.resize)
    },

    unmounted() {
        console.log('unmounted');
    },
    methods: {
        resize(e) {
            console.log(e);
        }
    }
};
</script>

<style>
.header {
    background-color: aqua;
}
</style>
