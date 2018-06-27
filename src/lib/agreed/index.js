const products = require("./products");

const headers = {
  "Access-Control-Allow-Origin": "http://localhost:8080",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
  "Access-Control-Allow-Credentials": true
};

const productPaths = products.map(item => ({
  request: {
    path: `/v1/api/products/${item.id}`,
    method: "GET"
  },
  response: {
    headers,
    body: item
  }
}));

module.exports = [
  ...productPaths,
  {
    request: {
      path: "/v1/api/products",
      method: "GET"
    },
    response: {
      headers: headers,
      body: {
        page: 1,
        size: 2,
        items: products
      }
    }
  }
];
