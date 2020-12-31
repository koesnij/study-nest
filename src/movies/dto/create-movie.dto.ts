import { IsNumber, IsString } from 'class-validator';

/**
 *  Data Transfer Object : 데이터 전송 객체
 *  1. 코드를 간결하게 만들 수 있도록 해줌
 *  2. NestJS가 Incoming Query에 대해 유효성 검사를 할 수 있음
 */
export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true /* 모든 요소를 하나씩 검사 */ })
  readonly genres: string[];
}
