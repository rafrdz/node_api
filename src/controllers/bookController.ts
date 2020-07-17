import { Request, Response } from "express";

export let allBooks = (req: Request, res: Response) => {
    res.send("Gets all Books");
};

export let getBook = (req: Request, res: Response) => {
    res.send("Returns one Book");
};

export let deleteBook = (req: Request, res: Response) => {
    res.send("Deletes one Book");
};

export let updateBook = (req: Request, res: Response) => {
    res.send("Updates one Book");
};

export let addBook = (req: Request, res: Response) => {
    res.send("Adds one Book");
};