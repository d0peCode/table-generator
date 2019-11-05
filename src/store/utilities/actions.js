const actions = {
    setTableSize(context, response) {
        context.commit("SET_TABLE_SIZE", response);
    },
    setTableValues(context, response) {
        console.log('set table values action')
        context.commit("SET_TABLE_VALUES", response);
    }
};

export default actions
