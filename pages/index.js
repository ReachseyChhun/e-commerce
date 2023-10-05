import classes from "../styles/Home.module.css";
import Card from "../components/Card/Card";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";

function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const items = useContext(CartContext);
  console.log(products)

  return (
    <>
      <div className="mt-8 mx-auto w-10/12 flex justify-start items-center">
        <input
          placeholder="Search . . ."
          className="p-2 rounded-md w-1/3"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        ></input>
      </div>
      <h1 className={classes.title}>Products</h1>
      <div className={classes.container}>
        {products
          .filter((product) => {
            if (searchTerm === "") return true;
            return product.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          })
          .map((product, index) => {
            return (
              <div key={index}>
                <Card
                  id={product.id}
                  src={product.image}
                  category={product.category}
                  name={product.title}
                  price={product.price}
                  rating={product.rating.rate}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()    
  );

  return {
    props: {
      products,
    },
  };
}

export default Home;
