import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from './schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
            return {
                secret: config.get<string>('JWT_SECRET'),
                signOptions: {
                    expiresIn: config.get<string | number>('JWT_EXPIRE')
                }
            }
        }
    }),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
  ],  
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
