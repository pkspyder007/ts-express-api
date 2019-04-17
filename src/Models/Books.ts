import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create book schema and model
const BookSchema = new Schema({
  name : {
    type : String,
    required : [true, "Name field is required"]
  },
  author : {
    type : String,
    default : 'Anonymous'
  }
});
const Book = mongoose.model('book',BookSchema);
export default Book;