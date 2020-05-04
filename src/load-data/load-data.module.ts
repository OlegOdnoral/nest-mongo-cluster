import { Module } from '@nestjs/common';
import { LoadDataService } from './load-data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NestAppCollection } from './schemas/nest_app_colection.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'NestApp', schema: NestAppCollection }])
],
  providers: [
      LoadDataService
  ]
})
export class LoadDataModule {}
