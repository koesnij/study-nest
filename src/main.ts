import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* pipe : 미들웨어와 비슷 */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true /* 아무 decorator도 없는 어떠한 property의 object는 거름 */,
      forbidNonWhitelisted: true /* 요청 자체를 막음 */,
      transform: true /* 요청을 원하는 타입으로 변환 */,
    }),
  );
  await app.listen(3000);
}
bootstrap();
