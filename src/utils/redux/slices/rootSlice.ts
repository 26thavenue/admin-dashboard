
import communitiesReducer from './communitySlice';
import newReducer from './new.slice'
import lookupReducer from './lookupSlice';
import resourceReducer from './resourceSlice';
import ResourceSlice from "./resource.slice";

export const rootSlice = {
  lookup: lookupReducer,
  communities: communitiesReducer,
  resources: resourceReducer,
  new: newReducer,
  resource: ResourceSlice
};
