import currency from "currency.js";

export const formatToDollarCurrency = value =>
  currency(value, { separator: ",", formatWithSymbol: true }).format();
