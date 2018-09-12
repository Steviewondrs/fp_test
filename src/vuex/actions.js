import {
    fetchToken,
    fetchPersonList,
    fetchPersonDetails,
    fetchPersonWage
} from '../API/officient';
import {
    fetchStations,
    fetchItinerary
} from '../API/iRail';

export const readToken = async ({ commit }, code) => {
    try {
        const token = await fetchToken(code);
        localStorage.setItem('user-token', token.access_token);
        commit('TOKEN_READ_SUCCESS', token.access_token);
    } catch (err) {
        commit('API_ERROR', err);
    }
};

export const readPersonsList = async ({ commit, state }) => {
    try {
        const token = state.token;
        const list = await fetchPersonList(token);
        commit('PERSON_LIST_READ_SUCCESS', list.data);
    } catch (err) {
        commit('API_ERROR', err);
    }
};

export const readPersonDetails = async ({ commit, dispatch, state }, id) => {
    try {
        const token = state.token;
        const details = await fetchPersonDetails(id, token);
        await dispatch('readPersonItinerary', details.data);
        commit('PERSON_DETAILS_READ_SUCCESS', details.data);
    } catch (err) {
        commit('API_ERROR', err);
    }
};

export const readPersonWage = async ({ commit, state }, id) => {
    try {
        const token = state.token;
        const wage = await fetchPersonWage(id, token);
        commit('PERSON_WAGE_READ_SUCCESS', wage.data);
    } catch (err) {
        commit('API_ERROR', err);
    }
};

export const readPersonItinerary = async ({ commit, dispatch, state }, person) => {
    try {
        // read wage
        await dispatch('readPersonWage', person.id);

        // read and find stations
        if (state.stations.length === 0) {
            await dispatch('readStations');
        }
        const from = findStation(state.stations, person.address.city);
        const to = findStation(state.stations, 'Kortrijk');
        // debugger
        // read itinerary
        const itinerary = await fetchItinerary(from.id, to.id, state.wage.weekly_time_engagement_minutes);
        commit('PERSON_ITINERARY_READ_SUCCESS', itinerary);
    } catch (err) {
        commit('API_ERROR', err);
    }
};

export const readStations = async ({ commit }) => {
    try {
        const stations = await fetchStations();
        commit('STATIONS_READ_SUCCESS', stations.station);
    } catch (err) {
        commit('API_ERROR', err);
    }
};

export const logout = ({ commit }) => {
    commit('LOGOUT');
    localStorage.removeItem('user-token');
};

function findStation (stations, city) {
    return stations.find(station => station.name.includes(city));
}
