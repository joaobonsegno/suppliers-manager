import express from 'express';
import { ProviderController } from './controllers/ProviderController';

const routes = express.Router();
const providerController = new ProviderController();

routes.get('/providers', providerController.findAll);
routes.get('/providers/:id', providerController.findById);
routes.post('/providers', providerController.create);
routes.put('/providers/:id', providerController.update);
routes.delete('/providers/:id', providerController.delete);

module.exports = routes;