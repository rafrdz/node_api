# node_api
A RESTful API built with Node, Typescript, MongoDB, and Docker

### Deployment Instructions
* **Option 1:** Run `docker-compose build` to build the images, then run `docker-compose up -d` to run the containers in the background
* **Option 2:** Run `docker-compose up --build` to force building the images each time, even if they already exist
* To stop the containers, run `docker-compose down`

### Usage
* To create a new book, submit a POST request to `localhost:5000/book/add` with the following body structure:
```
{
  "title": "[Book Title]",
  "author": "[Author]"
}
```
* To get all books, submit a GET request to `localhost:5000/book/all`
* To get a book by ID, submit a GET request to `localhost:5000/book/id/[ID of the book]`
* To delete a book by ID, submit a POST request to `localhost:5000/book/delete/[ID of the book]`