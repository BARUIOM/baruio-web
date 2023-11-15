import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

import Main from "@/views/Main.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Main,
        children: [],
        beforeEnter: () => { },
    },
];

export const Router = createRouter({
    history: createWebHistory(),
    routes,
});
