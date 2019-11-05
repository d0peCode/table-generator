import Vue from "vue";

const mutations = {
    changeLang: (state, response) => {
        if(response) {
            state.currentLanguage = response;
            Vue.i18n.set(response);
            console.log(response);
        }
    },
    addObserved: (state, response) => {
        let duplicate = false;
        for(let i = 0, l = state.observedOffers.length; i < l; i++) {
            if(state.observedOffers[i].id === response.id) {
                duplicate = true;
            }
        }
        if(duplicate) return;
        if(response) {
            state.observedOffers.push(response);
            console.log(state.observedOffers);
        }
    },
    deleteObserved: (state, response) => {
        state.observedOffers = state.observedOffers.filter(e => e.id !== response);
    },
    SET_SEARCH_RELOAD(state, response) {
        state.searchReload = response;
    },
    SET_SEARCH_DATA(state, response) {
        let isSelected = false;
        if(response.dataType === 'primitive') {
            isSelected = state.searchData[response.key].includes(response.data);
        }
        if(response.dataType === 'non-primitive') {
            isSelected = state.searchData[response.key].some(e => e.id === response.data.id);
        }

        if(isSelected) {
            if(response.dataType === 'primitive') {
                state.searchData[response.key] = state.searchData[response.key].filter(e => e !== response.data);
            }
            if(response.dataType === 'non-primitive') {
                state.searchData[response.key] = state.searchData[response.key].filter(e => e.id !== response.data.id);
            }
        } else {
            state.searchData[response.key].push(response.data);
        }
    }
};

export default mutations