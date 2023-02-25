import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { UserLoginDTO } from '../dto/user.login.dto';
import { UserRegisterDTO } from '../dto/user.register.dto';
import { JwtAuthGuard } from '../jwt/jwt.guard';
import { AuthService } from '../service/auth.service';

@ApiTags('01. auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async createUser(@Body() body: UserRegisterDTO) {
    return await this.authService.createUser(body);
  }

  @Post('login')
  async login(@Body() body: UserLoginDTO) {
    return this.authService.login(body);
  }

  // 로그인 정보 조회
  @UseGuards(JwtAuthGuard)
  @Get('login')
  getLoginUser(@CurrentUser() user) {
    return user;
  }
}
