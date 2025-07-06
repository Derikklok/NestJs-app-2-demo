import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {

  @Post()
  @HttpCode(201)
  async create(@Body() createCatDto: CreateCatDto) {
    return `This will create a new cat record -> \n
    Name : ${createCatDto.name} \n
    Age : ${createCatDto.age} \n
    Breed : ${createCatDto.breed}`;

  }

  @Get('breed')
  @HttpCode(200)
  findByBreed(@Req() request: Request): string {
    return `Breed : ${request.body.breed}`;
  }

  @Get()
  @HttpCode(200)
  findAll(): string {
    return `This endpoint returns all the cats`;
  }

  // get cat by id
  @Get(':id')
  getById(@Param() params: any): string {
    console.log(params.id);
    return `This endpoint will return the cats details by ${params.id}`;
  }
}
