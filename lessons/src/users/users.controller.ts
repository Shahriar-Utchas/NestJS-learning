import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { get } from 'http';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query('role') role?: 'user' | 'admin') {
        return 'This action returns all users';
    }


    @Get('interns')
    getInterns() {
        return 'This action returns all interns';
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return { id }
    }


    @Post()
    createUser(@Body() user: {}) {
        return user;
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() user: {}) {
        return { id, ...user };
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return { id };
    }

}
