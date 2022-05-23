const path = require('path');
const puppeteer = require("puppeteer");
const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
}

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('UIB - Grid Layout', () => {
    it("Index file should contain appropriate meta tags", async () => {
        const metaTags = await page.$$('meta');
        expect(metaTags.length).toBeGreaterThan(1);
    });
    it("Index file Should contain a title tag that is not empty", async () => {
        const title = await page.$eval('title', el => el.innerHTML);
        expect(title).not.toBe('');
    });
    it("Parent container should have a display of grid", async () => {
        const parentContainer = await page.$eval('.container', el => getComputedStyle(el).display);
        expect(parentContainer).toBe('grid');
    });
    it("Page should be split into 4 grid rows each 175px", async () => {
        const gridRows = await page.$eval('.container', el => getComputedStyle(el).gridTemplateRows);
        expect(gridRows).toBe('175px 175px 175px 175px');
    });
    it("Page should be split into 4 grid columns each 193.5px", async () => {
        const gridColumns = await page.$eval('.container', el => getComputedStyle(el).gridTemplateColumns);
        expect(gridColumns).toBe('193.5px 193.5px 193.5px 193.5px');
    });
    it("Each item on the page should have border property set", async () => {
        const border = await page.$eval('.item', el => getComputedStyle(el).border);
        expect(border).toMatch(/solid.*rgb/);   
    });
    it("Class of '.two' should span to two grid columns", async () => {
        const gridColSpan = await page.$eval('.two', el => getComputedStyle(el).gridColumn);
        expect(gridColSpan).toBe('2 / 4');
    });
    it("Class of '.six' should span to two grid columns", async () => {
        const gridColSpan = await page.$eval('.six', el => getComputedStyle(el).gridColumn);
        expect(gridColSpan).toBe('3 / 5');
    });
     it("Class of '.nine' should span to two grid rows", async () => {
        const gridRowSpan = await page.$eval('.nine', el => getComputedStyle(el).gridRow);
        expect(gridRowSpan).toBe('3 / 5');
    }); 
    it("Class of '.ten' should span to two grid rows", async () => {
        const gridRowSpan = await page.$eval('.ten', el => getComputedStyle(el).gridRow);
        expect(gridRowSpan).toBe('3 / 5');
    }); 
});

