import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarBanco from './src/database/db.js';
import ongRouter from './src/routes/ongRouter.js';
import userRouter from './src/routes/userRouter.js';


dotenv.config();

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rotas
app.use('/ong', ongRouter);
app.use('/user', userRouter);

// Conectar banco e iniciar servidor
conectarBanco();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));