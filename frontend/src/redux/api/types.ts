/* eslint-disable prettier/prettier */
export interface IUser {
  name: string;
  lastName: string;
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

export interface IMyReview { }

export interface IReview {
  description: string,
  rating: string,
  title: string,
  createdAt: string,
  id: string,
}
