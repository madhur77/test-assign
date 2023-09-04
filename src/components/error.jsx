import React from 'react';

const Error = ({ error }) => {
  console.log(error);
  switch (error) {
    case "healthy":
      return <span style={{ color: "green" }}> healthy</span>;

    case "disabled":
      return <span style={{ color: "yellow" }}> disabled</span>;

    case "error":
      return <span style={{ color: "red" }}> error</span>;
  }
};

export default Error;
