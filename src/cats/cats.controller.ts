import {
  // Query,
  // Body,
  Controller,
  Get,
  // Param,
  Post,
  // Put,
  // Delete,
  // HttpStatus,
  // Res,
  Body,
} from '@nestjs/common';
// import { ListAllEntities } from '../common/common.dto';
// import { UpdateCatDto } from './cats.dto';
// import { Response } from 'express';
import { CatsService } from './cats.service';
import { Cat } from 'src/cats/interfaces/cats.interfaces';
import { CreateCatDto } from './dto/cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
