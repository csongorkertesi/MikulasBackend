/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToysService {
  constructor(private prismaService:PrismaService) {}
  async create(data: CreateToyDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (data.childId) {
      return await this.prismaService.toys.create({data: {
      material: data.material,
      name: data.name,
      weight: data.weight,
      child: { connect: { id: data.childId } }
    },
  });
    } else {
      return await this.prismaService.toys.create({data: {
      material: data.material,
      name: data.name,
      weight: data.weight
    },
  });
    }
  }

  async findAll() {
    return await this.prismaService.toys.findMany()
  }

  async findOne(id: number) {
    const res = await this.prismaService.toys.findUnique({ where: { id } });
    if(!res) throw new NotFoundException("Toy not found");
    return res;
  }

  async update(id: number, data: UpdateToyDto) {

    const res = await this.prismaService.toys.update({where: {id}, data}).catch(_=>{
      throw new NotFoundException("Invalid parameters");
    });
    if (!res) throw new NotFoundException("Toy not found");
    return res;
  }

  async remove(id: number) {
    const res = await this.prismaService.toys.delete({where: {id}}).catch(_=>{
      throw new NotFoundException("Invalid parameters");
    });
    if (!res) throw new NotFoundException("Toy not found");
    return res;
  }
}
