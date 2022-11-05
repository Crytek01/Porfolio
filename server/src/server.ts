import dotenv from 'dotenv';
import app from './app.js';

process.on('uncaughtException', ({ name, message }) => {
  console.log('UNCAUGHT EXCEPTION!', 'Shutting down...');
  console.log(name, message);
  process.exit(1);
});

dotenv.config();

const PORT = process.env.PORT ?? 5000;

const server = app.listen(PORT, () => {
  console.log(`App is running on port ${PORT} on ${process.env.NODE_ENV} mode`);
});

process.on('unhandledRejection', ({ name, message }) => {
  console.log('UNHANDLED REJECTION!', 'Shutting down...');
  console.log(name, message);

  server.close(() => process.exit(1));
});
