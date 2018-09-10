<template lang="pug">
    .container
        .box
            .box__header
                h3 Itinerary 
            .box__content
                ul.planner-list
                    li.planner-list-item
                        .planner-item
                            h4 Mon
                        .planner-item
                            .planner-item__timeline
                                span 07.00
                                .planner-timeline-bar.train
                                    span IC1234
                                span 08.30 (1h30min)
                            .planner-item__details
                                span Gent
                                span Kortrijk
                        .planner-item
                            .planner-item__timeline
                                span 17.30
                                .planner-timeline-bar.train
                                    span IC1234
                                span 19.00 (1h30min)
                            .planner-item__details
                                span Kortrijk
                                span Gent
                        .planner-item
                            h4 total 3h
                    li.planner-list-item
                        .planner-item
                        .planner-item
                            h4 Grand total 2h
                        
</template>

<script>
export default {
    
}
</script>
