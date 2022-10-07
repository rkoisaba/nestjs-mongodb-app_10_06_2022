import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { EGroupsService } from 'src/e-groups/e-groups.service';


@Controller('auth')
export class AuthController {
    constructor(
        private userService : UsersService,
        private authService: AuthService,
        private egroupService: EGroupsService
    ){}


}
