import { Schema } from "mongoose";
import { findOneOrCreate, findByAuthor } from "./books.statics";
import { sameAuthor } from "./books.methods";

const BookSchema = new Schema({
    title: String,
    author: String
});

BookSchema.statics.findOneOrCreate = findOneOrCreate;
BookSchema.statics.findByAuthor = findByAuthor;

BookSchema.methods.sameAuthor = sameAuthor;

export default BookSchema;