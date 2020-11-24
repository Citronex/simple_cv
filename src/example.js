const puppeteer = require('puppeteer');

    // eslint-disable-next-line no-unused-expressions
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://192.168.1.5:3000', {waitUntil: 'networkidle2'});
        await page.pdf({ path: 'cv.pdf', format: "Letter" })

        await browser.close();
    })();
