import * as bcrypt from 'bcrypt';

import { Service } from 'typedi';
import { Hasher } from '../../domain/cryptography';
import BcryptHasherFactory from './bcrypt.hasher.factory';

@Service({ factory: BcryptHasherFactory })
export class BcryptHasher implements Hasher {
  constructor(private readonly salt: number) {}

  hash(plainText: string): string {
    return bcrypt.hash(plainText, this.salt);
  }
}
