<template lang="pug">
    div
        div(v-if="!isAuthenticated")
            Login
        div(v-if="isAuthenticated")
            .detail-link-container
                button(v-on:click="logout") Log out
            PersonsList
</template>

<script>
import { mapGetters } from 'vuex';
import Login from '@/components/Login';
import PersonsList from '@/components/PersonsList';

export default {
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
    name: 'home',
    methods: {
        logout () {
            this.$store.dispatch('logout');
        }
    },
    components: {
        Login,
        PersonsList
    }
};
</script>
