import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ example: 'user@email.com', description: 'Email' })
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'Password' })
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/, {
    message:
      'Password must contain at least one letter and one number and be 8 to 20 characters long',
  })
  readonly password: string;
}
