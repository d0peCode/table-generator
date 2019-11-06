const getSum = array => {
    if(array.length > 0) return array.reduce((a, b) => ( parseFloat(a) + parseFloat(b) ));
    return 'brak';
};

module.exports = getSum;
