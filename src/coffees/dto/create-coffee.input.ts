import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createCoffeeInput {
  @Field(() => String, { description: ' A new coffee name' })
  name: string;
  brand: string;
  flavors: string[];
}
