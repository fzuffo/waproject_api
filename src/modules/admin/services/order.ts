import { Injectable, NotFoundException } from '@nestjs/common';
import { ICurrentUser } from 'modules/common/interfaces/currentUser';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/order';

import { OrderRepository } from '../../admin/repositories/order';
import { UserRepository } from '../repositories/user';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository, private userRepository: UserRepository) {}

  public async save(model: IOrder, currentUser: ICurrentUser): Promise<Order> {
    const user = await this.userRepository.findById(currentUser.id);
    model.userId = user.id;

    if (model.id) return this.update(model);

    return this.orderRepository.insert(model);
  }

  public async remove(orderId: number): Promise<void> {
    const order = await this.orderRepository.findById(orderId);

    if (!order) {
      throw new NotFoundException('not-found');
    }

    return this.orderRepository.remove(orderId);
  }

  public async update(model: IOrder): Promise<Order> {
    const order = await this.orderRepository.findById(model.id);
    if (!order) {
      throw new NotFoundException('not-found');
    }
    console.log(model, order);

    return this.orderRepository.update({ ...order, ...model });
  }
}
