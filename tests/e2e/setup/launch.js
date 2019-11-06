const puppeteer = require('puppeteer');
const resolution = require('screen-resolution');

const launch = async () => {
    try {
        const screenResolution = await resolution.get();
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: false,
            args: [
                `--window-size=${ screenResolution.width },${ screenResolution.height - 50 }`,
                '--window-position=0,10'
            ]
        });
        const page = await browser.newPage();
        return { page, browser }
    } catch (e) {
        console.error('Error while launching puppeteer!' +
            'Error msg:', e);
    }
};

module.exports = launch
