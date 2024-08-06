import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { block, blockType, IpaginateData, IPaginateParams } from '../../../types/common';
import { IgetOriginalsResource } from '../../../types/resources';

type blockTypes =
  | 'getResource'
  | 'addResource'
  | 'updateResource'
  | 'deleteResource';

export interface IResourceState {
  getResource: blockType<IgetOriginalsResource[]>;
  addResource: blockType;
  updateResource: blockType;
  getSingleResource: blockType;
  deleteResource: blockType;
  getOriginalsResource: blockType;
  getOriginalsResourceSlide: blockType<IgetOriginalsResource[]>;
  getSingleOriginalsResource: blockType<IgetOriginalsResource[]>;
}

const initialState: IResourceState = {
  getResource: { ...block },
  addResource: { ...block },
  updateResource: { ...block },
  getSingleResource: { ...block },
  deleteResource: { ...block },
  getOriginalsResource: { ...block },
  getOriginalsResourceSlide: { ...block },
  getSingleOriginalsResource: { ...block },
};

const resourceSlice = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    //getResource
    getResource(state, action: PayloadAction<IPaginateParams | undefined>) {
      state.getResource.loading = true;
    },
    getResourceSuccess(
      state,
      action: PayloadAction<{
        data: any[];
        paginationData: IpaginateData;
      }>
    ) {
      state.getResource.loading = false;
      state.getResource.success = true;
      state.getResource.data = action.payload.data;
      state.getResource.paginationData = action.payload.paginationData;
    },
    getResourceFailed(state, action: PayloadAction<string>) {
      state.getResource.loading = false;
      state.getResource.error = action.payload;
    },

    //addResource
    addResource(state, action: PayloadAction<any>) {
      state.addResource.loading = true;
    },
    addResourceSuccess(state) {
      state.addResource.loading = false;
      state.addResource.success = true;
    },
    addResourceFailed(state, action: PayloadAction<string>) {
      state.addResource.loading = false;
      state.addResource.error = action.payload;
    },

    //updateResource
    updateResource(state, action: PayloadAction<any>) {
      state.updateResource.loading = true;
    },
    updateResourceSuccess(state) {
      state.updateResource.loading = false;
      state.updateResource.success = true;
    },

    updateResourceFailed(state, action: PayloadAction<string>) {
      state.updateResource.loading = false;
      state.updateResource.error = action.payload;
    },

    //getSingleResource
    getSingleResource(state, action: PayloadAction<any>) {
      state.getSingleResource.loading = true;
    },
    getSingleResourceSuccess(state, action: PayloadAction<any>) {
      state.getSingleResource.loading = false;
      state.getSingleResource.success = true;
      state.getSingleResource.data = action.payload;
    },

    getSingleResourceFailed(state, action: PayloadAction<string>) {
      state.getSingleResource.loading = false;
      state.getSingleResource.error = action.payload;
    },

    //deleteResource
    deleteResource(state, action: PayloadAction<any>) {
      state.deleteResource.loading = true;
    },

    deleteResourceSuccess(state) {
      state.deleteResource.loading = false;
      state.deleteResource.success = true;
    },

    deleteResourceFailed(state, action: PayloadAction<string>) {
      state.deleteResource.loading = false;
      state.deleteResource.error = action.payload;
    },

    //getOriginalsResource
    getOriginalsResource(
      state,
      action: PayloadAction<IPaginateParams | undefined>
    ) {
      state.getOriginalsResource.loading = true;
    },
    getOriginalsResourceSuccess(
      state,
      action: PayloadAction<{
        data: any[];
        paginationData: IpaginateData;
      }>
    ) {
      state.getOriginalsResource.loading = false;
      state.getOriginalsResource.success = true;
      state.getOriginalsResource.data = action.payload.data;
      state.getOriginalsResource.paginationData = action.payload.paginationData;
    },
    getOriginalsResourceFailed(state, action: PayloadAction<string>) {
      state.getOriginalsResource.loading = false;
      state.getOriginalsResource.error = action.payload;
    },

    //getOriginalsResourceSlide
    getOriginalsResourceSlide(
      state,
      action: PayloadAction<IPaginateParams | undefined>
    ) {
      state.getOriginalsResourceSlide.loading = true;
    },
    getOriginalsResourceSlideSuccess(state, action: PayloadAction<any[]>) {
      state.getOriginalsResourceSlide.loading = false;
      state.getOriginalsResourceSlide.success = true;
      state.getOriginalsResourceSlide.data = action.payload;
    },
    getOriginalsResourceSlideFailed(state, action: PayloadAction<string>) {
      state.getOriginalsResourceSlide.loading = false;
      state.getOriginalsResourceSlide.error = action.payload;
    },

    //getSingleOriginalsResource
    getSingleOriginalsResource(state, action: PayloadAction<string>) {
      state.getSingleOriginalsResource.loading = true;
    },
    getSingleOriginalsResourceSuccess(state, action: PayloadAction<any>) {
      state.getSingleOriginalsResource.loading = false;
      state.getSingleOriginalsResource.success = true;
      state.getSingleOriginalsResource.data = action.payload;
    },
    getSingleOriginalsResourceFailed(state, action: PayloadAction<string>) {
      state.getSingleOriginalsResource.loading = false;
      state.getSingleOriginalsResource.error = action.payload;
    },

    //reset block and Flags
    resetBlockResource(
      state,
      action: PayloadAction<{ blockType: blockTypes }>
    ) {
      return {
        ...state,
        [action.payload.blockType]: {
          ...initialState[action.payload.blockType],
        },
      };
    },
    resetFlagResource(state) {
      Object.assign(state, initialState);
    },
  },
});

// Actions
export const resourceActions = resourceSlice.actions;
export const {
  getResource,
  getOriginalsResource,
  getOriginalsResourceSlide,
  getSingleResource,
  addResource,
  updateResource,
  deleteResource,
  resetFlagResource,
  getSingleOriginalsResource,
} = resourceSlice.actions;

// Reducer
const resourceReducer = resourceSlice.reducer;
export default resourceReducer;