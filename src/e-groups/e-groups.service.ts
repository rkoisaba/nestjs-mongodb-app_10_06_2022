import { Injectable } from '@nestjs/common';
import { CreateEGroupDto } from './dto/create-e-group.dto';
import { UpdateEGroupDto } from './dto/update-e-group.dto';
//import {EGroup, EGroupDocument } from './schemas/e-group.schemas';
//import{EGroup} from './interface/e-groups.interface';
import{InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EGroupsModule } from './e-groups.module';
import { EGroup } from './schemas/e-group.schemas';


@Injectable()
export class EGroupsService {
  constructor(
    @InjectModel('Egroup') private readonly EgroupModel : Model<EGroup>,
  ){}
  async create(createEGroupDto: CreateEGroupDto): Promise<EGroup> {
    const createdEgroup = await this.EgroupModel.create(createEGroupDto);
    return createdEgroup;
  }

  async findAll():  Promise<EGroup[]>{
    return this.EgroupModel.find().exec();
  }

  async findOne(id: string): Promise<EGroup> { 
    return this.EgroupModel.findOne({_id:id}).exec();
  }

  async update(id: string, updateEGroupDto: UpdateEGroupDto): Promise<EGroup> { 
    const EgroupUpdate = await this.EgroupModel.findByIdAndUpdate(updateEGroupDto);

    return EgroupUpdate;
  }

  async remove(id: string) {
    const deletedEGroup = await this.EgroupModel.findByIdAndRemove({_id: id}).exec();
    return deletedEGroup;
  }
}
