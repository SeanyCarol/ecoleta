import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//Usa-se:
//index: se for listagem
//show: se for exibir um único registro daquele
//create, update, delete

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//Listar items
routes.get('/items', itemsController.index);
//Criação do ponto de coleta
routes.post('/points', pointsController.create);
//Listar os pontos
routes.get('/points', pointsController.index);
//Listar ponto de coleta específico
routes.get('/points/:id', pointsController.show);

export default routes;