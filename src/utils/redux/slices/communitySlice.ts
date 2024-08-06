import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { block, blockType, IpaginateData, IPaginateParams } from '../../../types/common';
import {
  IcomunityRequest,
  IcreateCommunity,
  IcreateGist,
  IgetCommunity,
  IgetGist,
} from '../../../types/communities';

type blockTypes =
  | 'createCommunity'
  | 'updateCommunity'
  | 'assignCommunityAdmin'
  | 'joinCommunityRequest'
  | 'approveCommunityRequest'
  | 'createGist'
  | 'deleteGist'
  | 'updateGist'
  | 'addComment'
  | 'addReplies'
  | 'deleteComment'
  | 'getGistbyId'
  | 'getRepliesById'
  | 'getCommunitybyId'
  | 'editComment'
  | 'likeAndUnlike';

export interface ICommunitiesState {
  getCommunities: blockType<IgetCommunity[]>;
  createCommunity: blockType;
  updateCommunity: blockType;
  assignCommunityAdmin: blockType;
  getCommunitybyId: blockType<IgetCommunity>;
  getCommunitybyIdPreview: blockType<IgetCommunity>;
  joinCommunityRequest: blockType;
  approveCommunityRequest: blockType;
  createGist: blockType;
  getGistbyId: blockType<IgetGist[]>;
  getGistbyIdPreview: blockType<IgetGist[]>;
  deleteGist: blockType;
  updateGist: blockType;
  addComment: blockType;
  deleteComment: blockType;
  addReplies: blockType;
  getRepliesById: blockType<IgetGist['comments']>;
  editComment: blockType;
  likeAndUnlike: blockType;
}

const initialState: ICommunitiesState = {
  getCommunities: { ...block },
  createCommunity: { ...block },
  updateCommunity: { ...block },
  assignCommunityAdmin: { ...block },
  getCommunitybyId: { ...block },
  getCommunitybyIdPreview: { ...block },
  joinCommunityRequest: { ...block },
  approveCommunityRequest: { ...block },
  createGist: { ...block },
  getGistbyId: { ...block },
  getGistbyIdPreview: { ...block },
  deleteGist: { ...block },
  updateGist: { ...block },
  addComment: { ...block },
  deleteComment: { ...block },
  addReplies: { ...block },
  getRepliesById: { ...block },
  editComment: { ...block },
  likeAndUnlike: { ...block },
};

const communitiesSlice = createSlice({
  name: 'communities',
  initialState,
  reducers: {
    //getCommunities
    getCommunities(state, action: PayloadAction<IPaginateParams | undefined>) {
      state.getCommunities.loading = !!action?.type;
    },
    getCommunitiesSuccess(
      state,
      action: PayloadAction<{
        data: IgetCommunity[];
        paginationData: IpaginateData;
      }>
    ) {
      state.getCommunities.loading = false;
      state.getCommunities.success = true;
      state.getCommunities.data = action.payload.data;
      state.getCommunities.paginationData = action.payload.paginationData;
    },
    getCommunitiesFailed(state, action: PayloadAction<string>) {
      state.getCommunities.loading = false;
      state.getCommunities.error = action.payload;
    },

    //createCommunity
    createCommunity(state, action: PayloadAction<IcreateCommunity>) {
      state.createCommunity.loading = !!action.type;
    },
    createCommunitySuccess(state) {
      state.createCommunity.loading = false;
      state.createCommunity.success = true;
    },
    createCommunityFailed(state, action: PayloadAction<string>) {
      state.createCommunity.loading = false;
      state.createCommunity.error = action.payload;
    },

    //updateCommunity
    updateCommunity(state, action: PayloadAction<any>) {
      state.updateCommunity.loading = !!action.type;
    },
    updateCommunitySuccess(state) {
      state.updateCommunity.loading = false;
      state.updateCommunity.success = true;
    },
    updateCommunityFailed(state, action: PayloadAction<string>) {
      state.updateCommunity.loading = false;
      state.updateCommunity.error = action.payload;
    },

    //assignCommunityAdmin
    assignCommunityAdmin(state, action: PayloadAction<any>) {
      state.assignCommunityAdmin.loading = !!action.type;
    },
    assignCommunityAdminSuccess(state) {
      state.assignCommunityAdmin.loading = false;
      state.assignCommunityAdmin.success = true;
    },
    assignCommunityAdminFailed(state, action: PayloadAction<string>) {
      state.assignCommunityAdmin.loading = false;
      state.assignCommunityAdmin.error = action.payload;
    },

    //getCommunitybyId
    getCommunitybyId(state, action: PayloadAction<string>) {
      state.getCommunitybyId.loading = !!action.type;
    },
    getCommunitybyIdSuccess(state, action: PayloadAction<IgetCommunity>) {
      state.getCommunitybyId.loading = false;
      state.getCommunitybyId.success = true;
      state.getCommunitybyId.data = action.payload;
    },
    getCommunitybyIdFailed(state, action: PayloadAction<string>) {
      state.getCommunitybyId.loading = false;
      state.getCommunitybyId.error = action.payload;
    },

    //getCommunitybyIdPreview
    getCommunitybyIdPreview(state, action: PayloadAction<string>) {
      state.getCommunitybyIdPreview.loading = !!action.type;
    },
    getCommunitybyIdPreviewSuccess(
      state,
      action: PayloadAction<IgetCommunity>
    ) {
      state.getCommunitybyIdPreview.loading = false;
      state.getCommunitybyIdPreview.success = true;
      state.getCommunitybyIdPreview.data = action.payload;
    },
    getCommunitybyIdPreviewFailed(state, action: PayloadAction<string>) {
      state.getCommunitybyIdPreview.loading = false;
      state.getCommunitybyIdPreview.error = action.payload;
    },

    //joinCommunityRequest
    joinCommunityRequest(state, action: PayloadAction<IcomunityRequest>) {
      state.joinCommunityRequest.loading = !!action.type;
    },
    joinCommunityRequestSuccess(state) {
      state.joinCommunityRequest.loading = false;
      state.joinCommunityRequest.success = true;
    },
    joinCommunityRequestFailed(state, action: PayloadAction<string>) {
      state.joinCommunityRequest.loading = false;
      state.joinCommunityRequest.error = action.payload;
    },

    //approveCommunityRequest
    approveCommunityRequest(state, action: PayloadAction<IcomunityRequest>) {
      state.approveCommunityRequest.loading = !!action.type;
    },
    approveCommunityRequestSuccess(state) {
      state.approveCommunityRequest.loading = false;
      state.approveCommunityRequest.success = true;
    },
    approveCommunityRequestFailed(state, action: PayloadAction<string>) {
      state.approveCommunityRequest.loading = false;
      state.approveCommunityRequest.error = action.payload;
    },

    //createGist
    createGist(state, action: PayloadAction<IcreateGist>) {
      state.createGist.loading = !!action.type;
    },
    createGistSuccess(state) {
      state.createGist.loading = false;
      state.createGist.success = true;
    },
    createGistFailed(state, action: PayloadAction<string>) {
      state.createGist.loading = false;
      state.createGist.error = action.payload;
    },

    //getGistbyId
    getGistbyId(state, action: PayloadAction<IPaginateParams>) {
      state.getGistbyId.loading = true;
    },

    getGistbyIdSuccess(
      state,
      action: PayloadAction<{
        data: IgetGist[];
        paginationData: IpaginateData;
      }>
    ) {
      state.getGistbyId.loading = false;
      state.getGistbyId.success = true;
      state.getGistbyId.data = action.payload.data;
      state.getGistbyId.paginationData = action.payload.paginationData;
    },

    getGistbyIdFailed(state, action: PayloadAction<string>) {
      state.getGistbyId.loading = false;
      state.getGistbyId.error = action.payload;
    },

    //getGistbyId
    getGistbyIdPreview(state, action: PayloadAction<IPaginateParams>) {
      state.getGistbyIdPreview.loading = !!action.type;
    },
    getGistbyIdPreviewSuccess(
      state,
      action: PayloadAction<{
        data: IgetGist[];
        paginationData: IpaginateData;
      }>
    ) {
      state.getGistbyIdPreview.loading = false;
      state.getGistbyIdPreview.success = true;
      state.getGistbyIdPreview.data = action.payload.data;
      state.getGistbyIdPreview.paginationData = action.payload.paginationData;
    },
    getGistbyIdPreviewFailed(state, action: PayloadAction<string>) {
      state.getGistbyIdPreview.loading = false;
      state.getGistbyIdPreview.error = action.payload;
    },

    //deleteGist
    deleteGist(state, action: PayloadAction<string>) {
      state.deleteGist.loading = !!action.type;
    },
    deleteGistSuccess(state) {
      state.deleteGist.loading = false;
      state.deleteGist.success = true;
    },
    deleteGistFailed(state, action: PayloadAction<string>) {
      state.deleteGist.loading = false;
      state.deleteGist.error = action.payload;
    },

    //updateGist
    updateGist(state, action: PayloadAction<IcreateGist>) {
      state.updateGist.loading = !!action.type;
    },
    updateGistSuccess(state) {
      state.updateGist.loading = false;
      state.updateGist.success = true;
    },
    updateGistFailed(state, action: PayloadAction<string>) {
      state.updateGist.loading = false;
      state.updateGist.error = action.payload;
    },

    //addComment
    addComment(state, action: PayloadAction<IcreateGist>) {
      state.addComment.loading = !!action.type;
    },
    addCommentSuccess(state) {
      state.addComment.loading = false;
      state.addComment.success = true;
    },
    addCommentFailed(state, action: PayloadAction<string>) {
      state.addComment.loading = false;
      state.addComment.error = action.payload;
    },

    //addComment
    editComment(state, action: PayloadAction<IcreateGist>) {
      state.editComment.loading = !!action.type;
    },
    editCommentSuccess(state) {
      state.editComment.loading = false;
      state.editComment.success = true;
    },
    editCommentFailed(state, action: PayloadAction<string>) {
      state.editComment.loading = false;
      state.editComment.error = action.payload;
    },

    //deleteComment
    deleteComment(state, action: PayloadAction<string>) {
      state.deleteComment.loading = !!action.type;
    },
    deleteCommentSuccess(state) {
      state.deleteComment.loading = false;
      state.deleteComment.success = true;
    },
    deleteCommentFailed(state, action: PayloadAction<string>) {
      state.deleteComment.loading = false;
      state.deleteComment.error = action.payload;
    },

    //addReplies
    addReplies(state, action: PayloadAction<IcreateGist>) {
      state.addReplies.loading = !!action.type;
    },
    addRepliesSuccess(state) {
      state.addReplies.loading = false;
      state.addReplies.success = true;
    },
    addRepliesFailed(state, action: PayloadAction<string>) {
      state.addReplies.loading = false;
      state.addReplies.error = action.payload;
    },

    //getRepliesById
    getRepliesById(state, action: PayloadAction<IPaginateParams>) {
      state.getRepliesById.loading = !!action.type;
    },
    getRepliesByIdSuccess(
      state,
      action: PayloadAction<{
        data: IgetGist['comments'];
        paginationData: IpaginateData;
      }>
    ) {
      state.getRepliesById.loading = false;
      state.getRepliesById.success = true;
      state.getRepliesById.data = action.payload.data;
      state.getRepliesById.paginationData = action.payload.paginationData;
    },
    getRepliesByIdFailed(state, action: PayloadAction<string>) {
      state.getRepliesById.loading = false;
      state.getRepliesById.error = action.payload;
    },

    //likeAndUnlike
    likeAndUnlike(
      state,
      action: PayloadAction<{ id: string; likeState: number }>
    ) {
      state.likeAndUnlike.loading = !!action.type;
    },
    likeAndUnlikeSuccess(state) {
      state.likeAndUnlike.loading = false;
      state.likeAndUnlike.success = true;
    },
    likeAndUnlikeFailed(state, action: PayloadAction<string>) {
      state.likeAndUnlike.loading = false;
      state.likeAndUnlike.error = action.payload;
    },

    //reset block and Flags
    resetBlockCommunities(
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

    resetFlagCommunities(state) {
      Object.assign(state, initialState);
    },
  },
});

// Actions
export const communitiesActions = communitiesSlice.actions;
export const {
  getCommunities,
  getCommunitybyId,
  updateCommunity,
  assignCommunityAdmin,
  addComment,
  addReplies,
  approveCommunityRequest,
  createCommunity,
  createGist,
  deleteComment,
  deleteGist,
  getCommunitybyIdPreview,
  getGistbyId,
  getGistbyIdPreview,
  getRepliesById,
  joinCommunityRequest,
  updateGist,
  editComment,
  resetFlagCommunities,
  resetBlockCommunities,
  likeAndUnlike,
} = communitiesSlice.actions;

// Reducer
const communitiesReducer = communitiesSlice.reducer;
export default communitiesReducer;