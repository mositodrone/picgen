//clerkId, email, username, photo, firstName, lastName, planId, creditBalance

import { Document, Schema, model, models } from "mongoose";

// interface IPhoto extends Document {
//    title: string;
//    imageData: Buffer; // Store binary data of the image
// }

// const PhotoSchema = new Schema<IPhoto>({
//    title: { type: String, required: true },
//    imageData: { type: Buffer, required: true }
// });

// Define the main User schema
interface IUser extends Document {
   email: string;
   userName: string;
   clerkId: string;
   firstName: string;
   lastName: string;
   planId: number;
   creditBalance?: number;
   photos?: string; // Array of photos
}

const UserSchema = new Schema<IUser>({
   email: { type: String, required: true, unique: true, },
   userName: { type: String, required: true, unique: true, },
   clerkId: { type: String, required: true, unique: true, },
   firstName: { type: String, required: true },
   lastName: { type: String, required: true, },
   planId: { type: Number, default: 1, },
   creditBalance: { type: Number, default: 10, },
   photos: { type: String, required: true } // Embed the PhotoSchema as an array of photos
});

const User = models?.User || model('User', UserSchema)

export default User