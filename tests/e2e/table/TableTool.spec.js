const tableTool = async page => {
    try {
        const selector = '.table-tool__manager > p';
        const getCurrentSize = async () => {
            return {
                x: await page.evaluate(selector => (
                    document.querySelector(selector).innerText.match(/\d+/g)[0]
                ), selector),
                y: await page.evaluate(selector => (
                    document.querySelector(selector).innerText.match(/\d+/g)[1]
                ), selector)
            };
        };
        const previousSize = await getCurrentSize();
        await page.evaluate(() => ( document.querySelectorAll('.table-tool__plus')[0].click() ))
        await page.evaluate(() => ( document.querySelectorAll('.table-tool__plus')[1].click() ))
        const currentSize = await getCurrentSize();
        if(
            parseInt(currentSize.x) === parseInt(previousSize.x) + 1
            && parseInt(currentSize.y) === parseInt(previousSize.y) + 1
        ) {
            return 'Tool test passed'
        } else {
            return 'Tool test failure'
        }
    } catch (e) {
        console.error('Testing tool failure.' +
            'Tool is not working correctly.' +
            'Error msg:', e)
    }
};

module.exports = tableTool;
