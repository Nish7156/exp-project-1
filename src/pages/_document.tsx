import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></script>
        <link rel="stylesheet" href="../styles/css/normalize.css" />
        <link rel="stylesheet" href="../styles/css/main.css" />
        <link rel="stylesheet" href="../styles/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../styles/css/animate.min.css" />
        <link rel="stylesheet" href="../styles/css/font-awesome.min.css" />
        <link rel="stylesheet" href="vendor/OwlCarousel/owl.carousel.min.css" />
        <link
          rel="stylesheet"
          href="vendor/OwlCarousel/owl.theme.default.min.css"
        />
        <link rel="stylesheet" href="css/meanmenu.min.css" />
        <link rel="stylesheet" type="text/css" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/hover-min.css" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" type="text/css" href="css/ie-only.css" />
      </Head>
      <body>
        <Main />
        <NextScript>
          <Script async src="../js/main.js" />
          <Script async src="../js/ticker.js" />
          <Script async src="js/modernizr-2.8.3.min.js" />
        </NextScript>
      </body>
    </Html>
  );
}
