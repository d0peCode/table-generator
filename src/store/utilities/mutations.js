const mutations = {
    SET_TABLE_SIZE(state, response) {
        state.table.size = response.data;
        if(state.table.values.length < response.data.y) {
            for (let i = state.table.values.length, l = response.data.y; i < l; i++) {
                state.table.values.push([]);
            }
        }
        if(state.table.values.length > response.data.y) {
            for (let i = response.data.y, l = state.table.values.length; i < l; i++) {
                state.table.values.pop();
            }
        }
        for(let i = 0; i < state.table.values.length; i++) {
            if(state.table.values[i] && state.table.values[i].length > state.table.size.x) {
                state.table.values[i].pop();
            }
        }
    },
    SET_TABLE_VALUES(state, response) {
        state.table.values = response.data;
        console.log('set state.table.values mutation', state.table.values);
    }
};

export default mutations
