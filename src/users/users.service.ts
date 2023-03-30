import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserRequestDTO } from './dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  public async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  public async createUser(params: CreateUserRequestDTO): Promise<User> {
    const user = new this.userModel(params);
    return user.save();
  }
}
