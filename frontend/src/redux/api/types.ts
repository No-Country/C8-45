/* eslint-disable prettier/prettier */
export interface IUser {
  name: string;
  lastName?: string;
  email: string;
  role: {
    id: number;
    name: string;
  };
  id: string;
  address?: string;
  avatar?: string;
  banned: boolean;
  phone?: string;
  reviewsQuantity?: number;
}
export interface IGenericResponse {
  status: string;
  message: string;
}

export interface IMyReviewFetched {
  description: string;
  rating: number;
  title: string;
  createdAt?: string;
  experienceDate: string;
  companyURL: string;
  companyId?: string;
  companyName: string;
  id?: string;
}
export interface IMyReviewUpdated {
  description?: string;
  rating?: number;
  title?: string;
  experienceDate?: string;
  id: string | undefined;
}
export interface IMyReviewCreated {
  description: string;
  rating: number;
  title: string;
  experienceDate: string;
  companyUrl: string;
  companyName: string;
}
export interface IReview {
  id: string;
  description: string;
  rating: string;
  title: string;
  createdAt: string;
  experienceDate: string;
  user: IUser;
}

export interface ICompany {
  name: string;
  email: string;
  role: {
    id: number;
    name: string;
  };
  id: string;
  lastName?: string;
  address?: string;
  avatar?: string;
  banned: boolean;
  phone?: string;
  reviewsQuantity?: number;
  description: string;
  country?: string;
  city?: string;
  website: string;
  workEmail: string;
  ratingGeneral: number;
}

export interface ICompanyUpdate {
  name?: string;
  avatar?: string;
  description?: string;
  address?: string;
  phone?: string;
  country?: string;
  city?: string;
  password?: string;
}
