import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Article {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  url: string;

  @Field()
  description: string;

  @Field(() => [String])
  tags: string[];

  @Field()
  created_at: string;

  @Field()
  updated_at: string;

  @Field({ nullable: true })
  deleted_at?: string;
}
