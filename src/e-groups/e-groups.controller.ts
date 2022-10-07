import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EGroupsService } from './e-groups.service';
import { CreateEGroupDto } from './dto/create-e-group.dto';
import { UpdateEGroupDto } from './dto/update-e-group.dto';

@Controller('egroups')
export class EGroupsController {
  constructor(private readonly eGroupsService: EGroupsService) {}

  @Post()
  async create(@Body() createEGroupDto: CreateEGroupDto) {
   this.eGroupsService.create(createEGroupDto);
  }

  @Get()
  async findAll() {
    return this.eGroupsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.eGroupsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEGroupDto: UpdateEGroupDto) {
    return this.eGroupsService.update(id, updateEGroupDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.eGroupsService.remove(id);
  }
}
