import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'modules/admin/services/user';
import { SaveValidator } from 'modules/admin/validators/user/save';
import { ListValidator } from 'modules/app/validators/order/list';
import { Order } from 'modules/database/models/Order';

import { OrderRepository } from '../repositories/order';

// import { AuthRequired, CurrentUser } from 'modules/common/guards/token';
// import { ICurrentUser } from 'modules/common/interfaces/currentUser';
@ApiTags('App: Order')
@Controller('/order')
// @AuthRequired()
export class OrderController {
  constructor(private orderRepository: OrderRepository, private userService: UserService) {}

  @Get()
  @ApiResponse({ status: 200, type: Order })
  public async list(@Query() model: ListValidator) {
    return this.orderRepository.list(model);
  }

  @Post()
  @ApiResponse({ status: 200, type: Order })
  public async save(@Body() model: SaveValidator) {
    return this.userService.save(model);
  }
}
