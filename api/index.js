import { configDotenv } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';


configDotenv();


mongoose.connect(process.env.MONGO)
.then(() => { 
            console.log('MongoDB is Connected');
         })
         .catch(err =>{
            console.log(err);
         });


const app = express();

app.listen(3000, () => {
console.log('Server is running on port 3000');

});

app.use('/api/user', userRoutes);