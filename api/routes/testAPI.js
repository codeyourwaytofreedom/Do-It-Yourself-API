
var express = require("express");
var router = express.Router();

const app = express();
const bodyParser = require("body-parser")


var jsonParser = bodyParser.json()


const puppeteer = require("puppeteer-extra");
const {executablePath} = require('puppeteer')
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());


router.post("/",jsonParser, function(req, res) {
    console.log(req.body.url)
    async function run(){
        const browser = await puppeteer.launch({
            headless:false,
            executablePath: executablePath()
        })
        const page = await browser.newPage()
        
        await page.goto(req.body.url);
        await page.waitForTimeout(5000);    

        for (let index = 0; index < 50; index++) {
            await page.keyboard.press("PageDown");
            await page.waitForTimeout(500);
        }
   

        const comments = await page.$$("#content-text");
        console.log("Length is: ",comments.length)
        let fin = []
        for (let i = 0; i < comments.length; i++) {
                const element = comments[i];
                const element_text = await page.evaluate(element => element.textContent, element)
                console.log(element_text);
                fin.push({"comment":element_text})
            }   
            
        res.send(fin);
            
        browser.close()
    }
    run();
});


async function run(){
    const browser = await puppeteer.launch({
        headless:false,
        executablePath: executablePath()
    })
    const page = await browser.newPage()
    
    await page.goto('https://www.youtube.com/watch?v=pM_Rx2Zjqhs');
    await page.waitForTimeout(5000);

    for (let index = 0; index < 50; index++) {
            await page.keyboard.press("PageDown");
            await page.waitForTimeout(500);
        }
   

    const comments = await page.$$("#content-text");
    console.log("Length is: ",comments.length)
    let fin = []
    for (let i = 0; i < comments.length; i++) {
            const element = comments[i];
            const element_text = await page.evaluate(element => element.textContent, element)
            console.log(element_text);
            fin.push({"comment":element_text})
        }   
        router.get("/", function(req, res, next) {
            res.send(fin);
        });
    browser.close()

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

