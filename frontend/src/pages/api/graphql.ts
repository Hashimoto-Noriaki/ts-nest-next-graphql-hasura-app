import { createProxyMiddleware } from 'http-proxy-middleware';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false, // GraphQLリクエストにはbodyParserを無効化
  },
};

const proxy = createProxyMiddleware({
  target: 'http://localhost:4000/graphql', // Nest.jsのGraphQLエンドポイント
  changeOrigin: true,
  pathRewrite: {
    '^/api/graphql': '', // `/api/graphql`をNest.jsにそのまま転送
  },
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return proxy(req, res, (result: unknown) => {
    if (result instanceof Error) {
      throw result;
    }
    return result;
  });
}
