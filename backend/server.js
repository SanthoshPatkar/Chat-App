const express=require('express')
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const userRoutes=require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config()
connectDB();

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
res.send("Api runnning");
})

app.use('/api/user',userRoutes);
app.use

app.use(notFound);
app.use(errorHandler)



const port=process.env.PORT
app.listen(port,console.log(`runs at ${port}`))