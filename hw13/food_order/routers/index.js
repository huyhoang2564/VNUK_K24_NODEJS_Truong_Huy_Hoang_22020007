const foodRouter = require("./food.router");


module.exports = (app) => {
 //app.use("/api/categories", categoryRouter);
  app.use("/api/foods", foodRouter);
 // app.use("/api/accounts", accountRouter);
 // app.use("/api/cart", cartRouter);
};