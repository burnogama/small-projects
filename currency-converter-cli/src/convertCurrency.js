import { getRates } from "./queryHelper.js";

import { rl } from "../app.js";

const rates = await getRates();

export async function convertCurrency(base, currency, amount) {
    let currencyConverted = "";

    //convert chosen currency to EUR (2 decimals and convert to float)
    let newBase = 1 / rates[base];

    if (base === currency) {
        newBase = amount;
        currencyConverted = amount;
    } else if (base === "eur") {
        currencyConverted = rates[currency] * amount;
    } else if (currency === "eur") {
        currencyConverted = newBase * amount;
    } else {
        //Convert amount in EUR to new currency and multiply amount to convert
        currencyConverted = newBase * rates[currency] * amount;
    }

    console.clear();
    console.log(`The current rate is ${newBase}`);
    console.log("------------------------------------------------\n");
    console.log(`For ${amount} ${base.toUpperCase()} you will get ${currencyConverted} ${currency.toUpperCase()}\n`);
    console.log("------------------------------------------------\n");
    console.log("What would you like to do next?");
    console.log("1 - Make another conversion");
    console.log("2 - Exit\n");
}

export async function printOptions(startApp) {
    let answer = await rl.question("Choose one to continue... ");

    switch (answer) {
        case "1":
            startApp();
            break;
        case "2": {
            console.clear();
            rl.close();
            process.exit(0);
        }
        default: {
            console.log("Invalid option, try again...");
            printResult();
        }
    }
}
