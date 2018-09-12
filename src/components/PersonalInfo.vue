<template lang="pug">
    .container(v-if="person")
        h1 {{ person.name }}
        .box
            .box__header
                h3 Personal information
            .box__content
                .grid.grid--col-three(v-if="person")
                    .grid-item
                        h4.title Birthdate
                        .content {{ person.birthdate }}
                    .grid-item
                        h4.title Nationality
                        .content {{ person.nationality_country_code }}
                    .grid-item
                        h4.title Address
                        .content
                            div {{ person.address.line_1 }}
                            div {{ person.address.line_2 }}
                            div {{ person.address.zipcode }} {{ person.address.city }}
                    .grid-item
                        h4.title Gender
                        .content {{ person.gender }}
                    .grid-item
                        h4.title Marital status
                        .content {{ person.civil_state }}
                    .grid-item
                        h4.title email
                        .content {{ person.email }}

</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: mapState({
        person: state => state.selectedPerson
    }),
    methods: {
        readPersonDetails (id) {
            this.$store.dispatch('readPersonDetails', id);
        }
    },
    watch: {
        $route: (from, to) => {
            const id = this.$route.params.id;
            this.readPersonDetails(id);
        }
    },
    created () {
        const id = this.$route.params.id;
        this.readPersonDetails(id);
    }
};
</script>
