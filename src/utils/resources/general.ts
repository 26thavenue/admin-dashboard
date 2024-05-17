import { TRANSACTION_OPERATION } from "../enums/dashboard.enums";
import moment from "moment"

export function CurrencyFormatter(
  amount?: number,
  status?: string,
  currency?: string
) {
  const formattedAmount = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency || "GBP",
  }).format(amount || 0);

  if (status) {
    return `${
      status === TRANSACTION_OPERATION.DEBIT ? "-" : "+"
    } ${formattedAmount}`;
  }
  return formattedAmount;
}


export const FormatDateTime = (value: string, isDate?: string) => {
  let timeDate;

  if (isDate === "calender") {
    timeDate = moment(value).calendar();

    return timeDate;
  }

  timeDate = moment(value).format(isDate || "LL");

  return !value ? "" : timeDate;
};

function redirectUser(urlPath: string, timeout: number) {
  setTimeout(function () {
    return window.location.replace(urlPath);
  }, timeout);
}

export default redirectUser;

export const GetLocalStorage = (params: string) => {
  const value = JSON.parse(localStorage.getItem(params || "user") as string);
  return value;
};

export function checkVerifications(array: string[], string: string): boolean {
  const arr = array || []
  console.log({ array, string });
  return arr?.includes(string);
}
