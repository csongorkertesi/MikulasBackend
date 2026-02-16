import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('children')
@Controller('children')
export class ChildrenController {
  constructor(private readonly childrenService: ChildrenService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new child' })
  @ApiResponse({ status: 201, description: 'Child successfully created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiBody({ type: CreateChildDto })
  create(@Body() createChildDto: CreateChildDto) {
    return this.childrenService.create(createChildDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all children' })
  @ApiResponse({ status: 200, description: 'List of all children' })
  findAll() {
    return this.childrenService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a child by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Child ID' })
  @ApiResponse({ status: 200, description: 'Child found' })
  @ApiResponse({ status: 404, description: 'Child not found' })
  findOne(@Param('id') id: string) {
    return this.childrenService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a child' })
  @ApiParam({ name: 'id', type: 'number', description: 'Child ID' })
  @ApiBody({ type: UpdateChildDto })
  @ApiResponse({ status: 200, description: 'Child successfully updated' })
  @ApiResponse({ status: 404, description: 'Child not found' })
  update(@Param('id') id: string, @Body() updateChildDto: UpdateChildDto) {
    return this.childrenService.update(+id, updateChildDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a child' })
  @ApiParam({ name: 'id', type: 'number', description: 'Child ID' })
  @ApiResponse({ status: 200, description: 'Child successfully deleted' })
  @ApiResponse({ status: 404, description: 'Child not found' })
  remove(@Param('id') id: string) {
    return this.childrenService.remove(+id);
  }

  @Put(":id/toys/:toy")
  @ApiOperation({ summary: 'Link a toy to a child' })
  @ApiParam({ name: 'id', type: 'number', description: 'Child ID' })
  @ApiParam({ name: 'toy', type: 'number', description: 'Toy ID' })
  @ApiResponse({ status: 200, description: 'Toy successfully linked to child' })
  @ApiResponse({ status: 404, description: 'Child or toy not found' })
  linkToy(@Param('id') id: string, @Param('toy') toyId: string) {
    return this.childrenService.linkToy(+id, +toyId);
  }

  @Delete(":id/toys/:toy")
  @ApiOperation({ summary: 'Remove a toy from a child' })
  @ApiParam({ name: 'id', type: 'number', description: 'Child ID' })
  @ApiParam({ name: 'toy', type: 'number', description: 'Toy ID' })
  @ApiResponse({ status: 200, description: 'Toy successfully removed from child' })
  @ApiResponse({ status: 404, description: 'Child or toy not found' })
  removeToy(@Param('id') id: string, @Param('toy') toyId: string) {
    return this.childrenService.removeToy(+id, +toyId);
  }
}
