const getRandomNumber = require('../utilities/getRandomNumber');

const tableGrid = async page => {
    try {
        const newTableSize = {
            x: getRandomNumber(1,10),
            y: getRandomNumber(1,10)
        };

        await page.evaluate(newTableSize => {
            const grid = document.getElementsByClassName('table-grid__grid')[0];
            const collection = grid.getElementsByTagName('div');
            for(let i = 0; i < collection.length; i++) {
                if(collection[i].innerText === `${newTableSize.x}x${newTableSize.y}`) {
                    collection[i].click();
                }
            }
        }, newTableSize);

        const correctSize = await page.evaluate(newTableSize => {
            const generatedTableSize = {
                x: document.querySelector('.table-generator__table').getElementsByTagName('tr').length - 1,
                y: document.querySelector('.table-generator__table').getElementsByTagName('tr')[0].getElementsByTagName('td').length - 1
            };
            return newTableSize.x === generatedTableSize.x && newTableSize.y === generatedTableSize.y
        }, newTableSize)

        let error = false;
        if(!correctSize) error = true;
        if(error) {
            return 'Grid test failure'
        } else return 'Grid test passed'

    } catch (e) {
        console.error('Testing grid failure.' +
            'Grid is not working correctly.' +
            'Error msg:', e)
    }
};

module.exports = tableGrid;
