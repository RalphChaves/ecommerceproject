import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProdModule } from './prod/prod.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ProdModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
