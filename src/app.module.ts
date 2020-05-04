import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoadDataModule } from './load-data/load-data.module';

// YCxHlPVI9aLpk81Q
// mongodb+srv://nest_application:YCxHlPVI9aLpk81Q@cluster0-ekqyp.gcp.mongodb.net/test?retryWrites=true&w=majority
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nest_application:YCxHlPVI9aLpk81Q@cluster0-ekqyp.gcp.mongodb.net/nest_app?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoCreate: true
      }),
    LoadDataModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
