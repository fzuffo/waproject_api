import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListValidator } from 'modules/app/validators/order/list';
import { SaveValidator } from 'modules/app/validators/order/save';
import { AuthRequired, CurrentUser } from 'modules/common/guards/token';
import { ICurrentUser } from 'modules/common/interfaces/currentUser';
import { Order } from 'modules/database/models/Order';

import { OrderRepository } from '../repositories/order';
import { OrderService } from '../services/order';

@ApiTags('App: Order')
@Controller('/order')
@AuthRequired()
export class OrderController {
  constructor(private orderRepository: OrderRepository, private orderService: OrderService) {}

  @Get()
  @ApiResponse({ status: 200, type: Order })
  public async list(@Query() model: ListValidator) {
    return this.orderRepository.list(model);
  }

  @Post()
  @ApiResponse({ status: 200, type: Order })
  public async save(@Body() model: SaveValidator, @CurrentUser() currentUser: ICurrentUser) {
    return this.orderService.create(model, currentUser);
  }
}
