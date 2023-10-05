import React from "react";
import Image from "next/image";
import Link from "next/link";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";

const Card = (props) => {
  const { id, src, category, name, price, rating } = props;
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  return (
    <div class="relative m-10 w-[400px] h-fit max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <Link href={`/detail/${id}`}>
        <div className="flex justify-center">
          <img
            class=" p-3 h-60 rounded-t-lg object-cover hover:scale-[1.1] duration-300	"
            src={props.src}
            alt="product image"
          />
             
        </div>
      </Link>
      <div class="mt-4 px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-slate-900">
          {props.name}
        </h5>
        <div class="mt-2.5 mb-5 flex items-center">
          <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
            {props.rating}
          </span>
          {props.category}
        </div>
        <div class="flex items-center justify-between">
          <p>
            <span class="text-2xl font-bold text-slate-900">
              $ {props.price.toFixed(2)}
            </span>
          </p>
          <button
            class="flex justify-center items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => addToCart(props)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    // <div className={classes.container}>
    //   <div className={classes.imageContainer}>
    //     <Image
    //       src={src}
    //       width="300"
    //       height="300"
    //       alt="Cocktail"
    //       quality={100}
    //       style={{
    //         borderTopRightRadius: "10px",
    //         borderTopLeftRadius: "10px",
    //       }}
    //     />
    //   </div>
    //   <div className={classes.cocktailContent}>
    //     <div className={classes.name}>{name}</div>
    //     <div className={classes.category}>{category}</div>
    //     <div className={classes.price}>$ {price}</div>
    //   </div>
    //   <div className={classes.action}>
    //     <div className={classes.btn}>
    //       <Link href={`/detail/${id}`}>More info</Link>
    //     </div>
    //     <div className={classes.counter}>
    //       <button
    //         className={classes.actionBtn}
    //         onClick={() => removeFromCart(id)}
    //       >
    //         -
    //       </button>
    //       {cart.findIndex((val) => val.id === id) != -1 ? (
    //         <div className={classes.count}>
    //           {cart[cart.findIndex((val) => val.id === id)].quantity}
    //         </div>
    //       ) : (
    //         0
    //       )}
    // <button
    //   className={classes.actionBtn}
    //   onClick={() => addToCart(props)}
    // >
    //   +
    // </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
