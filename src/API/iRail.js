import querystring from 'querystring';
import { myFetch } from './API';

export function fetchStations () {
    const url = 'https://api.irail.be/stations?format=json';
    return myFetch(url, {
        method: 'GET'
    });
}

export function fetchRoute (from, to, date, hour, timesel) {
    const params = {
        from,
        to,
        date,
        hour,
        timesel,
        format: 'json',
        typeOfTransport: 'nointernationaltrains'
    };

    const url = 'https://api.irail.be/connections/?' + querystring.stringify(params);
    return myFetch(url, {
        method: 'GET'
    });
}

function timeout (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchItinerary (from, to, weeklyTimeEngagementMinutes) {
    const timesInMinutes = getTimeEngagement(weeklyTimeEngagementMinutes);

    const fromCalls = [];
    for (let i = 0; i < 7; i++) {
        // date
        const today = new Date();
        let date = new Date(today.setDate(today.getDate() + i));
        let formattedDate = formatDate(date);
        // hours
        let minutes = timesInMinutes[date.getDay()];
        let hour = '0900';

        if (minutes > 0) {
            const result = await fetchRoute(from, to, formattedDate, hour, 'departure');
            await timeout(334);
            fromCalls[i] = {
                date,
                connection: result.connection[0]
            };
        } else {
            fromCalls[i] = {date};
        }
    }

    const toCalls = [];
    for (let i = 0; i < 7; i++) {
        // date
        const today = new Date();
        let date = new Date(today.setDate(today.getDate() + i));
        let formattedDate = formatDate(date);
        // hours
        let minutes = timesInMinutes[date.getDay()];
        let hour = 9 + Math.ceil(minutes / 60) + '00';

        if (minutes > 0) {
            const result = await fetchRoute(to, from, formattedDate, hour, 'arrival');
            await timeout(334);
            toCalls[i] = {
                date,
                connection: result.connection[0]
            };
        } else {
            toCalls[i] = {date};
        }
    }

    const resultSet = [];
    for (let i = 0; i < 7; i++) {
        resultSet[i] = {
            morning: fromCalls[i],
            evening: toCalls[i]
        };
        resultSet[i].date = resultSet[i].morning.date;
    }
    return resultSet;
}

function formatDate (date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = ('' + date.getFullYear()).substring(2, 4);

    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;

    return dd + mm + yy;
}

function getTimeEngagement (timesInMinutes) {
    const time = [];
    time.push(timesInMinutes.sunday);
    time.push(timesInMinutes.monday);
    time.push(timesInMinutes.tuesday);
    time.push(timesInMinutes.wednesday);
    time.push(timesInMinutes.thursday);
    time.push(timesInMinutes.friday);
    time.push(timesInMinutes.saturday);
    return time;
}
