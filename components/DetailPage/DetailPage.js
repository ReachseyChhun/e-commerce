import CartContext from "../../Context/CartContext";
import { useContext } from "react";
import Image from "next/image";

const DetailPage = (props) => {
  const { id, src, category, name, price, rating, description } = props;
  const { addToCart, removeFromCart, cart } = useContext(CartContext);
  return (
    <section class="overflow-hidden bg-white py-11 font-poppins">
      <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full mb-8 md:w-1/2 md:mb-0">
            <div class="sticky top-0 z-50 overflow-hidden ">
              <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                <Image
                  src={props.src}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <div class="flex-wrap hidden md:flex ">
                <div class="w-1/2 p-2 sm:w-1/4">
                  <a
                    href="#"
                    class="block border border-transparent hover:border-blue-300"
                  >
                    {/* <img src="https://i.postimg.cc/6qcPhTQg/R-18.png" alt=""
                                    class="object-cover w-full lg:h-20"> */}
                  </a>
                </div>
                <div class="w-1/2 p-2 sm:w-1/4">
                  <a
                    href="#"
                    class="block border border-transparent hover:border-blue-300"
                  >
                    {/* <img src="https://i.postimg.cc/6qcPhTQg/R-18.png" alt=""
                                    class="object-cover w-full lg:h-20"> */}
                  </a>
                </div>
                <div class="w-1/2 p-2 sm:w-1/4">
                  <a
                    href="#"
                    class="block border border-transparent hover:border-blue-300"
                  >
                    {/* <img src="https://i.postimg.cc/6qcPhTQg/R-18.png" alt=""
                                    class="object-cover w-full lg:h-20"> */}
                  </a>
                </div>
              </div>
              <div class="px-6 pb-6 mt-6 border-t border-gray-300 ">
                <div class="flex flex-wrap items-center mt-6">
                  <span class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-4 h-4 text-gray-700  bi bi-truck"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </span>
                  <h2 class="text-lg font-bold text-gray-700 dark:text-gray-400">
                    Free Shipping
                  </h2>
                </div>
                <div class="mt-2 px-7">
                  <a class="text-sm text-blue-400 dark:text-blue-200" href="#">
                    Get delivery dates
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 ">
            <div class="lg:pl-20">
              <div class="mb-8 ">
                <h2 class="max-w-xl mb-6 text-2xl font-bold  md:text-4xl">
                  {props.name}
                </h2>
                <p class="inline-block mb-6 text-4xl font-bold text-gray-700 ">
                  <span>$ {props.price}</span>
                </p>
                <p class="max-w-md text-gray-700">{props.description} </p>
                <p class="mt-4 mb-6 text-md font-bold text-gray-700 ">
                  {props.rating.count} Sold
                </p>
              </div>
              <div class="mb-8">
                <h2 class="w-16 pb-1 mb-4 text-2xl font-bold border-b border-blue-300 text-gray-400 dark:border-gray-600">
                  Rating {props.rating.rate}
                </h2>
              </div>
              <div class="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => addToCart(props)}
                  class="w-full p-4 bg-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700"
                >
                  Add to cart
                </button>
                <button class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-500 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
