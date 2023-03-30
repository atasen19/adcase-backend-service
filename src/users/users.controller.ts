import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import * as DTO from './dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    console.warn('here');
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(
    @Body() params: DTO.CreateUserRequestDTO,
  ): Promise<DTO.CreateUserResponseDTO> {
    const user = await this.usersService.createUser(params);

    return user;
  }
}
