import express, { response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World TEST' });
});

app.listen(3333, () => console.log('🚀 Server is running!'));
