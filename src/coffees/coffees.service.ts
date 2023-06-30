import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { createCoffeeInput } from './dto/create-coffee.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInputError } from '@nestjs/apollo';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}
  async findAll(): Promise<Coffee[]> {
    return this.coffeeRepository.find();
  }

  async findOne(id: number): Promise<Coffee> {
    const coffee = await this.coffeeRepository.findOne({ where: { id } });
    if (!coffee) {
      throw new UserInputError(`Coffe #${id} does not exist`);
    }
    return coffee;
  }

  async create(createCoffeeInput: createCoffeeInput): Promise<Coffee> {
    return this.coffeeRepository.save(createCoffeeInput);
  }
}
