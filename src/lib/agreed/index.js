const products = require("./products");

module.exports = [
  {
    request: {
      path: "/v1/api/products",
      method: "GET"
    },
    response: {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Credentials": true
      },
      body: {
        page: 1,
        size: 2,
        items: "{:products}"
      },
      values: {
        products
      }
    }
  }
];
