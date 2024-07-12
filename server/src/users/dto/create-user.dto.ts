import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class CreateUserDto {
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

  @ApiProperty({ example: 'User', description: 'User name' })
  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  @Matches(/^[A-Za-z\s\-]{2,30}$/, {
    message:
      'First name must contain only letters, spaces, hyphens and be 2 to 30 characters long',
  })
  readonly first_name: string;

  @ApiProperty({ example: 'User', description: 'User last name' })
  @IsString()
  @IsNotEmpty({ message: 'Last name is required' })
  @Matches(/^[A-Za-z\s\-]{2,30}$/, {
    message:
      'Last name must contain only letters, spaces, hyphens and be 2 to 30 characters long',
  })
  readonly last_name: string;

  @ApiProperty({ example: 'Job', description: 'Job title' })
  @IsString()
  @IsNotEmpty({ message: 'Job title is required' })
  @Matches(/^[A-Za-z\s\-]{2,30}$/, {
    message:
      'Job title must contain only letters, spaces, hyphens and be 2 to 30 characters long',
  })
  readonly job_title: string;

  @ApiProperty({ example: 'Company name', description: 'Workplace' })
  @IsString()
  @IsNotEmpty({ message: 'Workplace is required' })
  @Matches(/^[A-Za-z0-9\s\-\/]{2,30}$/, {
    message:
      'Workplace must contain only letters, numbers, spaces, hyphens, slash and be 2 to 30 characters long',
  })
  readonly workplace: string;

  @ApiProperty({ example: '1 year', description: 'Experience' })
  @IsString()
  @IsOptional()
  @Matches(/^[A-Za-z0-9]{1,30}$/, {
    message:
      'Experience must contain only letters and numbers and be 1 to 30 characters long',
  })
  readonly experience: string;

  @ApiProperty({
    example: 'https://example.com/images/sample.jpg',
    description: 'URL of the image',
  })
  @IsString()
  @IsOptional()
  readonly image: string;
}
