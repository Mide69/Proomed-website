import React from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const template = ({ children }) => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="deScription" content />
        <meta name="keywords" content />
        <meta name="author" content="Awaiken" />
        {/* Page Title */}
        <title>MediPro - Hospital HTML Template</title>
        {/* Favicon Icon */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/favicon.png"
        />
        {/* Google Fonts css*/}
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        {/* Bootstrap Css */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        {/* SlickNav Css */}
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        {/* Swiper Css */}
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        {/* Font Awesome Icon Css*/}
        <link href="/css/all.css" rel="stylesheet" media="screen" />
        {/* Animated Css */}
        <link href="/css/animate.css" rel="stylesheet" />
        {/* Magnific Popup core CSS file */}
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        {/* Main custom Css */}
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
      </head>
      <>
        <div id="magic-cursor">
          <div id="ball"></div>
        </div>
        <Navbar />
        {children}
        <Footer />
      </>

      {/* <!-- Jquery Library File --> */}
      <Script src="/js/jquery-3.7.1.min.js"></Script>
      {/* <!-- Bootstrap js file --> */}
      <Script src="/js/bootstrap.min.js"></Script>
      {/* <!-- Validator js file --> */}
      <Script src="/js/validator.min.js"></Script>
      {/* <!-- SlickNav js file --> */}
      <Script src="/js/jquery.slicknav.js"></Script>
      {/* <!-- Swiper js file --> */}
      <Script src="/js/swiper-bundle.min.js"></Script>
      {/* <!-- Counter js file --> */}
      <Script src="/js/jquery.waypoints.min.js"></Script>
      <Script src="/js/jquery.counterup.min.js"></Script>
      {/* <!-- Magnific js file --> */}
      <Script src="/js/jquery.magnific-popup.min.js"></Script>
      {/* <!-- SmoothScroll --> */}
      <Script src="/js/SmoothScroll.js"></Script>
      {/* <!-- Parallax js --> */}
      <Script src="/js/parallaxie.js"></Script>
      {/* <!-- MagicCursor js file --> */}
      <Script src="/js/gsap.min.js"></Script>
      <Script src="/js/magiccursor.js"></Script>
      {/* <!-- Text Effect js file --> */}
      <Script src="/js/SplitText.js"></Script>
      <Script src="/js/ScrollTrigger.min.js"></Script>
      {/* <!-- Wow js file --> */}
      <Script src="/js/wow.js"></Script>
      {/* <!-- Main Custom js file --> */}
      <Script src="/js/function.js"></Script>
    </>
  );
};

export default template;
