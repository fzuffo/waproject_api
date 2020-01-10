import { IUser } from './user';

export interface IOrder {
  id?: number;
  userId?: number;
  description: string;
  amount: number;
  value: number;

  createdDate?: Date;
  updatedDate?: Date;

  user?: IUser;
}
