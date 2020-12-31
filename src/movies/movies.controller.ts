import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

/**
 * nest generate controller :
 * 자동으로 컨트롤러 생성, 모듈에서 임포트 해줌
 */

@Controller('movies') // entry point (라우터 역할)
export class MoviesController {
  // Nest에서는 직접 import하는 것이 아니고 이런식으로 '요청'한다고 생각하자 !
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id' /* 이름이 같아야 함*/) // parameter를 가져오는 방법
  getOne(
    @Param('id' /* 이름이 같아야 함*/)
    movieId: number /* transform pipe - 타입을 자동으로 변환해줌 */,
  ): Movie {
    const movie = this.moviesService.getOne(movieId);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${movieId} is not found`); // HttpException에서 확장된 NEST 기본 기능
    }
    return movie;
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO /* Body 가져오는 방법 */) {
    return this.moviesService.create(movieData); // 자동으로 성공시 201 Created 리턴
  }

  @Delete(':id')
  remove(@Param('id') movieId: number /* */) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(
    @Param('id') movieId: number /* */,
    @Body() updateData: UpdateMovieDTO,
  ) {
    return this.moviesService.update(movieId, updateData);
  }
}
