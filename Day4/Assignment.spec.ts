
import { chromium, test } from "@playwright/test";

test('launching a red bus', async()=>
{
let browser = await chromium.launch({channel:'msedge'})
let context = await browser.newContext()
let page = await context.newPage()
await page.goto("https://www.redbus.in")
 console.log(page.url());
 const title = await page.title()
console.log(title);
}
)


//import { chromium, test } from "@playwright/test";

test.only('launching a Flipkart', async()=>
{
let browser = await chromium.launch({channel:'msedge'})
let context = await browser.newContext()
let page = await context.newPage()
await page.goto("https://www.flipkart.com/")
 console.log(page.url());
 const title = await page.title()
console.log(title);
}
)

