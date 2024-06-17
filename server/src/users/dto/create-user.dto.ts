import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@email.com', description: 'Email' }) //sagger
  readonly email: string;
  @ApiProperty({ example: '12345678', description: 'Password' })
  readonly password: string;
  @ApiProperty({ example: 'User', description: 'User name' })
  readonly first_name: string;
  @ApiProperty({ example: 'User', description: 'User last name' })
  readonly last_name: string;
  @ApiProperty({ example: 'Job', description: 'Job title' })
  readonly job_title: string;
  @ApiProperty({ example: 'Company name', description: 'Workplace' })
  readonly workplace: string;
  @ApiProperty({ example: '1 year', description: 'Experience' })
  readonly experience: string;
  @ApiProperty({
    example: 'https://example.com/images/sample.jpg',
    description: 'URL of the image',
  })
  readonly image: string;
}
