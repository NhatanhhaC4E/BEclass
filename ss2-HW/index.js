import express from 'express';
import productsRouter from './routers/products.jd';
import customerRouter from './routers/customers.jd';

const app = express;

app.use("/product", productsRouter);
app.use("/customer", customerRouter);
app.listen(8080, () => {
    console.log("server is running")
})