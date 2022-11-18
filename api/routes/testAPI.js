
var express = require("express");
var router = express.Router();


const pt= require('puppeteer');

async function run(){
    const browser = await pt.launch()
    const page = await browser.newPage()
    await page.goto('https://www.youtube.com/watch?v=7aPzchOkxXk')

    const elements = await page.$$("div");
    elements.forEach(async element => {
	const text = await (await element.getProperty("textContent")).jsonValue();
	console.log(text);
});
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

