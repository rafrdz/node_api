import { Request, Response } from "express";

import Book from "../models/book";

export const getAllBooks = (req: Request, res: Response) => {
    const books = Book.find((err: any, books: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(books);
        }
    });
};

export const getBookByID = (req: Request, res: Response) => {
    const book = Book.findById(req.params.id, (err: any, book: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(book);
        }
    });
};

export const addBook = (req: Request, res: Response) => {
    const book = new Book(req.body);
    book.save((err: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(book);
        }
    });
};

export const deleteBookByID = (req: Request, res: Response) => {
    const book = Book.deleteOne({ _id: req.params.id }, (err: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send("Book deleted from database");
        }
    });
};