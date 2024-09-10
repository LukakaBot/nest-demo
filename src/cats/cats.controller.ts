import {
  Query,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { ListAllEntities } from '../common/common.dto';
import { UpdateCatDto } from './update-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query() query: ListAllEntities): string {
    return `This action return all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    console.log(createCatDto);
    return `This action adds a new cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
    console.log(updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} cat`;
  }
}
