import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user_roles.model copy';

// поля которые будут нужны для создания объекта
interface UserCreationAttribute {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttribute> {
  @ApiProperty({ example: '1', description: 'Unique identifier' }) //swagger
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@email.com', description: 'Email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '12345678', description: 'Password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: 'User', description: 'User name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @ApiProperty({ example: 'User', description: 'User last name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @ApiProperty({ example: 'Job', description: 'Job title' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  job_title: string;

  @ApiProperty({ example: 'Company name', description: 'Workplace' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  workplace: string;

  @ApiProperty({ example: '1 year', description: 'Experience' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  experience: string;

  @ApiProperty({
    example: 'https://example.com/images/sample.jpg',
    description: 'URL of the image',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image: string;

  @ApiProperty({
    example: true,
    description: 'Indicates whether the user is banned',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({
    example: 'Violation of terms of service',
    description: 'Reason for banning the user, if applicable',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
