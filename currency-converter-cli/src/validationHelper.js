function validateCurrency(currency) {
    if (!currency) return false;
    if (currency.length !== 3) return false;
    if (typeof currency !== "string") return false;
    return true;
}

function validateAmount(amount) {
    if (!amount) return false;
    if (typeof amount !== "string") return false;
    return true;
}

export { validateCurrency, validateAmount };
