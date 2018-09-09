<template lang="pug">
    .container
        PersonalInfo
        Itinerary
</template>

<script>
// @ is an alias to /src
import PersonalInfo from '@/components/PersonalInfo.vue';
import Itinerary from '@/components/Itinerary.vue';

export default {
    name: 'details',
    components: {
        PersonalInfo,
        Itinerary
    },
};
</script>
