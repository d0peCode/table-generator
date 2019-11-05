const getters = {
    getTableSize(state) {
        return state.table.size;
    },
    getTableValues(state) {
        return state.table.values;
    }
};

export default getters
