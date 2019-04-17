import * as express from 'express';
import {Request , Response} from 'express';
import Book from '../Models/Books'
const router = express.Router();
const Ninja = require('../Models/Books');


//GEt all books from db
router.get('/books/:author', (req:Request,res:Response)=> {
  Book.find({author: req.params.author}).then(books=>{
    res.send(books);
  }).catch(err=>{
    res.send(err);
  });

})


//add a book to the db
router.post("/books", (req:Request, res:Response,next:any) => {
  Book.create(req.body)
    .then(book => {
      console.log('adding');
      res.send(book);
    })
    .catch(next);
});

//Edit a book's in the db
router.put("/books/:id", (req, res, next) => {
  Book.findOneAndUpdate({ _id: req.params.id }, req.body).then(book => {
    Book.findOne({ _id: req.params.id }).then(book => {
      res.send(book);
    });
  });
});

//Delete a book's from the db
router.delete("/books/:id", (req, res, next) => {
  Book.findByIdAndRemove({ _id: req.params.id }).then(book => {
    res.send(book);
  });
});

export default router;