
var express = require("express");
var router = express.Router();


const pt= require('puppeteer');

async function run(){
    const browser = await pt.launch({headless:false})
    const page = await browser.newPage()
    
    await page.goto('https://tr.wikipedia.org/wiki/Twitter')
    await page.keyboard.press('End');
    
    const elements = await page.$$("td");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const element_text = await page.evaluate(element => element.textContent, element)
        console.log(element_text)
    }
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

