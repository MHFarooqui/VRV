const express = require('express');

const { connectDb } = require('./src/DAL/Connection');
const authRoute = require('./src/Routes/AuthenticationRoutes');
const userRoutes = require('./src/Routes/testResourceRoutes');


const port = process.env.PORT; 
const app = express();
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoutes);

connectDb();

app.get('/', (req, res ) => {
    res.send("hello world");
});

app.use(express.json());

app.listen(port , () => {
    console.log(`listening to port ${port}`);
});