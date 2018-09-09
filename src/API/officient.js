import axios from 'axios';
import * as mockDB from './mockDB';

export function readAccessToken() {
    // TODO: get access token from officient API
}

export function readPersonList() {
    let data = mockDB.getPersonList();
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(data);
        }, 3000);
    });
}


