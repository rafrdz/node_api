import { IBookDocument, IBookModel } from "./books.types";

export async function findOneOrCreate(
    this: IBookModel,
    bookId: string
): Promise<IBookDocument> {
    const record = await this.findOne({ bookId });
    if(record) {
        return record;
    } else {
        // TODO Need to rework this logic
        //return this.create({ title: this.title, author: this.author });
        return undefined;
    }
}

export async function findByAuthor(
    this: IBookModel,
    author?: string
): Promise<IBookDocument[]> {
    return this.find({ author: author });
}