import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const routerProduct = Router();

const productController = new ProductController();
// const authMiddleware = new AuthMiddleware();
// authMiddleware.tokenValidate.bind(authMiddleware),

routerProduct.post('/', productController.newProduct.bind(productController));
routerProduct.get(
  '/',
  productController.getAll.bind(productController),
);

export default routerProduct;