<template>
    <button
        @click="buttonClick"
        class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
    >
        <beat-loader
            :loading="isLoading"
            :color="'#68d391'"
            :size="8"
        ></beat-loader>
        <div v-show="!isLoading">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    name: "PxButton",

    props: {
        isLoading: { default: false, type: Boolean },
    },

    methods: {
        buttonClick() {
            this.$emit("custom-click")
        },
    },
}
</script>
