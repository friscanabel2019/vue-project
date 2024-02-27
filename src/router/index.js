import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    // Define your routes here
    { path: "/", component: Home },
    { path: "/about", component: About },
    // Add more routes as needed
];

const router = new VueRouter({
    routes
});

export default  router