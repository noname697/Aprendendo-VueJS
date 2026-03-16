<template>
    <div :class="baseClass">
        <slot />

        <button @click="onclick">X</button>
    </div>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: ''
        },

    },
    computed: {
        baseClass() {
            return ['alert', this.variant ? `alert-${this.variant}` : '']
        }
    },
    methods: {
        onclick(){
            this.$emit('close')
            console.log("click");
            
        }
    }
}
</script>

<style scoped>
.alert {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background-color: #ddd;
}

.alert-success {
    background-color: #42b983;
    color: #fff;
}

.alert-danger {
    background-color: red;
    color: #fff;
}
</style>
