<template lang="pug">
    .container
        router-link.link(to="/") 
            h4 Back to Persons
        PersonalInfo
        Itinerary
</template>

<script>
// @ is an alias to /src
import PersonalInfo from '@/components/PersonalInfo.vue';
import Itinerary from '@/components/Itinerary.vue';

export default {
    name: 'personDetails',
    components: {
        PersonalInfo,
        Itinerary
    },
};
</script>
