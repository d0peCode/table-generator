const tableTool = async page => {
    try {
        const selector = '.table-tool__manager > p';
        const getCurrentSize = async () => {
            return {
                x: await page.evaluate(selector => (
                    document.querySelector(selector).innerText.match(/\d+/)[0]
                ), selector),
                y: await page.evaluate(selector => (
                    document.querySelector(selector).innerText.match(/\d+/)[0]
                ), selector)
            };
        };
        const currentSize = await getCurrentSize();
        let error = false;
        await page.evaluate(() => ( document.querySelectorAll('.table-tool__plus')[0].click() ))
        currentSize.x++;
        if(){}

    } catch (e) {
        console.error('Testing tool failure.' +
            'Tool is not working correctly.' +
            'Error msg:', e)
    }


};

module.exports = tableTool;
