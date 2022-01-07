import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './companies/company.module';
import { ProductModule } from './products/product.module';

@Module({
  imports: [ProductModule, CompanyModule, MongooseModule.forRoot('mongodb+srv://omur:12345@cluster0.lsyel.mongodb.net/nestjsDB?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
