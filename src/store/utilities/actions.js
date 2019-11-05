const actions = {
    setSearch(context, response) {
        context.commit("SET_SEARCH_DATA", {
            dataType: response.dataType,
            key: response.key,
            data: response.data
        });
    },
    setSearchReload(context, response) {
        context.commit("SET_SEARCH_RELOAD", response);
    },
    setPrice(context, response) {
        context.commit("SET_PRICE", response);
    },
    setSize(context, response) {
        context.commit("SET_SIZE", response);
    }
};

export default actions