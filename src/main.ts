import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import metadata from './metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await SwaggerModule.loadPluginMetadata(metadata);
  const config = new DocumentBuilder().setTitle('Test API').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
