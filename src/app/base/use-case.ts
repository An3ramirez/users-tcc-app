import { Observable } from 'rxjs';

export interface UseCase<S, T> {
  execute(params: S): Observable<T>;
}

export interface UseCaseId<_number, T> {
  execute(id: number): Observable<T>;
}
