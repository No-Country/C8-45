import { User } from "../../user/entities/user";

export interface createReview {
  description: string;
  rating: number;
  title: string;
  company: string;
  user: User;
}
