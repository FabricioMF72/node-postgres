import express, {Request, Response , Application } from 'express';
import userRoutes from './src/routes/userRoutes';

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});