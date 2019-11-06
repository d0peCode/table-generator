const fillTable = require('./generator/fillAppTable');
const getAppValues = require('./generator/getAppValues')
const checkAverage = require('./generator/checkAverage');
const checkSum = require('./generator/checkSum');

const tableGenerator = async page => {
    try {
        await fillTable(page);
        const appTableValues = await getAppValues(page);
        return await checkAverage(appTableValues) + ' and ' + await checkSum(appTableValues);
    } catch (e) {
        console.error('Testing generator failure.' +
            'Generator is not working correctly.' +
            'Error msg:', e)
    }
};

module.exports = tableGenerator;
