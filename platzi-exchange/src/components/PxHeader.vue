<template>
    <header class="shadow w-screen">
        <nav>
            <nav class="flex items-center justify-between bg-green-400 p-6">
                <router-link
                    :to="{ name: 'home' }"
                    class="flex items-center flex-shrink-0 text-white mr-6"
                >
                    <px-icon class="mr-2" />
                    <span class="font-semibold text-xl tracking-tight"
                        >PlatziExchange</span
                    >
                </router-link>
                <div
                    class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:wauto"
                >
                    <div class="text-sm lg:flex-grow">
                        <router-link
                            v-for="l in links"
                            :key="l.title"
                            :to="l.to"
                            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                            >{{ l.title }}</router-link
                        >
                    </div>
                </div>
            </nav>
        </nav>
    </header>
</template>

<script>
import PxIcon from "@/components/PxIcon"

export default {
    name: "pxHeader",
    components: { PxIcon },
    props: {
        links: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
