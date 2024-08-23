
import express from "express";
import dotenv from "dotenv";
import {router} from './routes/routes';
dotenv.config();
let app = express();

const PORT =3000;//process.env.PORT;
router.get('/');

app.listen(PORT, ()=>{
    console.log(`Server On! http://localhost:${PORT}`);
});