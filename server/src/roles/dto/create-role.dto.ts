// import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  // @ApiProperty({ example: 'user@email.com', description: 'Email' })
  readonly value: string;
  // @ApiProperty({ example: '12345678', description: 'Password' })
  readonly description: string;
}
