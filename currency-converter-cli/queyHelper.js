import "dotenv/config";
import axios from "axios";

import currency from "./prismaRepository.js";

//Define symbols and get data from API

async function storeRates() {
    const apiData = await axios.get(
        `${process.env.BASE_URL}/latest?access_key=${process.env.ACCESS_API_KEY}&symbols=${process.env.SYMBOLS}`
    );

    const currencyRates = {
        usd: apiData.data.rates.USD,
        gbp: apiData.data.rates.GBP,
        jpy: apiData.data.rates.JPY,
        aud: apiData.data.rates.AUD,
        chf: apiData.data.rates.CHF,
        cad: apiData.data.rates.CAD,
        cny: apiData.data.rates.CNY,
    };

    const result = await currency.create(currencyRates);
}

async function getRates() {
    const lastRates = await currency.getLastRecord();
    const lastRecord = lastRates[0];
    return lastRecord;
}

export { storeRates, getRates };
