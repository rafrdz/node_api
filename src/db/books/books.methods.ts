import { Document } from "mongoose";
import { IBookDocument } from "./books.types";

export async function sameAuthor(this: IBookDocument):
Promise<Document[]> {
    return this.model("book").find({ author: this.author });
}