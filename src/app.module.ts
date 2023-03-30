import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/adcase')],
  // I could't set up the infra properly. The link above should change with the DocumentDB ARN/URL.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
