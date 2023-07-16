// src/users/users.controller.ts
import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users') //user와 관련된 요청들을 처리,  @Get(), @Post(), @Put(), @Delete()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}