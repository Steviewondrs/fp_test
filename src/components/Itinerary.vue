<template lang="pug">
    .container
        .box
            .box__header
                h3 Itinerary
            .box__content
                ul.planner-list
                    itinerary-item(v-for="(item, index) in itinerary" v-bind:item="item" v-bind:key="index")
                    //- itinerary-item
                    li.planner-list-item
                        .planner-item
                        .planner-item
                            h4 Grand total 3h
</template>

<script>
import ItineraryItem from './ItineraryItem';
import { mapState } from 'vuex';
export default {
    components: {
        ItineraryItem
    },
    computed: mapState({
        itinerary: state => state.itinerary
    })
};
</script>
