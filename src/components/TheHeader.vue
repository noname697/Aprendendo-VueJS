<template>
    <header class="header">
        <h1 v-if="$slots.title" class="title">
            <slot name="title" />
        </h1>
        <div v-if="$slots.description" class="description">
            <slot name="description" />
        </div>

        <div v-if="$slots.default" class="content">
            <slot />
        </div>
    </header>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots)
    },
};
</script>

<style>
.header {
    background-color: aqua;
}
</style>
