// import querystring from 'querystring';
import { myFetch } from './API';

export function fetchRoute (fromCity, toCity) {
    // TODO
}

export function fetchStations () {
    const url = '/irail/stations?format=json';
    return myFetch(url, {
        method: 'GET'
    });
}
// function formatDate (date) {
//     var year = '' + date.getFullYear();
//     year = year.substring(2, 4);
//     var day = '' + date.getDate();
//     var month = '' + date.getMonth();

//     return day + month + year;
// }
