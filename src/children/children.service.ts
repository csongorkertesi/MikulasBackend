import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from 'generated/prisma/internal/prismaNamespace';

@Injectable()
export class ChildrenService {
  constructor(private prismaService:PrismaService) {}
  async create(data: CreateChildDto) {
    let res;
    try {
      res = await this.prismaService.children.create({data});
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if(e.code === "P2002") {
          throw new BadRequestException("A Child with that name already exists!");
        }
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return res;
  }

  async findAll() {
    return await this.prismaService.children.findMany();
  }

  async findOne(id: number) {
    const res = await this.prismaService.children.findUnique({where: {id}});
    if(!res) throw new NotFoundException("Child not found");
    return res;
  }

  async update(id: number, data: UpdateChildDto) {
    const res = await this.prismaService.children.update({where: {id}, data}).catch(_=>{
      throw new NotFoundException("Child not found");
    });
    if(!res) throw new NotFoundException("Child not found");
    return res;
  }

  async remove(id: number) {
    const res = await this.prismaService.children.delete({where: {id}}).catch(_=>{
      throw new NotFoundException("Child not found");
    });
    if(!res) throw new NotFoundException("Child not found");
    return res;
  }

  async linkToy(id: number, toyId: number) {
    const res = await this.prismaService.toys.update({where: {id: toyId}, data: {childId: id}}).catch(_=>{
      throw new NotFoundException("Invalid parameters");
    });
    if(!res) throw new NotFoundException("Child not found");
    return res;
  }

  async removeToy(id: number, toyId: number) {
    const res = await this.prismaService.toys.update({where: {id: toyId}, data: {childId: null}}).catch(_=>{
      throw new NotFoundException("Invalid parameters");
    });
    if(!res) throw new NotFoundException("Child not found");
    return res;
  }
}
