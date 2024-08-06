import { createSlice , PayloadAction  } from '@reduxjs/toolkit';
import { ResourceApi } from '../reducers/resource.reducers';

interface ResourceState {
  resources: any[];
  status: string;
  error: string | null | undefined;
}

const initialState: ResourceState = {
  resources: [],
  status: '',
  error: null ,
};

const resourceSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      // GET all resources
      .addMatcher(ResourceApi.endpoints.getResource.matchPending, (state) => {
        state.status = 'loading';
      })
      .addMatcher(ResourceApi.endpoints.getResource.matchFulfilled, (state, action) => {
        state.status = 'succeeded';
        state.resources = action.payload;
      })
      .addMatcher(ResourceApi.endpoints.getResource.matchRejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addMatcher(ResourceApi.endpoints.addResource.matchFulfilled, (state, action) => {
        state.resources.push(action.payload);
      })
      // UPDATE resource
      .addMatcher(ResourceApi.endpoints.updateResource.matchFulfilled, (state, action) => {
        const index = state.resources.findIndex(resource => resource.id === action.payload.id);
        if (index !== -1) {
          state.resources[index] = action.payload;
        }
      })
      // DELETE resource
      .addMatcher(ResourceApi.endpoints.deleteResource.matchFulfilled, (state, action) => {
        state.resources = state.resources.filter(resource => resource.id !== action.payload);
      });

       },
});

export default resourceSlice.reducer;

