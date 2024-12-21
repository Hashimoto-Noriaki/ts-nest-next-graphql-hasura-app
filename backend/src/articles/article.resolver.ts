import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Article } from './article.model';

@Resolver(() => Article)
export class ArticleResolver {
  private articles: Article[] = [
    {
      id: 1,
      title: 'Nest.jsの記事',
      url: 'https://zenn.dev/norihashimo/articles/de0edfde59edf2',
      description: 'Nest.jsの概念',
      tags: ['Nest.js', 'GraphQL'],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];

  @Query(() => [Article])
  async getArticles(): Promise<Article[]> {
    return this.articles;
  }

  @Mutation(() => Article)
  async addArticle(
    @Args('title') title: string,
    @Args('url') url: string,
    @Args('description') description: string,
  ): Promise<Article> {
    const newArticle = {
      id: this.articles.length + 1,
      title,
      url,
      description,
      tags: [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.articles.push(newArticle);
    return newArticle;
  }
}
