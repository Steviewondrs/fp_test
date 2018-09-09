export const state = {
    personsList: []
}

export const mutations = {
    PERSON_LIST_READ_SUCCESS( state, list) {
        state.personsList = list;
    },

    API_ERROR(state, error) {
        console.log(error);
    }
};
