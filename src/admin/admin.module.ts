/*
 * @Title: admin模块
 * @Author: huangjitao
 * @Date: 2022-08-15 10:43:52
 * @Description: description of this file
 */
import { Module, forwardRef } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
