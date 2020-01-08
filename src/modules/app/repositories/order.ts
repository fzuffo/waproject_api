import { Injectable } from '@nestjs/common';
import { IPaginationParams } from 'modules/common/interfaces/pagination';
import { Order } from 'modules/database/models/order';
import { Page, Transaction } from 'objection';

// import { IOrder } from 'modules/database/interfaces/order';
// import { IOrder } from 'modules/database/interfaces/order';
@Injectable()
export class OrderRepository {
  public async list(params: IPaginationParams, transaction?: Transaction): Promise<Page<Order>> {
    let query = Order.query(transaction)
      .select('*')
      .page(params.page, params.pageSize);

    if (params.orderBy) {
      if (params.orderBy !== 'id') {
        query = query.orderBy(params.orderBy, params.orderDirection);
      } else {
        query = query.orderBy('value', params.orderDirection).orderBy('amount', params.orderDirection);
      }
    }

    if (params.term) {
      query = query.where(query => {
        return query
          .where('id', 'ilike', `%${params.term}%`)
          .orWhere('description', 'ilike', `%${params.term}%`)
          .orWhere('amount', 'ilike', `%${params.term}%`);
      });
    }

    return query;
  }
}
