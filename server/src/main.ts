import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const websites = [ process.env.CLIENT_URL ];
  app.enableCors(
    {
      origin: function (origin, callback) {
        if (websites.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
      methods: 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      credentials: true,
    }
  ); // Enable CORS

  app.setGlobalPrefix('api');


  const port = process.env.PORT || 3001;
  await app.listen(port);
}
bootstrap();
