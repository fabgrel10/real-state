import express from 'express';

const userRoutes = express.Router();

userRoutes.get('/', (_req, res) => {
  res.send('User Routes');
});

userRoutes.get('/about', (_req, res) => {
  res.send('About User Routes');
});

export default userRoutes;
