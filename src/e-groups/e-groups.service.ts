import { Injectable } from '@nestjs/common';
import { CreateEGroupDto } from './dto/create-e-group.dto';
import { UpdateEGroupDto } from './dto/update-e-group.dto';
import { EGroup, EGroupDocument } from './schemas/e-group.schemas';
import{InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';

@Injectable()
export class EGroupsService {
  constructor(
    @InjectModel('EGroup') private readonly egroupModel : Model<EGroup>,
  ){}
  async create(createEGroupDto: CreateEGroupDto): Promise<EGroupDocument> {
    const createdEgroup = await this.egroupModel.create(createEGroupDto);
    return createdEgroup;
  }

  findAll() {
    return `This action returns all eGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eGroup`;
  }

  update(id: number, updateEGroupDto: UpdateEGroupDto) {
    return `This action updates a #${id} eGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} eGroup`;
  }
}
