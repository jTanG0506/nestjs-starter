import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import * as helmet from 'helmet'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      whitelist: true,
    })
  )

  app.use(helmet())
  app.use(helmet.hidePoweredBy())

  await app.listen(3001)
}

bootstrap()
