import products from "./products";

const carts = [
    {
      id: 1,
      product: products[0],
      quantity: 3,
      cost: parseInt(products[0].price * 3),
    },
    {
      id: 2,
      product: products[1],
      quantity: 2,
      cost: parseInt(products[1].price * 3),
    },
  ];
  export default carts;