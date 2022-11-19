
var express = require("express");
var router = express.Router();


const puppeteer = require("puppeteer-extra");
const {executablePath} = require('puppeteer')
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());




async function run(){
    const browser = await puppeteer.launch({
        headless:false,
        executablePath: executablePath()
    })
    const page = await browser.newPage()
    
    await page.goto('https://www.youtube.com/watch?v=pM_Rx2Zjqhs');
    await page.waitForTimeout(5000);
    console.log("got here");
    await page.keyboard.press("PageDown");
    console.log("did first down");
    await page.waitForTimeout(5000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("PageDown");

    const comments = await page.$$("yt-formatted-string.style-scope.ytd-comment-renderer");
    console.log("Length is: ",comments.length)
    for (let i = 0; i < comments.length; i++) {
            const element = comments[i];
            const element_text = await page.evaluate(element => element.textContent, element)
            console.log(element_text)
        }

    //press Enter

    // const elements = await page.$$("div");
    // for (let i = 0; i < elements.length; i++) {
    //     const element = elements[i];
    //     const element_text = await page.evaluate(element => element.textContent, element)
    //     console.log(element_text)
    // }
    // browser.close()
    
}


run()


// async function getText(){
//    //launch browser in headless mode
//    const browser = await pt.launch()
//    //browser new page
//    const page = await browser.newPage()
//    //launch URL
//    await page.goto('https://www.tutorialspoint.com/about/about_careers.htm')
//    //identify element
//    const f = await page.$("[class='heading']")
//    //obtain text
//    const text = await (await f.getProperty('textContent')).jsonValue()

//    if(text)
//    {
//             router.get("/", function(req, res, next) {
//             res.json({
//                 t: text
//             });
//             });
//    }
   
   
// }

// getText();


// router.get("/", function(req, res, next) {
//     res.send("Hello world");
// });

module.exports = router;

