<template lang="pug">
    h1 PERSONS LIST
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: mapState({
        list: state => state.personsList
    }),
    methods: {
        readPersonList() {
            this.$store.dispatch( 'readPersonsList' );
        }
    },
    mounted() {
        this.readPersonList();
    }
};
</script>
