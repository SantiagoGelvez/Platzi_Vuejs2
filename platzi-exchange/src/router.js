import Vue from "vue";
import Router from "vue-router";
import VwHome from "@/views/VwHome";
import VwAbout from "@/views/VwAbout";
import VwError from "@/views/VwError";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: VwHome,
        },
        {
            path: "/about",
            name: "about",
            component: VwAbout,
        },
        {
            path: "*",
            name: "Error",
            component: VwError,
        },
    ],
});
