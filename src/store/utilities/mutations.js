const mutations = {
    SET_TABLE_SIZE(state, response) {
        state.table.size = response.data;
        if(state.table.values.length === 0) {
            for (let i = 0, l = response.data.y; i < l; i++) state.table.values.push([]);
        }
    },
    SET_TABLE_VALUES(state, response) {
        state.table.values = response.data;
        console.log('set state.table.values mutation', state.table.values);
    }
};

export default mutations
