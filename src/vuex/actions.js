import { readPersonList } from '../API/officient.js';

export const readPersonsList = async({ commit }) => {
    try {
        const list = await readPersonList();
        console.log(list);
        commit('PERSON_LIST_READ_SUCCESS', list);
    } catch (err) {
        commit( 'API_ERROR', err );
    }
}