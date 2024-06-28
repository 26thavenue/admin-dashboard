import { RootState } from "@/types/redux.types";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";

export const OperationsSlice = createSlice({
  name: "operation",
  initialState: {
    number_ops: {
      isOpen: false,
      emailAddress: "",
      network: ""
    },
  },
  reducers: {
    toggleNumberOpsModal: (
      state,
      action: PayloadAction<{ isOpen: boolean }>
    ) => {
      const { payload } = action;
       state.number_ops = {
         ...state.number_ops,
         ...payload,
       };
     //  return state;
    },
    prefillNumberOpsModal: (state, action) => {
      const { payload } = action;

     state.number_ops = {
        ...state.number_ops,
        ...payload,
        isOpen: true,
      };

     //  return state
    },
  },
});

export const { toggleNumberOpsModal, prefillNumberOpsModal } = OperationsSlice.actions;

export const selectOperationsState = (state: RootState) => state.operations;

export const operationsSelector = createSelector(
  selectOperationsState,
  (operationsState) => operationsState
);

export const useOperationsDispatch = () => useDispatch();

export default OperationsSlice.reducer;
