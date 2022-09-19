<template>
    <div>
        <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
        <px-assets-table v-if="!isLoading" :assets="assets" />
    </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable.vue"
import api from "@/api"

export default {
    name: "VwHome",
    components: { PxAssetsTable },

    data() {
        return {
            assets: [],
            isLoading: false,
        }
    },

    created() {
        this.isLoading = true
        api.getAssets(20)
            .then((assets) => (this.assets = assets))
            .finally(() => (this.isLoading = false))
    },
}
</script>
