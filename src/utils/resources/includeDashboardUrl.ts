import { URLs } from "../enums";

export const includeDashboardUrl = (data: string) => {
  return `${URLs.Dashboard}/${data}`;
};
