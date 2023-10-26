import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import GlobalState from "../Context/GlobalState";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/404" ||
    router.pathname === "/sign-up" ||
    router.pathname === "/login"
      ? false
      : true;

  return (
    <>
      <Head>
        <title>E-Commerce</title>
      </Head>
      <GlobalState>
        {showHeader ? (
          <Layout>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </GlobalState>
      <NextNProgress
        color="white"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <footer className="bg-blue-500 rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              ComputerShop
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
