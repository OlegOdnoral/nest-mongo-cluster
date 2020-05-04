import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NestAppCollectionInterface } from './schemas/nest_app_colection.schema';

@Injectable()
export class LoadDataService {
    constructor(@InjectModel('NestApp') private nestApp: Model<NestAppCollectionInterface>) {
        console.log('LoadDataService')
        this.findAll().then((res) => {
            console.log(res);
        })
        //this.insertData();
    }

    async insertData() {
        const newData = new this.nestApp({name: "Bob"});
        const res = await newData.save();
        console.log(res);
    }

    async findAll(): Promise<any[]> {
        return await this.nestApp.find().exec();
      }

}
