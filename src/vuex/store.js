export const state = {
    personsList: [],
    selectedPerson: {
        employee: {
            name: ''
        }
    },
    token: localStorage.getItem('user-token') || ''
};

export const mutations = {
    PERSON_LIST_READ_SUCCESS (state, result) {
        state.personsList = result.data;
    },

    PERSON_DETAILS_READ_SUCCESS (state, result) {
        state.selectedPerson = result;
    },

    PERSON_ITINERARY_READ_SUCCESS (state, result) {
        state.itinerary = result; // TODO:
    },

    API_ERROR (state, error) {
        console.log(error);
    },

    TOKEN_READ_SUCCESS (state, token) {
        state.token = token;
    }
};

export const getters = {
    isAuthenticated: state => !!state.token
};
