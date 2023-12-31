import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { ParseIntPipe } from '@nestjs/common';
import { createCoffeeInput } from './dto/create-coffee.input';
import { CoffeesService } from './coffees.service';

@Resolver()
export class CoffeesResolver {
  constructor(private readonly coffeeService: CoffeesService) {}
  @Query(() => [Coffee], { name: 'coffees' })
  async findAll() {
    return this.coffeeService.findAll();
  }

  @Query(() => Coffee, { name: 'coffee' })
  async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.coffeeService.findOne(id);
  }

  @Mutation(() => Coffee, { name: 'createCoffee' })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: createCoffeeInput,
  ) {
    return this.coffeeService.create(createCoffeeInput);
  }
}
