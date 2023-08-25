import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import router from './routes';
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With, Accept",
  });
  next();
});

app.use('/v1', router)

app.get('/', function (req: Request, res: Response) {
  res.send('coucou');
})

app.listen(3000, () => {
  console.log('Le serveur est en écoute sur le port 3000');
});