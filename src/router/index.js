import { createRouter, createWebHistory } from "vue-router";
import Default from "./../layouts/Default.vue";
import Home from "./../layouts/Home.vue";
import Placeholder from "./../layouts/Placeholder.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Home.vue"),
        meta: {
            layout: Home,
        },
    },
    {
        path: "/about",
        name: "about",
        meta: {
            layout: Default,
        },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/our-portals",
        name: "our-portals",
        meta: {
            layout: Placeholder,
        },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/OurPortals.vue"),
    },
    {
        path: "/faq",
        name: "faq",
        meta: {
            layout: Placeholder,
        },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Faq.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        meta: {
            layout: Placeholder,
        },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
