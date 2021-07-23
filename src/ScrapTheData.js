export default async function scrapData() {
    const request = require("request");
    const cheerio = require("cheerio");

    request("https://www.ikea.co.il/catalogue/Workspaces", (error,response, html) => {
        if(!error && response.statusCode === 200) {
        console.log(html);
        }
    });
}