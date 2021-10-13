export interface UseCase<T, S> {
  execute(params?: T): S | Promise<S>;
}
