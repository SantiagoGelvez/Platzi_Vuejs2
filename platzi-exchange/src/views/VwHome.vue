<template>
    <div>
        <px-assets-table :assets="assets" />
    </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable.vue";
import api from "@/api"

export default {
    name: "VwHome",
    components: { PxAssetsTable },
    
    data() {
        return {
            assets: []
        }
    },

    created() {
        api.getAssets().then(assets => (this.assets = assets))
    }
};
</script>
