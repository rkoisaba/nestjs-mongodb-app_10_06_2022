import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EGroupsModule } from './e-groups/e-groups.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [EGroupsModule, UsersModule,MongooseModule.forRoot('mongodb+srv://admin:admin1234@cluster0.biuusrk.mongodb.net/?retryWrites=true&w=majority'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
