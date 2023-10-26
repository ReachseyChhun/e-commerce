import classes from "../../styles/Home.module.css";
import Card from "../../components/Card/Card";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/CartContext";
import Image from "next/image";
import Link from "next/link";

function Home({ products, allProducts, categories }) {
  const [searchTerm, setSearchTerm] = useState("");
  const items = useContext(CartContext);
  return (
    <>
      <form>
        <div className="mt-8 mx-auto w-6/12  flex justify-start items-center ">
          <label
            for="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-600 border border-blue-500 rounded-l-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100"
            type="button"
          >
            All categories
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mockups
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Templates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Logos
                </button>
              </li>
            </ul>
          </div>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-blue-500 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search All Kind Of Products ....."
              required
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            ></input>
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
      <h1 className={classes.title}>Latest Product</h1>
      <div className={classes.container}>
        {products.content
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
                  src={product.thumbnail}
                  category={product.category}
                  name={product.title}
                  price={product.price}
                  // rating={product.rating.rate}
                />
              </div>
            );
          })}
      </div>
      <h1 className={classes.title}>Category</h1>
      <div className={classes.container}>
        <div className="grid grid-cols-5">
          {categories.content.map((category) => (
            <>
              <Link
                href={`category/${category.name}`}
                className="flex flex-col items-center mx-10 my-5"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-300 aspect-w-1 aspect-h-1">
                  <Image
                    src={category.image}
                    width={150}
                    height={150}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-xl font-semibold">{category.name}</p>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
      <h1 className={classes.title}>All Products</h1>
      <div className={classes.container}>
        {allProducts.content
          .filter((allProduct) => {
            if (searchTerm === "") return true;
            return allProduct.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          })
          .map((allProduct, index) => {
            return (
              <div key={index}>
                <Card
                  id={allProduct.id}
                  src={allProduct.thumbnail}
                  category={allProduct.category}
                  name={allProduct.title}
                  price={allProduct.price}
                  // rating={product.rating.rate}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export async function getStaticProps(id) {
  const products = await fetch(
    "http://localhost:8080/api/v1/products?page=0&size=4&sortDirection=desc"
  ).then((res) => res.json());

  const allProducts = await fetch(
    "http://localhost:8080/api/v1/products?page=0&size=16&sortDirection=asc"
  ).then((res) => res.json());

  const categories = await fetch(
    "http://localhost:8080/api/v1/categories?page=0&size=16&sortDirection=asc"
  ).then((res) => res.json());

  return {
    props: {
      products,
      allProducts,
      categories,
    },
  };
}

export default Home;
