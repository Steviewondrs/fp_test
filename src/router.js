import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import PersonDetail from './views/PersonDetail.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/person/:id',
            name: 'person',
            component: PersonDetail,
        }
    ],
});
