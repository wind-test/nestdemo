import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [UserModule, UploadModule],
  controllers: [AppController, NewsController],
  providers: [AppService],
})
export class AppModule {}
