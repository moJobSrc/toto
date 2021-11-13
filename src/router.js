import Vue from "vue";
import VueRouter from "vue-router";
import bet from "./views/betComponent";
import login from "./views/loginComponent";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path:"/",
            component: bet
        },
        {
            path:"/login",
            component: login
        }
    ]
})

export default router;
