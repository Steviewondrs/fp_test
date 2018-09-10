<template lang="pug">
    .container(v-if="person")
        h1 {{ person.employee.name }}
        .box
            .box__header
                h3 Personal information
            .box__content
                .grid.grid--col-three
                    .grid-item
                        h4.title Birthdate
                        .content {{ person.employee.dob }}
                    .grid-item
                        h4.title Nationality
                        .content {{ person.employee.nationality_country_code }}
                    .grid-item
                        h4.title Birthplace
                        .content {{ person.employee.place_of_birth }}
                    .grid-item
                        h4.title Gender
                        .content {{ person.employee.gender }}
                    .grid-item
                        h4.title Marital status
                        .content {{ person.employee.civil_state }}
                    .grid-item
                        h4.title email
                        .content {{ person.employee.email }}

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
