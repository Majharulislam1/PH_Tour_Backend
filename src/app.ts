
import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { router } from './app/Routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFounds';

const app = express();

app.use(express.json())
app.use(cors());

app.use('/api/v1',router);

app.get('/',(req:Request,res:Response)=>{
      res.send({
          success:'true',
          message:"successfully connection the server"
      })
})



app.use(globalErrorHandler);
app.use(notFound);



export default app;