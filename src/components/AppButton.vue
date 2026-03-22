<template>
    <button @click="sendData">
        {{ variant }}
        <slot></slot>
        <slot name="icon" />
    </button>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'bla',
        }
    },
    setup(props, { slots, emit }) {
        console.log(slots);

        const sendData = () => {
            emit('update', true)
        }

        return {
            sendData
        }
    }
}
</script>