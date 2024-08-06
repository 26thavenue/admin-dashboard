import { FormOption } from './common';

export interface IcreateCommunity {
  name: string;
  description: string;
  welcomeNote?: string;
  targetAudience?: string;
  state?: string;
  city?: string;
  country: string;
  isPublic?: boolean;
  joinApprovalRequired: boolean;
  isMemeberVisible: boolean;
  interests?: string[];
  imageUpload:
    | {
        mimeType: string;
        base64Content: string;
      }
    | undefined;
}
export interface IcreateCommunityForm {
  name: string;
  welcomeNote?: string;
  targetAudience?: string;
  description: string;
  state?: FormOption<string>;
  country: FormOption<string>;
  isPublic?: 'public' | 'private';
  joinApprovalRequired?: 'open' | 'close';
  isMemeberVisible?: 'admin' | 'all';
  city?: string;
  interests?: any;
}

export interface IgetCommunity {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  logoUrl: string;
  membersCount: number;
  joinRequestLink: string;
  pendingRequests: IgetCommunity['owner'][];
  upcomingEvents: any;
  owner: {
    id: string;
    fullname: string;
    userName: string;
  };
  members: IgetCommunity['owner'][];
  admins: IgetCommunity['owner'][];
  isMember: boolean;
  location: string;
  joinApprovalRequired: boolean;
  interests: string[];
  status?: string;
  role: {
    communityId: string;
    roleName: string;
  };
  gists: {
    title: string;
    message: string;
  }[];
  preferences: {
    isPublic: false;
    joinApprovalRequired: false;
    isMemberVisible: false;
  };
  city: string;
  country: string;
  state: string;
}

export interface IgetGist {
  title: string;
  dateCreated: string;
  id: string;
  isOwner: boolean;
  comments: {
    id: string;
    message: string;
    isAuthor: boolean;
    dateCreated: string;
    authorUsername: string;
    hasReplies: boolean;
    isEdited: boolean;
    liked: boolean;
    likesCount: number;
    replies: IgetGist['comments'][0][];
  }[];
}

export interface IcreateGist {
  message?: string;
  title?: string;
  id?: string;
  communityId?: string;
}

export interface IcomunityRequest {
  communityId?: string;
  status?: string | number;
  id?: string | number;
}