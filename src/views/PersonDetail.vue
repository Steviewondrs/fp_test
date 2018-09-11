<template lang="pug">
    div
        .detail-link-container
            router-link.button.btn-detail(to="/") Back to Persons
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
    }
};
</script>
