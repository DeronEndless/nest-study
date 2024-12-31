import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
    console.log('before...');
    next();
    console.log('after...');
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
