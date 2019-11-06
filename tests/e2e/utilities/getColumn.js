const getColumn = (array, index) => {
    const column = [];
    for(let i = 0, l = array.length; i < l; i++) {
        if(array[i]) column.push(array[i].inputValues[index])
    }
    return column;
};

module.exports = getColumn;
