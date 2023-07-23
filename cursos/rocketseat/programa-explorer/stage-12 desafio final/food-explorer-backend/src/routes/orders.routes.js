const { Router } = require('express');
const OrdersController = require("../controllers/OrdersController")
const ordersController = new OrdersController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const ensureUserIsAdmin = require("../middlewares/ensureUserIsAdmin");
const ordersRoutes = Router();

ordersRoutes.use(ensureAuthenticated);
ordersRoutes.post("/", ordersController.create);
ordersRoutes.get("/", ordersController.index);
ordersRoutes.put("/", ensureUserIsAdmin, ordersController.update);

module.exports = ordersRoutes;