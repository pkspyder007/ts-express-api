import * as express from 'express';
import {Request , Response} from 'express';
import routes from './Routes/api';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';


//setup express app
const app  = express();

//connect to mongodb
// DB Config
const db = 'mongodb+srv://Praveen:praveen@cluster0-6yvlv.mongodb.net/test?retryWrites=true';

// Connect to MongoDB
mongoose
  .connect(db,{useNewUrlParser : true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
//mongoose.connect("mongodb+srv://praveen:praveen@cluster0-gchlr.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true });
//mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(routes)

//error handling middleware
app.use((err:any, req:Request , res:Response, next:any) => {
  res.send({
    err: err.msg
  });
});
let PORT:any = process.env.PORT || 5000;
//listen for requests
app.listen(PORT, ()=>{
  console.log(`API server started on port : ${PORT}`);
});
