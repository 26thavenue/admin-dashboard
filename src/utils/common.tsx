// // import { notifySuccess } from 'components/shared/toast';
// // import { ReadonlyURLSearchParams } from 'next/navigation';
// import {
//   formatPhoneNumber,
//   formatPhoneNumberIntl,
//   getCountryCallingCode,
//   parsePhoneNumber,
// } from 'react-phone-number-input';
// import dayjs from 'dayjs';
// import utc from 'dayjs/plugin/utc';
// import timezone from 'dayjs/plugin/timezone';
// import { format } from 'date-fns';
// import { toZonedTime } from 'date-fns-tz';

export const cellType = {
  STRING: 'string',
  DOUBLE_STRING: 'double-string',
  ACTION: 'action',
  IMAGE: 'image',
  STRING_BOLD: 'string-bold',
  STRING_BADGE: 'string-badge',
  BADGE: 'badge',
  SELECTION: 'selection',
  DOTTED_BADGE: 'dotted-badge',
  EXPANDER: 'expander',
};

export const capitalizeString = (str?: string): string => {
  if (!str) return '';

  return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
};

// export interface timeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// export const calculateTimeLeft = (otp: any) => {
//   const difference = +otp - new Date().getTime();
//   let timeLeft: timeLeft | Record<string, never> = {};

//   if (difference > 0) {
//     timeLeft = {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / 1000 / 60) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//     };
//   }

//   return timeLeft;
// };

export const dateTimeFormat = (dateTimeStamp: Date, timeStyle?: boolean) => {
  let dateTimeFormat;
  const date = new Date(dateTimeStamp);
  const dateOption: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const timeOption: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  if (timeStyle)
    dateTimeFormat = date.toLocaleDateString('en-US', {
      ...dateOption,
      ...timeOption,
    });
  else dateTimeFormat = date.toLocaleDateString('en-US', dateOption);

  return dateTimeFormat;
};

// export const formatTime = (seconds: number) => {
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = Math.round(seconds % 60); // Round to the nearest whole number

//   const formattedTime = [
//     hours.toString().padStart(2, '0'),
//     minutes.toString().padStart(2, '0'),
//     remainingSeconds.toString().padStart(2, '0'),
//   ].join(':');

//   return formattedTime;
// };

// export const getInitails = (name: string) => {
//   if (!name) return '';
//   const splitName = name?.split(' ');

//   return splitName?.length > 1
//     ? `${splitName[0]?.charAt(0)?.toUpperCase()}${splitName[1]
//         ?.charAt(0)
//         ?.toUpperCase()}`
//     : `${name?.charAt(0)?.toUpperCase()}`;
// };

export const truncateText = (text: string, start: number, end: number) => {
  return text?.length > end ? `${text?.substr(start, end)}...` : text;
};

// export const getPhoneNumber = (phone_number: string) => {
//   const iso = parsePhoneNumber(formatPhoneNumberIntl(phone_number));
//   const countryCode = getCountryCallingCode(iso?.country as any);
//   const localFormat = formatPhoneNumber(phone_number);

//   return { countryCode, localFormat };
// };
export const getStatus = (name?: string) => {
  switch (name?.toLowerCase()) {
    case 'verified':
    case 'successful':
    case 'completed':
    case 'success':
    case 'active':
    case 'approved':
    case 'paid':
    case 'resolved':
      return 'success';
    case 'unverified':
    case 'pending':
    case 'part payment':
    case 'inactive':
    case 'deactivated':
    case 'processing':
    case 'unresolved':
      return 'processing';
    case 'failed':
    case 'declined':
    case 'deleted':
    case 'outstanding':
      return 'failed';
    case 'initiated':
    case 'logged':
    case 'invited':
      return 'inactive';
  }
};

// export const byteConverter = (bytes: number) => {
//   const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
//   let i = 0;
//   for (i; bytes > 1024; i++) {
//     bytes /= 1024;
//   }
//   return bytes.toFixed(1) + ' ' + units[i];
// };

// export const getCurrency: any = {
//   EUR: '€',
//   ZAR: 'R',
//   USD: '$',
//   UGX: 'UGX',
//   RWF: 'RF',
//   NGN: 'NGN',
//   KES: 'K',
//   GHS: 'GH¢',
// };

// export const sortAscending = <T, K extends keyof T>(
//   arrObject?: T[],
//   key?: K
// ) => {
//   if (arrObject && key)
//     return [...arrObject].sort((a, b) => (a[key] > b[key] ? 1 : -1));
//   return [];
// };
// export const removeSpaces = (str: string) => {
//   return str.replace(/\s/g, '');
// };

// export const createQueryString = (
//   name: string,
//   value: string,
//   searchParams: ReadonlyURLSearchParams
// ) => {
//   const params = new URLSearchParams(searchParams ?? '');
//   params.set(name, value);

//   return params.toString();
// };

export function toBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      // Extract the Base64-encoded string portion
      const base64Data = (reader.result as string).split(',')[1];
      resolve({ base64: base64Data, file: reader.result });
    };

    reader.onerror = error => reject(error);
  });
}
// export const copyText = async (str: string) => {
//   if ('clipboard' in navigator) {
//     await navigator.clipboard.writeText(str);
//     notifySuccess('Copied', '');
//   }
// };

export const getInitialKey = (location: Location): string => {
  const locationArray = location.pathname.split('/');
  return locationArray[locationArray.length - 1];
};

export const findKeyNumber = (string: string) => {
  return string.substr(string.length - 1).charCodeAt(0);
};

// dayjs.extend(utc);
// dayjs.extend(timezone);

// export const convertToDateObject = (inputDate: string): string => {
//   // Parse the input date
//   if (!inputDate) return '';
//   const parsedDate = new Date(inputDate);
//   // Convert to West Africa Standard Time (WAT)
//   const zonedDate = toZonedTime(parsedDate, 'Africa/Lagos');

//   // Format the date in the desired format
//   const formattedDate = format(
//     zonedDate,
//     "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX (z)"
//   );

//   return formattedDate;
// };