import axios from 'axios';
import * as mockDB from './mockDB';

export function readAccessToken() {
    // TODO: get access token from officient API
}

export function fetchPersonList() {
    let data = mockDB.getPersonList();
    return mockCall(data);
}

export function fetchPersonDetails(id) {
    let data = mockDB.getPersonDetail(id);
    return mockCall(data);
}

export function fetchPersonItinerary(person) {
    return "test";
}

function mockCall(data) {
    const time = Math.floor(Math.random() * 3000);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(data);
        }, time);
    });
}
