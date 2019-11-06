const getSum = require('../../utilities/getSum');
const getColumn = require('../../utilities/getColumn');

const checkSum = async inputValuesFromApp => {
    try {
        let error = false;
        for(let i = 0, l = inputValuesFromApp[0].length; i < l; i++) {
            const column = getColumn(inputValuesFromApp)
            const sum = getSum(column);
            if(parseFloat(sum) !== parseFloat(inputValuesFromApp[i].sum[0])) {
                console.log(
                    'Fail for', inputValuesFromApp[i].inputValues,
                    'which sum should be', sum,
                    'but it is', inputValuesFromApp[i].sum[0]
                );
                error = true;
            }
        }

        if(error) {
            return 'Sum test failure'
        } else return 'Sum test passed'
    } catch (e) {

    }
};

module.exports = checkSum;
