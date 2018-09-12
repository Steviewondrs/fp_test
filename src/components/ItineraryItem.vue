<template lang="pug">
    li.planner-list-item
        .planner-item
            h4 {{ formatDay(item.date) }}
        .planner-item
            .planner-item__timeline
                span.from {{ formatHour(item.morning.connection.departure.time) }}
                .planner-timeline-bar.train
                    //- span IC1234
                span.to {{ formatHour(item.morning.connection.arrival.time) }} ({{ formatDuration(item.morning.connection.duration) }})
            .planner-item__details
                span {{ item.morning.connection.departure.station }}
                span {{ item.morning.connection.arrival.station }}
        .planner-item
            .planner-item__timeline
                span.from {{ formatHour(item.evening.connection.departure.time) }}
                .planner-timeline-bar.train
                    //- span IC1234
                span.to {{ formatHour(item.evening.connection.arrival.time) }} ({{ formatDuration(item.evening.connection.duration) }})
            .planner-item__details
                span {{ item.evening.connection.departure.station }}
                span {{ item.evening.connection.arrival.station }}
        .planner-item
            //- h4 total 3h
</template>

<script>
export default {
    props: ['item'],
    methods: {
        formatDay (date) {
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            return days[date.getDay()];
        },
        formatHour (dateSecs) {
            let date = new Date(dateSecs * 1000);
            let hh = date.getHours();
            hh = hh < 10 ? '0' + hh : hh;
            let mm = date.getMinutes();
            mm = mm < 10 ? '0' + mm : mm;
            return hh + ':' + mm;
        },
        formatDuration (secs) {
            var hh = Math.floor(secs / 60 / 60);
            var mm = secs % 60;
            // debugger
            hh = hh < 10 ? '0' + hh : hh;
            mm = mm < 10 ? '0' + mm : mm;
            return hh + ':' + mm;
        }
    }
};
</script>
