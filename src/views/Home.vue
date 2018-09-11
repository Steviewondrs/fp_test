<template lang="pug">
    div
        div(v-if="!isAuthenticated")
            Login
        div(v-if="isAuthenticated")
            PersonsList
</template>

<script>
import { mapGetters } from 'vuex'
import Login from '@/components/Login';
import PersonsList from '@/components/PersonsList';

export default {
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
    name: 'home',
    components: {
        Login,
        PersonsList
    }
};
</script>
