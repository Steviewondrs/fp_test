export async function myFetch (url, params, token) {
    if (token) {
        if (!params.headers) {
            params.headers = {};
        }
        params.headers.Authorization = 'Bearer ' + token;
    }

    try {
        const result = await fetch(url, params);
        const data = await result.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}
