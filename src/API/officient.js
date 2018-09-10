// import axios from 'axios';
import querystring from 'querystring';
import * as mockDB from './mockDB';
// import { debug } from 'util';

export function readAccessToken () {
    // TODO: get access token from officient API
}

export function fetchPersonList () {
    let data = mockDB.getPersonList();
    return mockCall(data);
}

export function fetchPersonDetails (id) {
    let data = mockDB.getPersonDetail(id);
    return mockCall(data);
}

export function fetchPersonItinerary (person) {
    // TODO: something here
}

export function fetchPersonItineraryTEST (person) {
    let date = new Date();
    let formattedDate = formatDate(date);
    const params = querystring.stringify({
        from: 'http://irail.be/stations/NMBS/008814001',
        to: 'http://irail.be/stations/NMBS/008821006',
        date: formattedDate,
        time: '1200',
        timeSel: 'depart'
    });
    let url = 'https://api.irail.be?' + params;

    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'cache-control': 'Public',
            'etag': 'e5e7c8ae25bb71cdfce80412c2b1be54'
        }
    })
        .then(result => {})
        .catch(err => { console.log(err); });
}

function mockCall (data) {
    const time = Math.floor(Math.random() * 3000);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(data);
        }, time);
    });
}

function formatDate (date) {
    var year = '' + date.getFullYear();
    year = year.substring(2, 4);
    var day = '' + date.getDate();
    var month = '' + date.getMonth();

    return day + month + year;
}
