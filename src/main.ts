import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder()
    .setTitle('管理后台')   
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  // app.setGlobalPrefix('api'); // 设置全局路由前缀
  app.useGlobalInterceptors(new TransformInterceptor());  // 拦截
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(7899);
}
bootstrap();
