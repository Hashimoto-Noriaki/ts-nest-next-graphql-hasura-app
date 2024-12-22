import { gql, useQuery } from '@apollo/client';

// GraphQLクエリ
const GET_ARTICLES = gql`
  query {
    getArticles {
      id
      title
      url
      description
      tags
    }
  }
`;

// 記事データの型定義
interface Article {
  id: number;
  title: string;
  url: string;
  description: string;
  tags: string[];
}

// GraphQLのクエリで取得するデータの型を定義
interface GetArticlesData {
  getArticles: Article[];
}

export default function Home() {
  // useQueryに型引数を指定
  const { loading, error, data } = useQuery<GetArticlesData>(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.getArticles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}
