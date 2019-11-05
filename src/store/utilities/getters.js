const getters = {
    getPropertyType(state) {
        return state.searchData.property;
    },
    getTransactionType(state) {
        return state.searchData.transaction;
    },
    getDistrict(state) {
        return state.searchData.district;
    },
    getFeature(state) {
        return state.searchData.feature;
    },
    getPrice(state) {
        return state.searchData.price;
    },
    getSize(state) {
        return state.searchData.size;
    }
};

export default getters