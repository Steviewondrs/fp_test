<template lang="pug">
    .container
        .box
            .box__header
                h3 Persons
            .box__content
                ul.list
                    li.list-item( v-for="person in list" )
                        router-link.link.persons-list__link(:to="{ name: 'person', params: {id: person.id}}")
                            h4 {{ person.name }}
                            h5.hide--md {{ person.email }}


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
