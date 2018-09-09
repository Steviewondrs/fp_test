export const state = {
    personsList: [],
    selectedPerson: {
        name: "test"
    }
}

export const mutations = {
    PERSON_LIST_READ_SUCCESS( state, result) {
        state.personsList = result.data;
    },

    PERSON_DETAILS_READ_SUCCESS( state, result) {
        state.selectedPerson = result;
    },

    PERSON_ITINERARY_READ_SUCCESS( state, result) {
        state.itinerary = result; // TODO:
    },

    API_ERROR(state, error) {
        console.log(error);
    }

};
