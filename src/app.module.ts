import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './companies/company.module';
import { CustomerModule } from './customers/customer.module';
import { ProductModule } from './products/product.module';

@Module({
  imports: [ProductModule, CompanyModule, CustomerModule, ClientModule, MongooseModule.forRoot('mongodb+srv://omur:12345@cluster0.lsyel.mongodb.net/nestjsDB?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
