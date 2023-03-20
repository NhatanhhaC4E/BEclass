const products = [
    {"id": 1, "name": "Ao Polo", "price": 200, "gender": "Men", "amount": 25},
    {"id": 2, "name": "Ao Blazer","price": 380, "gender": "Men", "amount": 20},    
    {"id": 3, "name": "Ao Cardigan", "price": 280, "gender": "Men", "amount": 21},
    {"id": 4, "name": "Ao So mi", "price": 245, "gender": "Women", "amount": 10},
    {"id": 5, "name": "Ao 2 day", "price": 180, "gender": "Women", "amount": 15},
]
const fs = require('fs');
const http = require("http");
const url = require("url");
const { findMax, findMinWomen } = require('./productService')

fs.writeFileSync("./products.json", JSON.stringify(products), (err) =>  {
    if (err) {
        console.error(err);
    }}
)


const serverListener = (req, res) => {
    switch (req.url) {
        case "/": {
        const index = fs.readFileSync("./index.html", "utf-8");
        res.end(index);
            break;
        }
        case "/api/products": {
            const productsData = fs.readFileSync("./products.json", "utf-8");
            const allProducts = JSON.parse(productsData)
            res.end(JSON.stringify(allProducts));
            break;
        }  
        case "/api/products/getMaxPrice": {
            const productsData = fs.readFileSync("./products.json", "utf-8");
            const getMaxPrice = findMax(JSON.parse(productsData));
            res.end(JSON.stringify(getMaxPrice));
            break;
        }
        case "/api/getMinPriceWoman": {
            const productsData = fs.readFileSync("./products.json", "utf-8");
            const getMinPriceWomen = findMinWomen(JSON.parse(productsData));
            res.end(JSON.stringify(getMinPriceWomen));
            break;
        }
        default:
            break;
    }
  };
  
  const server = http.createServer(serverListener);
  server.listen(8080, () => {
    console.log(`Server is running on port 8080`);
  });