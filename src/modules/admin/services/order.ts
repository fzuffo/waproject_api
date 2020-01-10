import { Injectable } from '@nestjs/common';
import { ICurrentUser } from 'modules/common/interfaces/currentUser';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/order';

import { OrderRepository } from '../repositories/order';
import { UserRepository } from '../repositories/user';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository, private userRepository: UserRepository) {}

  public async create(model: IOrder, currentUser: ICurrentUser): Promise<Order> {
    const user = await this.userRepository.findById(currentUser.id);
    model.userId = user.id;

    return this.orderRepository.create(model);
  }
}
