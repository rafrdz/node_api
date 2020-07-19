import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

import connect from "./connect";
import * as BookController from "./controllers/book_controller";

const app: Application = express();
const port: number = 5000 || process.env.PORT;
const db: string = "mongodb://testUser:testPassword@db:27017/books?authSource=admin";

connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello There");
});

app.get("/book/all", BookController.getAllBooks);
app.get("/book/id/:id", BookController.getBookByID);
app.post("/book/add", BookController.addBook);
app.post("book/delete/:id", BookController.deleteBookByID);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});