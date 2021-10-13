import { Column, Entity } from 'typeorm';
import { UserType } from '../../domain/user';
import { CustomBaseEntity } from '../base.typeorm.entity';

@Entity('users')
export class UserTypeOrmEntity extends CustomBaseEntity implements UserType {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  blocked: boolean;
}
