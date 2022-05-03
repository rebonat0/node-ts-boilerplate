import 'dotenv/config';
import app from './app';

app.listen(process.env.APP_PORT, () => {
  console.log(`App started on http://localhost:${process.env.APP_PORT}`);
});
