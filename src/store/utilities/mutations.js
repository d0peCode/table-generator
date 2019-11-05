const mutations = {
    SET_TABLE_SIZE(state, response) {
        state.table.size = response.data;
    },
    SET_TABLE_VALUES(state, response) {
        state.table.VALUES = response.data;
    }
};

export default mutations
