import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://orssatto:123@cluster0.mo9pg.mongodb.net/angular-nest-app?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
