import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 设置全局路由前缀
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(7899);
}
bootstrap();
