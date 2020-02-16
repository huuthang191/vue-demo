import {FETCH_PROPERTIES} from './actions.type';
import {FETCH_START, FETCH_END} from './mutations.type';
import ApiService from '../services/api.service';

const state = {
    properties: [],
    propertiesCount: 0,
    isLoading: false
};

const getters = {
    propertiesCount(state) {
        return state.propertiesCount;
    },
    properties(state) {
        return state.properties;
    },
    isLoading(state) {
        return state.isLoading;
    },
};

const actions = {
    [FETCH_PROPERTIES]({commit}, params) {
        commit(FETCH_START);
        return ApiService.post('/omi-properties/search?body-format=SearchParam', params).then(({data}) => {
            commit(FETCH_END, {properties: data.results.map((item) => item.document), propertiesCount: data.count});
        }).catch(error => {
            throw new Error(error);
        });
    },
};

const mutations = {
    [FETCH_START](state) {
        state.isLoading = true;
    },
    [FETCH_END](state, { properties, propertiesCount }) {
        state.properties = properties;
        state.propertiesCount = propertiesCount;
        state.isLoading = false;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
