import { myFetch } from './API';

export function fetchToken (code) {
    const form = new FormData();
    form.append('code', code);
    form.append('client_id', '504616');
    form.append('client_secret', 'GBaZt4p3YXVCXKbbeRbiImrZh5TlRG6TuJZF0frBEqlYp5wXgI');
    form.append('grant_type', 'authorization_code');

    const url = '/officient/token?';
    return myFetch(url, {
        method: 'POST',
        credentials: 'include',
        body: form
    });
}

export function fetchPersonList (token) {
    const url = '/officient/people/list?page=0';
    return myFetch(url, {
        method: 'GET'
        // credentials: 'include'
    }, token);
}

export function fetchPersonDetails (id, token) {
    const url = `/officient/people/${id}/detail`;
    return myFetch(url, {
        method: 'GET'
    }, token);
}
