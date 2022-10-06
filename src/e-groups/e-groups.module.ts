import { Module } from '@nestjs/common';
import { EGroupsService } from './e-groups.service';
import { EGroupsController } from './e-groups.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EGroupSchema } from './schemas/e-group.schemas';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Egroup', schema: EGroupSchema }])],
  controllers: [EGroupsController],
  providers: [EGroupsService]
})
export class EGroupsModule {}
