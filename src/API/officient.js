// import querystring from 'querystring';
import * as mockDB from './mockDB';
import { myFetch } from './API';

export function fetchToken (code) {
    const form = new FormData();
    form.append('code', code);
    form.append('client_id', '504616');
    form.append('client_secret', 'GBaZt4p3YXVCXKbbeRbiImrZh5TlRG6TuJZF0frBEqlYp5wXgI');
    form.append('grant_type', 'authorization_code');

    var url = '/officient/token?';
    return myFetch(url, {
        method: 'POST',
        credentials: 'include',
        body: form
    });
}

export function fetchPersonList (token) {
    const url = '/officient/people/list?page=0';
    return myFetch(url, {
        method: 'GET',
        credentials: 'include'
    }, token);
}

export function fetchPersonDetails (id) {
    let data = mockDB.getPersonDetail(id);
    return mockCall(data);
}

export function fetchPersonItinerary (person) {
    // TODO: something here
}

function mockCall (data) {
    const time = Math.floor(Math.random() * 3000);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(data);
        }, time);
    });
}

// function formatDate (date) {
//     var year = '' + date.getFullYear();
//     year = year.substring(2, 4);
//     var day = '' + date.getDate();
//     var month = '' + date.getMonth();

//     return day + month + year;
// }
