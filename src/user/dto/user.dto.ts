/*
 * @Title: 用户dto
 * @Author: huangjitao
 * @Date: 2022-08-04 15:34:37
 * @Description: description of this file
 */

import { IsString } from 'class-validator';
export class UserDto {
  @IsString({ message: '名字必须为字符串' })
  name: string;
  @IsString({ message: '年龄必须为字符串' })
  age: number;
}
