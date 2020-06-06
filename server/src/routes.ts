import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//Usa-se:
//index: se for listagem
//show: se for exibir um único registro daquele
//create, update, delete

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

//Listar items
routes.get('/items', itemsController.index);
//Listar os pontos
routes.get('/points', pointsController.index);
//Listar ponto de coleta específico
routes.get('/points/:id', pointsController.show);

//Criação do ponto de coleta
routes.post('/points', upload.single('image'), pointsController.create);

export default routes;