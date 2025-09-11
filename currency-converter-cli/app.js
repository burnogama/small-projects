import "dotenv/config";
import { storeRates, getRates } from "./queyHelper.js";

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

await storeRates();

const rates = await getRates();

async function startApp() {
    console.clear();
    console.log("Welcome to the currency converter in your command line!");
    console.log("These are the currencies we support so far: ");
    console.log("-----------------------------------------");
    console.log("(USD) - United States Dollar");
    console.log("(GBP) - Great British Pound ");
    console.log("(JPY) - Japanese Yen");
    console.log("(AUD) - Australian Dollar");
    console.log("(CHF) - Swiss Francs");
    console.log("(CAD) - Canadian Dollar");
    console.log("(CNY) - Chinese Yuan");
    console.log("-----------------------------------------");
    const amount = await rl.question("How much EUR would you like to convert? ");
    const currency = (await rl.question("What currency would like to convert to? ")).toLowerCase();

    convertCurrency(currency, amount);

    rl.close();
}

function convertCurrency(currency, amount) {
    const currentRate = rates[currency];
    const exchangeValue = currentRate * amount;

    console.clear();
    console.log(`The current rate is ${currentRate}`);
    console.log("------------------------------------------------");
    console.log(`For ${amount} EUR you will get ${exchangeValue} ${currency}\n`);
}
startApp();
