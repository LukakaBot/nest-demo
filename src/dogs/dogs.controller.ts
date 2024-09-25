import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './interfaces/dogs.interfaces';
import { CreateDogDto } from './dto/dogs.dto';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.create(createDogDto);
  }
}
