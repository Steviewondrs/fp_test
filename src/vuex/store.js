export const state = {
    token: localStorage.getItem('user-token') || '',
    personsList: [],
    selectedPerson: undefined,
    wage: {},
    stations: []
};

export const mutations = {
    PERSON_LIST_READ_SUCCESS (state, list) {
        state.personsList = list;
    },

    PERSON_DETAILS_READ_SUCCESS (state, details) {
        state.selectedPerson = details;
    },

    PERSON_ITINERARY_READ_SUCCESS (state, result) {
        state.itinerary = result;
    },

    API_ERROR (state, error) {
        console.log(error);
        // state.loading = false;
    },

    TOKEN_READ_SUCCESS (state, token) {
        state.token = token;
    },

    PERSON_WAGE_READ_SUCCESS (state, wage) {
        state.wage = wage;
    },

    STATIONS_READ_SUCCESS (state, stations) {
        state.stations = stations;
    },

    LOGOUT (state) {
        state.token = '';
    }
};

export const getters = {
    isAuthenticated: state => !!state.token
};
