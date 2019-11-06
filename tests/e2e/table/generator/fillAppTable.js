const fillAppTable = async page => {
    try {
        await page.evaluate(() => {
            const tr = document.querySelector('.table-generator__table').getElementsByTagName('tr');
            let td, input;
            const event = document.createEvent("HTMLEvents");
            event.initEvent("input", true, true);
            event.eventName = "input";
            for(let i = 0, l = tr.length; i < l; i++) {
                td = tr[i].getElementsByTagName('td');
                for(let n = 0, l2 = td.length; n < l2; n++) {
                    input = td[n].getElementsByTagName('input')[0];
                    if(input) {
                        input.value = getRandomNumber(1,10);
                        input.dispatchEvent(event);
                    }
                }
            }
        });
    } catch (e) {
        console.error('Testing generator failure.' +
            'fillAppTable.js is not working correctly.' +
            'Error msg:', e)
    }
};

module.exports = fillAppTable;
