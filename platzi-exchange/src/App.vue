<template>
    <main>
        <px-header :links="links" />
        <router-view
            class="container px-5 sm:px-20 py-20 flex justify-center"
        />
    </main>
</template>

<script>
import api from "@/api"
import PxHeader from "@/components/PxHeader"

export default {
    name: "App",
    components: { PxHeader },

    data() {
        return {
            assets: [],
            links: [],
        }
    },

    created() {
        api.getAssets(5).then((res) => {
            res.forEach((a) => {
                const link = {
                    title: a.symbol,
                    to: { name: "coin-detail", params: { id: a.id } },
                }

                this.links.push(link)
            })
        })
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
