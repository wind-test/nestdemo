/* eslint-disable @typescript-eslint/ban-types */
/*
 * @Title: 类验证管道
 * @Author: huangjitao
 * @Date: 2022-08-04 15:46:46
 * @Description: description of this file
 */
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    console.log('error', errors);
    if (errors.length > 0) {
      // 显示第一个错误提示
      throw new BadRequestException(Object.values(errors[0].constraints)[0]);
    }
    return value;
  }
  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
