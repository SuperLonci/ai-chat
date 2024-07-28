import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'chatdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ChatModule,
  ],
})
export class AppModule {}
