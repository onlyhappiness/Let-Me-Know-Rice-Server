import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateMenuDTO {
  // 가게 아이디
  // @IsNotEmpty()
  // @IsInt()
  // storeId: number;

  // 이름
  @ApiProperty({
    example: '이름',
    description: '이름',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  // 가격
  @ApiProperty({
    example: '가격',
    description: '가격',
  })
  @IsNotEmpty()
  @IsString()
  price: string;
}
