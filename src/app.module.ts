import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// 데코레이터 - 클래스에 함수 기능을 추가
@Module({
  imports: [MoviesModule], // AppModule은 AppService와 AppController만 가져야함 ... Movies 모듈화
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
