const getAverage = array => {
    const countDecimal = value => {
        if (!value || Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0;
    };
    let total = 0;
    if(!array || array.length === 0) return 'brak';
    for(let i = 0, l = array.length; i < l; i++) {
        if(array[i]) total += parseFloat(array[i]);
    }
    const validElementsLength = array.filter(Boolean).length;
    if(validElementsLength > 0) {
        const average = total / validElementsLength;
        if(countDecimal(average) > 3) {
            return average.toFixed(3)
        } else {
            return average;
        }
    }
    return 'brak';
};

module.exports = getAverage;
