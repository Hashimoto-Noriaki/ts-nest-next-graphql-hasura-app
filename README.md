## 技術構成
- Next.js
- Nest.js
- TypeScript
- GraphQL
- ESLint
- Prettier
- CSS Modules
- Storybook
- GitHub Actions
- Docker
- ReactNative(導入予定)
- Hasura(導入予定)

### docker起動
- 起動
```
docker compose up -d
```
- 停止
```
docker compose down
```

### Next.js
- サーバー起動
```
npm run dev
```

- GraphQLの確認
```
npm run dev
```
- サーバー
http://localhost:3000

### ESLint Prettier
- ESLInt
```
npx next lint 
```
- Prettier
```
npx prettier --write .
```

### Next.jsのバージョン確認
```
npx next --version
```

### storybook
```
npm run storybook
```
- http://localhost:6006

### GraphQL
http://localhost:3000/api/graphql

### UI
- ```MUI```

### CSS IN JS
- ```styled-components```

# Nest.js

### Nest.jsの概念

https://zenn.dev/norihashimo/articles/de0edfde59edf2

- service
```
nest g service article --no-spec
```
- resolver
```
nest g resolver article --no-spec
```

### 公式ドキュメント

https://docs.nestjs.com/


### サーバー起動
```
$ npm run start:dev
```
- http://localhost:4000/

### ESLint Prettier

- ESLint
```
npx eslint . --fix
```

- Prettier

```
npx prettier --write .
```

### playgrondでQueryを実行
サーバー実行

- http://localhost🕓000/graphql

<img width="1440" alt="スクリーンショット 2024-11-03 13 19 23" src="https://github.com/user-attachments/assets/f5548496-bac8-4432-bbb1-c14aeb548c0d">

# Prisma生成

```
npx prisma generate
```

### prisma studio
```
npx prisma studio
```

#### prismaスカラー型

https://www.prisma.io/docs/orm/reference/prisma-schema-reference#model-field-scalar-types

### マイグレーション作成

```
npx prisma migrate dev --name init
```

### 起動中のサーバーを止める
[Nest] 42219  - 2024/12/27 0:33:49   ERROR [NestApplication] Error: listen EADDRINUSE: address already in use :::4000 +5ms
```
lsof -i :4000
```
```
COMMAND   PID    USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
node      12345  user   12u  IPv4 0x12345      0t0  TCP *:4000 (LISTEN)
```
```
kill -9 12345
```

### Hasura

https://hasura.io/learn/ja/graphql/hasura/data-modeling/2-try-user-queries/

https://zenn.dev/rescuenow/articles/30135e098d8d87#%E8%83%8C%E6%99%AF

### psqlコマンド
```
docker exec -it ts-project-nest-next-graphql-hasura psql -U nori_user noridb 
```
