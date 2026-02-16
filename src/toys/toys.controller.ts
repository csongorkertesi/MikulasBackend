import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToysService } from './toys.service';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { ChildrenService } from 'src/children/children.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('toys')
@Controller('toys')
export class ToysController {
  constructor(private readonly toysService: ToysService, private childrenService: ChildrenService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new toy' })
  @ApiResponse({ status: 201, description: 'Toy successfully created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiBody({ type: CreateToyDto })
  create(@Body() createToyDto: CreateToyDto) {
    return this.toysService.create(createToyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all toys' })
  @ApiResponse({ status: 200, description: 'List of all toys' })
  findAll() {
    return this.toysService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a toy by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Toy ID' })
  @ApiResponse({ status: 200, description: 'Toy found' })
  @ApiResponse({ status: 404, description: 'Toy not found' })
  findOne(@Param('id') id: string) {
    return this.toysService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a toy' })
  @ApiParam({ name: 'id', type: 'number', description: 'Toy ID' })
  @ApiBody({ type: UpdateToyDto })
  @ApiResponse({ status: 200, description: 'Toy successfully updated' })
  @ApiResponse({ status: 404, description: 'Toy not found' })
  update(@Param('id') id: string, @Body() updateToyDto: UpdateToyDto) {
    return this.toysService.update(+id, updateToyDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a toy' })
  @ApiParam({ name: 'id', type: 'number', description: 'Toy ID' })
  @ApiResponse({ status: 200, description: 'Toy successfully deleted' })
  @ApiResponse({ status: 404, description: 'Toy not found' })
  remove(@Param('id') id: string) {
    return this.toysService.remove(+id);
  }
}
