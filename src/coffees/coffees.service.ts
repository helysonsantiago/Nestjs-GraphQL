import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { createCoffeeInput } from './dto/create-coffee.input';

@Injectable()
export class CoffeesService {
  async findAll(): Promise<Coffee[]> {
    return [];
  }

  async findOne(id: number): Promise<Coffee> {
    return null;
  }

  async create(createCoffeeInput: createCoffeeInput): Promise<Coffee> {
    return null;
  }
}
