import { Injectable } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
/**
 * nest generate service :
 * 자동으로 서비스 생성, 모듈에서 임포트 해줌
 */

// 컨트롤러에서 호출할 함수들을 정의
@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    return this.movies.find((movie) => movie.id === id); // +id === parseInt(id)
  }

  deleteOne(id: number): boolean {
    this.getOne(id); //컨트롤러 내의 getOne 함수
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  create(movieData: CreateMovieDTO) {
    const id = this.movies.length + 1;
    this.movies.push({ id, ...movieData });
    return id;
  }

  update(id: number, updateData: UpdateMovieDTO) {
    // 그냥 테스트 용
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
