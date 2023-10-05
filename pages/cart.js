import React, { useContext, useState, useRef } from "react";
import CartContext from "../Context/CartContext";
import Image from "next/image";
import Modal from "../components/Modal/Modal";
import { useRouter } from "next/router";
import ReactToPrint from "react-to-print";

function Cart(props) {
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const context = useContext(CartContext);
  const componentToPrintRef = useRef(null); // Create a ref for the component

  let total = 0;

  if (context.cart.length <= 0) {
    return (
      <h1 className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 gap-12 flex flex-col text-5xl font-bold max-sm:text-2xl">
        <div>&#9785;</div>
        No Item Is In The Cart
      </h1>
    );
  }

  return (
    <>
      {modal ? <Modal /> : ""}
      <div className="flex items-start">
        <div className="w-3/4 ml-32 pt-8 rounded-xl" ref={componentToPrintRef}>
          {context.cart.map((item, index) => {
            let price = item.price;
            total += item.quantity * price;
            return (
              <div
                className="w-full bg-white border-gray-400 rounded-xl my-6 border-2 p-8 shadow-lg"
                key={index}
              >
                <div className="grid grid-cols-5 grid-[1fr,1fr,1fr,1fr] ">
                  <Image
                    src={item.src}
                    width={100}
                    height={100}
                    alt="Item"
                    class="rounded-md max-sm:scale-90 pr-5"
                  />
                  <div className="flex flex-col items-center">
                    <h1 className="font-bold mb-3">Name</h1>
                    <h1>{item.name}</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="font-bold mb-3">Price</h1>
                    <h1>${item.price}</h1>
                  </div>
                  <div className="flex flex-col items-center align-middle">
                    <h1 className="font-bold mb-3">Quantity</h1>
                    <h1>{item.quantity}</h1>
                  </div>
                  <button
                    className="bg-blue-500 h-16 w-32 p-2 max-sm:p-3 rounded-md text-white hover:bg-blue-600 ease-in-out duration-300 max-sm:text-xs"
                    onClick={() => context.removeFromCart(item.id)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })}
          <div class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
            <h1>Subtotal: $ {total.toFixed(2)}</h1>
          </div>
        </div>
        <div class="w-1/4 mr-14 ml-6 mt-12">
          <div class="bg-white rounded-lg w-[320px] shadow-md p-6 fixed ">
            <h2 class="text-lg font-semibold mb-4">Summary</h2>
            <div class="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Taxes</span>
              <span>$0.00</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <hr class="my-2"></hr>
            <div class="flex justify-between mb-2">
              <span class="font-semibold">Total</span>
              <span class="font-semibold">${total.toFixed(2)}</span>
            </div>
            {/* <button
              onClick={() => {
                if (!localStorage.getItem("token")) {
                  router.push("/sign-up");
                  return;
                }
                setModal(true);
                setTimeout(() => {
                  setModal(false);
                  context.clearCart();
                }, 2000);
              }}
              class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
            >
              Checkout
            </button> */}
            <ReactToPrint
              trigger={() => (
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              )}
              content={() => componentToPrintRef.current} // Pass the ref here
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
