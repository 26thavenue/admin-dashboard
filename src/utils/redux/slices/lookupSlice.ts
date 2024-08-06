import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { blockType, block, IPaginateParams } from '../../../types/common';
import {
  Iinterest,
  ILookupCountry,
  ILookupState,
  UsernameAvailability,
} from '../../../types/lookup';

type blockTypes = 'lookupCountry';

export interface IlookUpState {
  lookupCountry: blockType<ILookupCountry[]>;
  lookupStates: blockType<ILookupState[]>;
  lookupInterests: blockType<Iinterest[]>;
  lookupUsername: blockType<UsernameAvailability>;
}

const initialState: IlookUpState = {
  lookupCountry: { ...block },
  lookupStates: { ...block },
  lookupInterests: { ...block },
  lookupUsername: { ...block },
};

const lookupSlice = createSlice({
  name: 'lookup',
  initialState,
  reducers: {
    //lookupCountry
    lookupCountry(state, action: PayloadAction<IPaginateParams | undefined>) {
      state.lookupCountry.loading = true;
    },
    lookupCountrySuccess(state, action: PayloadAction<ILookupCountry[]>) {
      state.lookupCountry.loading = false;
      state.lookupCountry.success = true;
      state.lookupCountry.data = action.payload;
    },
    lookupCountryFailed(state, action: PayloadAction<string>) {
      state.lookupCountry.loading = false;
      state.lookupCountry.error = action.payload;
    },

    //lookupStates
    lookupStates(state, action: PayloadAction<string>) {
      state.lookupStates.loading = true;
    },
    lookupStatesSuccess(state, action: PayloadAction<ILookupState[]>) {
      state.lookupStates.loading = false;
      state.lookupStates.success = true;
      state.lookupStates.data = action.payload;
    },
    lookupStatesFailed(state, action: PayloadAction<string>) {
      state.lookupStates.loading = false;
      state.lookupStates.error = action.payload;
    },

    //lookupInterests
    lookupInterests(state, action: PayloadAction<IPaginateParams | undefined>) {
      state.lookupInterests.loading = true;
    },
    lookupInterestsSuccess(state, action: PayloadAction<Iinterest[]>) {
      state.lookupInterests.loading = false;
      state.lookupInterests.success = true;
      state.lookupInterests.data = action.payload;
    },
    lookupInterestsFailed(state, action: PayloadAction<string>) {
      state.lookupInterests.loading = false;
      state.lookupInterests.error = action.payload;
    },

    //lookupUsername
    lookupUsername(state, action: PayloadAction<UsernameAvailability>) {
      state.lookupUsername.loading = true;
    },
    lookupUsernameSuccess(state, action: PayloadAction<UsernameAvailability>) {
      state.lookupUsername.loading = false;
      state.lookupUsername.success = true;
      state.lookupUsername.data = action.payload;
    },
    lookupUsernameFailed(state, action: PayloadAction<string>) {
      state.lookupUsername.loading = false;
      state.lookupUsername.error = action.payload;
    },

    //reset block and Flags
    resetBlockLookup(state, action: PayloadAction<{ blockType: blockTypes }>) {
      return {
        ...state,
        [action.payload.blockType]: {
          ...initialState[action.payload.blockType],
        },
      };
    },
    resetFlagLookup(state) {
      Object.assign(state, initialState);
    },
  },
});

// Actions
export const lookupActions = lookupSlice.actions;
export const {
  lookupCountry,
  lookupInterests,
  lookupUsername,
  lookupStates,
  resetFlagLookup,
} = lookupSlice.actions;

// Reducer
const lookupReducer = lookupSlice.reducer;
export default lookupReducer;