import { BcryptHasher } from '.';

export default function BcryptHasherFactory(): BcryptHasher {
  return new BcryptHasher(+process.env.DEFAULT_SALT || 16);
}
