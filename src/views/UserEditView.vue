<template>
    <div>
        {{ $route.params.id }}
        Usuário <br>
        <button @click="login()">
            Login
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        login() {
            this.$router.push("/about")
            console.log("chreogu");
        }
    }
}
</script>