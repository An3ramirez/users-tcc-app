import { Observable } from 'rxjs';

export interface UseCase<S, T> {
  execute(params: S): Observable<T>;
}

export interface UseCaseEdit<S, T> {
  execute(id: number, params: S): Observable<T>;
}

export interface UseCaseId<_number, T> {
  execute(id: number): Observable<T>;
}
