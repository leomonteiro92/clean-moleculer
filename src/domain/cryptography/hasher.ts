export interface Hasher {
  hash(plainText: string): string | Promise<string>;
}
