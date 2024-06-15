import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  // чтобы контроллеры, провайдеры и др заработали, их нужно зарегестрировать в модуле
  controllers: [],
  providers: [],
  // когда нужно установить другие модули (у меня SequelizeModule)
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5252,
      username: 'postgres',
      password: '030815',
      database: 'meet-event',
      models: [],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
