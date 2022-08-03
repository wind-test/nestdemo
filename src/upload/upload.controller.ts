/*
 * @Title: 上传控制器
 * @Author: huangjitao
 * @Date: 2022-08-02 16:15:47
 * @Description: description of this file
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Render,
  UploadedFile,
  Response,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Get('/one')
  @Render('upload/uploadOne')
  One() {
    return {};
  }

  @Post('/doAddOne')
  @UseInterceptors(FileInterceptor('pic'))
  UploadOne(@Body() body, @UploadedFile() file, @Response() res) {
    console.log('body', body, 'file', file);
    const writeStream = createWriteStream(
      join(
        __dirname,
        '../../public/upload',
        `${Date.now()}-${file.originalname}`,
      ),
    );

    writeStream.write(file.buffer);
    return `前往查看文件 localhost:3000/static/upload/${Date.now()}-${
      file.originalname
    }`;
  }

  @Get('/many')
  @Render('upload/uploadMany')
  Many() {
    return {};
  }

  @Post('/doAddMany')
  @UseInterceptors(AnyFilesInterceptor())
  UploadMany(@Body() body, @UploadedFiles() files, @Response() res) {
    console.log('body', body, 'file', files);
    for (const file of files) {
      const writeStream = createWriteStream(
        join(
          __dirname,
          '../../public/upload',
          `${Date.now()}-${file.originalname}`,
        ),
      );
      writeStream.write(file.buffer);
    }
  }
}
