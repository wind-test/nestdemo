/*
 * @Title: 用户管道
 * @Author: huangjitao
 * @Date: 2022-08-04 13:58:07
 * @Description: description of this file
 */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  private schema;
  constructor(schema) {
    this.schema = schema;
  }
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);
    const { error } = this.schema.validate(value);
    if (error) {
      return false;
    }
    return value;
  }
}
