import React from "react";
import { ToastContainer, toast } from "react-toastify";

import { useRouter } from "next/router";
import "../scss/global.scss";

import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  

  const router = useRouter();



 
  
  return (  
    <>
      
      <Component {...pageProps} />
          <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          />
     
    
    </>
  );
  
  
}
