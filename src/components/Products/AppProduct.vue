<template>
    <div class="card">
        {{ product.name }} - {{ product.price }} <br>
        <button @click="addProduct">Adicionar</button>
        <button @click="removeProduct" v-if="inCart">Remover</button>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    methods: {
        addProduct() {
            this.$store.commit("addProduct", this.product)
        },
        removeProduct() {
            this.$store.commit("removeProduct", this.product.id)
        },
    },
    computed: {
        inCart() {
            let c = 0
            this.$store.state.cart.forEach((i) => {
                if (i.id === this.product.id) c++
            })
            return c === 1
        }
    }
}
</script>

<style scoped>
.card {
    background: bisque;
    padding: 6px;
    margin-bottom: 5px;
}
</style>