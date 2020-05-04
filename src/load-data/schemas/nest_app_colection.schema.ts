import * as mongoose from 'mongoose';

export const NestAppCollection = new mongoose.Schema({
  name: String,
});

export interface NestAppCollectionInterface extends mongoose.Document {
    readonly _id: string;
    readonly name: string;
  }