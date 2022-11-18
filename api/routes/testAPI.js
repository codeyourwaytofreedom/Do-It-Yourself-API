
var express = require("express");
var router = express.Router();


const pt= require('puppeteer');

async function getText(){
   //launch browser in headless mode
   const browser = await pt.launch()
   //browser new page
   const page = await browser.newPage()
   //launch URL
   await page.goto('https://www.tutorialspoint.com/about/about_careers.htm')
   //identify element
   const f = await page.$("[class='heading']")
   //obtain text
   const text = await (await f.getProperty('textContent')).jsonValue()

   if(text)
   {
            router.get("/", function(req, res, next) {
            res.json({
                t: text
            });
            });
   }
   
   
}

getText();


// router.get("/", function(req, res, next) {
//     res.send("Hello world");
// });

module.exports = router;

