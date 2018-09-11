import {
    fetchToken,
    fetchPersonList,
    fetchPersonDetails,
    fetchPersonItinerary
} from '../API/officient.js';

export const readPersonsList = async ({ commit, state }) => {
    try {
        const token = state.token;
        const list = await fetchPersonList(token);
        commit('PERSON_LIST_READ_SUCCESS', list);
    } catch (err) {
        commit('API_ERROR', err);
    }
};

export const readPersonDetails = async ({ commit, dispatch, state }, id) => {
    try {
        const token = state.token;
        const details = await fetchPersonDetails(id, token);
        await dispatch('readPersonItinerary', details);
        commit('PERSON_DETAILS_READ_SUCCESS', details);
    } catch (err) {
        commit('API_ERROR', err);
    }
};

export const readPersonItinerary = async ({ commit, dispatch }, person) => {
    try {
        // await 
        const itinerary = await fetchPersonItinerary(person);
        commit('PERSON_ITINERARY_READ_SUCCESS', itinerary);
    } catch (err) {
        commit('API_ERROR', err);
    }
};

export const readStation = async ({ commit }) => {
    try {
        const stations = await fetchStations();
        commit('STATIONS_READ_SUCCESS', stations);
    } catch (err) {
        commit('API_ERROR', err);
    }
};

export const readToken = async ({ commit }, code) => {
    try {
        const token = await fetchToken(code);
        localStorage.setItem('user-token', token.access_token);
        commit('TOKEN_READ_SUCCESS', token.access_token);
    } catch (err) {
        commit('API_ERROR', err);
    }
};
