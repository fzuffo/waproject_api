import { HttpModule, Module } from '@nestjs/common';
import { CommonModule } from 'modules/common/module';
import { DatabaseModule } from 'modules/database/module';

import { AuthController } from './controllers/auth';
import { OrderController } from './controllers/order';
import { ProfileController } from './controllers/profile';
import { DeviceRepository } from './repositories/device';
import { OrderRepository } from './repositories/order';
import { UserRepository } from './repositories/user';
import { AuthService } from './services/auth';
import { OrderService } from './services/order';
import { UserService } from './services/user';

@Module({
  imports: [HttpModule, CommonModule, DatabaseModule],
  controllers: [AuthController, ProfileController, OrderController],
  providers: [AuthService, UserService, UserRepository, DeviceRepository, OrderRepository, OrderService]
})
export class AppModule {}
