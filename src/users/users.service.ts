import {Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {UserDocument, Users } from './schemas/user.schema';
import { Model } from 'mongoose';
import{InjectModel} from '@nestjs/mongoose';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel : Model<Users>,

  ){}
  async create(createUserDto: CreateUserDto): Promise<Users> {
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }

  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<Users> {
    return this.userModel.findOne({_id:id}).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<Users> {
    const userUpdate = await this.userModel.findByIdAndUpdate(updateUserDto);

    return userUpdate;
  }

  async remove(id: string) {
    const deletedUser = await this.userModel.findByIdAndRemove({_id: id}).exec();
    return deletedUser;
  }
}
