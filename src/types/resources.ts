export interface IcreateVideoForm {
  title: string;
  description: string;
  isPublished?: boolean;
  resourceType?: 3;
  tags?: any;
  resourceLink: string;
  interests?: any;
}

export interface IgetOriginalsResource {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  resourceLink: string;
  interests: {
    id: string;
    name: string;
  }[];
}