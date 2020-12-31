import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';
/**
 * https://www.npmjs.com/package/@nestjs/mapped-types
 * 타입을 변환시키고 사용할 수 있음
 */
export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {
  /* 즉, UpdateMovieDTO는 CreateMovieDTO와 not required 라는 것 빼면 완전 동일하므로 이렇게 사용 가능 */
}
