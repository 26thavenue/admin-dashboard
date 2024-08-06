export interface ILookupCountry {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
}

export interface ILookupState {
  stateId: number;
  name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  state_code: string;
}

export interface UsernameAvailability {
  usernameIsAvailable?: string;
  username?: string;
}

export interface Iinterest {
  name: string;
  id: string;
}