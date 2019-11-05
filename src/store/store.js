import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import actions from "./utilities/actions"
import mutations from "./utilities/mutations"
import getters from './utilities/getters'
import state from './utilities/state'

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [createPersistedState()]
});

export default store;
