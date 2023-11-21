import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Cart = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();

  console.log(id);

  console.log(searchParams);

  return <div>Cart</div>;
};

export default Cart;
