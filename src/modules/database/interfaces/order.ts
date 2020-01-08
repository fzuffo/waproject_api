import { IUser } from './user';

export interface IOrder {
  id?: number;
  userId?: number;
  description: string;
  amount: number;
  value: number;
  // currentToken: string;
  // notificationToken?: string;

  user?: IUser;
}
