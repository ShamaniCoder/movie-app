import * as React from "react";

const FavoriteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill={props.favorite ? "red" : "currentColor"}
    className="bi bi-heart-fill"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
    />
  </svg>
);

export default FavoriteIcon;
