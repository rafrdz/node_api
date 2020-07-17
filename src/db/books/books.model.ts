import { model } from "mongoose";
import { IBookDocument } from "./books.types";
import BookSchema from "./books.schema";

export const BookModel = model<IBookDocument>("book", BookSchema);