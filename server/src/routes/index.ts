import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import OrphanagesController from '../controllers/OrphanagesController';
import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';
import authMiddleware from '../middlewares/auth';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', authMiddleware, OrphanagesController.show);
routes.post(
  '/orphanages',
  authMiddleware,
  upload.array('images'),
  OrphanagesController.create
);

routes.post('/users', UserController.create);

routes.post('/session', SessionController.store);

export default routes;
