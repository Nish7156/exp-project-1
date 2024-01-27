import React from "react";

const CustomErrorPage = ({ statusCode }: any) => {
  return (
    <div>
      <h1>{statusCode}</h1>
      <p>Oops! Something went wrong.</p>
    </div>
  );
};

CustomErrorPage.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomErrorPage;
