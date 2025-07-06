import { Controller, Get, HttpCode, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(201)
  create(): string {
    return `This will create a new cats record`;
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
  getById(@Param() params:any):string{
    console.log(params.id);
    return `This endpoint will return the cats details by ${params.id}`;
  }

}
