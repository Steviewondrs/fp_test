import { 
    fetchPersonList,
    fetchPersonDetails,
    fetchPersonItinerary
} from '../API/officient.js';

export const readPersonsList = async ({ commit }) => {
    try {
        const list = await fetchPersonList();
        commit('PERSON_LIST_READ_SUCCESS', list);
    } catch (err) {
        commit('API_ERROR', err );
    }
}

export const readPersonDetails = async ({ commit, dispatch }, id) => {
    try {
        const details = await fetchPersonDetails(id);
        await dispatch('readPersonItinerary', details);
        commit('PERSON_DETAILS_READ_SUCCESS', details);
    } catch (err) {
        commit('API_ERROR', err);
    }
}

export const readPersonItinerary = async ({ commit }, person) => {
    try {
        const itinerary = await fetchPersonItinerary(person);
        commit('PERSON_ITINERARY_READ_SUCCESS', itinerary);
    } catch (err) {
        commit('API_ERROR', err);
    }
}
