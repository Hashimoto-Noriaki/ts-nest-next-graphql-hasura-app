import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', //Next.jsからGraphQLサーバーにアクセスできるようにする
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 許可するHTTPメソッド
    credentials: true, // クッキーなどの送信を許可
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
