import { Module } from '@nestjs/common';
import { EventModule } from './gateway/event.module';

@Module({
  imports: [EventModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
