import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

/**
 * nest generate controller :
 * 자동으로 컨트롤러 생성, 모듈에서 임포트 해줌
 */

@Controller('movies') // entry point (라우터 역할)
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id' /* 이름이 같아야 함*/) // parameter를 가져오는 방법
  getOne(@Param('id' /* 이름이 같아야 함*/) movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
