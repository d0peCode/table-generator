const getAverage = require('../../utilities/getAverage');

const checkAverage = async inputValuesFromApp => {
    try {
        let error = false;
        for(let i = 0, l = inputValuesFromApp.length; i < l; i++) {
            const average = getAverage(inputValuesFromApp[i].inputValues)
            if(parseFloat(average) !== parseFloat(inputValuesFromApp[i].average[0])) {
                console.log(
                    'Fail for', inputValuesFromApp[i].inputValues,
                    'which average should be', average,
                    'but it is', inputValuesFromApp[i].average[0]
                );
                error = true;
            }
        }

        if(error) {
            return 'Averages test failure'
        } else return 'Averages test passed'
    } catch (e) {
        console.error('Testing averages failure.' +
            'averagesTable.js is not working correctly.' +
            'Error msg:', e)
    }
};

module.exports = checkAverage;
