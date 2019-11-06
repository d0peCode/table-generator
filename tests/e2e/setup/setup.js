const resolution = require('screen-resolution');

const setup = async ( page, browser ) => {
    try {
        const screenResolution = await resolution.get();
        await page.setViewport({
            width: screenResolution.width,
            height: screenResolution.height - 50
        });
        await page.goto('http://localhost:8080', {
            waitUntil: 'networkidle0'
        });
        const pages = await browser.pages();
        await pages[0].close();
    } catch (e) {
        console.error('Error with opening application on port :8080. \n' +
            'Application is either not served or is running on different port.');
    }
};

module.exports = setup
