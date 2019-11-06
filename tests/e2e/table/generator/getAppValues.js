const getAppValues = async page => {
    try {
        return await page.evaluate(() => {
            let td;
            const inputValues = [];
            const tr = document.querySelector('.table-generator__table').getElementsByTagName('tr');

            for (let i = 0, l = tr.length; i < l; i++) {
                td = tr[i].getElementsByTagName('td');
                if (i === l - 1) {
                    for (let n = 0, l2 = td.length; n < l2; n++) {
                        if(inputValues[n]) inputValues[n].sum = td[n].innerText.match(/\d+/g, "");
                    }
                } else {
                    inputValues[i] = {};
                    for (let n = 0, l2 = td.length; n < l2; n++) {
                        if (n === l2 - 1) {
                            inputValues[i].average = td[n].innerText.match(/[+-]?\d+(\.\d+)?/g, "");
                        } else {
                            if (!inputValues[i].inputValues) inputValues[i].inputValues = [];
                            inputValues[i].inputValues.push(
                                td[n].getElementsByTagName('input')[0].value
                            )
                        }
                    }
                }
            }
            return inputValues;
        })
    } catch (e) {
        console.error('Testing generator failure.' +
            'getAppValues.js is not working correctly.' +
            'Error msg:', e)
    }
};

module.exports = getAppValues
