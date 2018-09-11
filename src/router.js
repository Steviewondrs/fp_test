import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import PersonDetail from './views/PersonDetail';
import PersonsList from './components/PersonsList';
import Login from './components/Login';
import store from './vuex/store';

Vue.use(Router);

function ifNotAuthenticated (to, from, next) {
    if (!store.getters.isAuthenticated) {
        next();
    } else {
        next('/');
    }
}

function ifAuthenticated (to, from, next) {
    if (store.getters.isAuthenticated) {
        next();
    } else {
        next('/login');
    }
}

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/personlist',
            name: 'personlist',
            component: PersonsList,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/person/:id',
            name: 'person',
            component: PersonDetail
        }
    ]
});
