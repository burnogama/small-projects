import "dotenv/config";
import { storeRates } from "./src/queryHelper.js";
import printMenu from "./src/printMenu.js";
import { validateAmount, validateCurrency } from "./src/validationHelper.js";
import convertCurrency from "./src/convertCurrency.js";

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export const rl = readline.createInterface({ input, output });

//await storeRates();

async function getAnswer(question, errorMessage, validateFunction) {
    let answer = "";
    do {
        answer = (await rl.question(question)).trim().toLowerCase();
        if (!validateFunction) console.log(errorMessage);
    } while (!validateFunction(answer));

    return answer;
}

async function startApp() {
    printMenu();

    const base = await getAnswer(
        "What currency would you like to convert? ",
        "Invalid currency, try again.",
        validateCurrency
    );
    const currency = await getAnswer(
        "What currency would like to convert to? ",
        "Invalid currency, try again.",
        validateCurrency
    );

    const amount = await getAnswer(
        "How much would you like to convert? ",
        "Invalid currency, try again.",
        validateAmount
    );

    convertCurrency(base, currency, amount);
}

startApp();
