import { Document, Model } from "mongoose";

export interface IBook {
    title: String;
    author: String;
}

export interface IBookDocument extends IBook, Document {
    sameAuthor: (this: IBookDocument) => Promise<Document[]>;
}

export interface IBookModel extends Model<IBookDocument> {
    findOneOrCreate: (
        this: IBookModel,
        {
            title,
            author
        }: { title: string, author: string }
    ) => Promise<IBookDocument>;
    findByAuthor: (
        this: IBookModel,
        author?: string
    ) => Promise<IBookDocument[]>;
}