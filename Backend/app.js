import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: './config/config.env' });
console.log("Frontend URL from environment variables:", process.env.FRONTEND_URL);

app.use(cors({
    origin: [process.env.FRONTEND_URL], //path of frontend jisse backend ko connect karna h
    methods: ["POST"], //frontend me kon kon se method use krna chahte h
    credentials: true,
}));


app.use(express.json());   // string ko object me convert karna 
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationRouter);

dbConnection();  
app.use(errorMiddleware);

export default app; 