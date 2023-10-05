import { useRouter } from "next/router";
import CartContext from "../../Context/CartContext";
import React, { useContext, useEffect, useState } from "react";
import DetailPage from "../../components/DetailPage/DetailPage";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(async (res) => {
        return await res.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  return (
    <div>
      {product ? (
        <DetailPage
          id={product.id}
          src={product.image}
          category={product.category}
          name={product.title}
          price={product.price}
          rating={product.rating}
          description={product.description}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetails;
