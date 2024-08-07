import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    UsersModule,
    JwtModule.register({
      // secret key
      secret: process.env.PRIVATE_KEY || 'KEY',
      // время жизни токена
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
})
export class AuthModule {}
