import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Model({
    id: { type: String, required: true },
    name: { type: String, required: true }
})
export class User extends mongoose.Document {
    id: string;
    name: string;
}