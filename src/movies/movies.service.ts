import { Injectable } from '@nestjs/common';
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

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id); // +id === parseInt(id)
  }

  deleteOne(id: string): boolean {
    this.getOne(id); //컨트롤러 내의 getOne 함수
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  create(movieData) {
    const id = this.movies.length + 1;
    this.movies.push({ id, ...movieData });
    return id;
  }

  update(id: string, updateData) {
    // 그냥 테스트 용
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
