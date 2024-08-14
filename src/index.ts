import express, { Application, Response, Request } from 'express';
import 'dotenv/config';

const app: Application = express();

const PORT = process.env.PORT || 7000;

app.get('/', (req: Request, res: Response) => {
	return res.send('Server started');
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
