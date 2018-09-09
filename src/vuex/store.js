export const state = {
    personsList: []
}

export const mutations = {
    PERSON_LIST_READ_SUCCESS( state, result) {
        state.personsList = result.data;
    },

    API_ERROR(state, error) {
        console.log(error);
    }
};
